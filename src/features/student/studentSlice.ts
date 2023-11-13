import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { studentService } from "@Features"
import { TIinitialState } from "features/types/globalsType"
import { AxiosError } from "axios"

type TStudentProfiale = {
  id: number
  email: string
  first_name: string
  last_name: string
  phone: string
  link_vk: string
  link_tg: string
  link_fb: string
  link_be: string
  link_in: string
  avatar: null | string
  city: {
    id: number
    name: string
  }
  relocation: boolean
  specialization: string
  skills: {
    id: number
    skill: string
    category: string
  }[]
  language: {
    id: number
    language: string
    level: string
  }[]
  employment: {
    id: number
    name: string
  }[]
  about_me: string
  about_exp: string
  about_education: string
}

interface IInitialState extends TIinitialState {
  studentProfile: TStudentProfiale | null
}

const initialState: IInitialState = {
  studentProfile: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
}

export const getStudentProfile = createAsyncThunk(
  "student/studentResume",
  async (studentID: number | string, thunkAPI: any) => {
    try {
      return await studentService.getCandidateResume(studentID)
    } catch (error) {
      const err = error as AxiosError
      return thunkAPI.rejectWithValue(err.response?.data)
    }
  },
)

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    closeStudent: (state) => {
      state.studentProfile = null
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getStudentProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.studentProfile = action.payload
      })
      .addCase(getStudentProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.studentProfile = null
      })
  },
})

export const { closeStudent } = studentSlice.actions
export default studentSlice.reducer
