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
  message: string | undefined
}

const user: IUser = JSON.parse(localStorage.getItem("user") || "")

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
  extraReducers: (builder) => {},
})

export const { reset } = authSlice.actions
export default authSlice.reducer
