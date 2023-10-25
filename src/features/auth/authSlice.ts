import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authService } from "@Features"
import { AxiosError } from "axios"

interface IUser {
  email: string
  password: string
}

interface IinitialState {
  user: null | IUser
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  authenticated: boolean
  message: string | unknown
}

const json = localStorage.getItem("user")
const user: IUser = json && JSON.parse(json)

const initialState: IinitialState = {
  user: user || null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  authenticated: false,
  message: "",
}

//Регистрация
//TODO Доделать типизацию
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (userData, thunkAPI) => {
    try {
      return await authService.signIn(userData)
    } catch (error) {
      const err = error as AxiosError
      return thunkAPI.rejectWithValue(err.response?.data)
    }
  },
)

//Вход пользователя
export const login = createAsyncThunk(
  "auth/login",
  async (userData: IUser, thunkAPI) => {
    try {
      // return await authService.login(userData)
      //поменять когда будет работать сервер
      const { email, password } = userData
      console.log(email, password)
      return userData
    } catch (error) {
      const err = error as AxiosError
      return thunkAPI.rejectWithValue(err.response?.data)
    }
  },
)
//Выход
export const logout = createAsyncThunk("auth/logout", async (data) => {
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
      state.authenticated = false
      state.message = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.authenticated = true
        state.user = action.payload
      })
      .addCase(signIn.rejected, (state, action) => {
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
        state.authenticated = true
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
