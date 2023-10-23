import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authService } from "@Features"
import { AxiosError } from "axios"

interface IUser {
  name: string
  email: string
}

interface IinitialState {
  user: null | IUser
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  message: string | unknown
}

const json = localStorage.getItem("user")
const user: IUser = json && JSON.parse(json)

const initialState: IinitialState = {
  user: user || null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
}

//Регистрация
//TODO Доделать типизацию
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      const err = error as AxiosError
      return thunkAPI.rejectWithValue(err.response?.data)
    }
  },
)
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const err = error as AxiosError
    return thunkAPI.rejectWithValue(err.response?.data)
  }
})
//Выход
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout()
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
