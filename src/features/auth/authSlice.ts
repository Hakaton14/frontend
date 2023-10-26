import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authService } from "@Features"
import { AxiosError } from "axios"

interface IUser {
  email: string
  first_name?: string
  last_name?: string
  phone?: string
  avatar?: string
  date_joined?: string
  password: string
  access?: string
  refresh?: string
}

interface IinitialState {
  user: IUser | null
  isLoading: boolean
  isError: boolean
  isSuccess: boolean

  message: string | unknown
}

//Получение пользователя из локалстора
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
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (userData: IUser, thunkAPI) => {
    try {
      return authService
        .signUp(userData)
        .then((res) => authService.login(userData))
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
      return await authService.login(userData)
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
      state.message = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(signUp.rejected, (state, action) => {
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
