import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AxiosError } from "axios"
import { vacancyService } from "@Features"

export interface IVacancy {
  id: number
  hr: number
  name: string
  city: number
  address: string
  description: string
  responsibilities: string
  requirements: string
  conditions: string
  salary_from: number
  salary_to: number
  currency: number
  testcase: string
  experience: number
  employment: IEmployment
  schedule: IEmployment
  skills: IEmployment[]
  languages: ILanguage[]
  pub_datetime: Date
  is_archived: boolean
  is_template: boolean
  template_invite: string
}

export interface IEmployment {
  name: string
}

export interface ILanguage {
  language: string
  level: string
}

interface IinitialState {
  vacancyList: IVacancy[]
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  message: string | unknown
}

const initialState: IinitialState = {
  vacancyList: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
}

export const getVacancies = createAsyncThunk(
  "vacancy/get",
  async (_, thunkAPI) => {
    try {
      return vacancyService.getVacancies()
    } catch (error) {
      const err = error as AxiosError
      return thunkAPI.rejectWithValue(err.response?.data)
    }
  },
)
export const createVacancy = createAsyncThunk(
  "vacancy/create",
  async (vacancyData: any, thunkAPI) => {
    try {
      return vacancyService.createVacancy(vacancyData)
    } catch (error) {
      const err = error as AxiosError
      return thunkAPI.rejectWithValue(err.response?.data)
    }
  },
)

export const updateVacancy = createAsyncThunk(
  "vacancy/update",
  async (vacancyData: any, thunkAPI) => {
    try {
      return vacancyService.createVacancy(vacancyData)
    } catch (error) {
      const err = error as AxiosError
      return thunkAPI.rejectWithValue(err.response?.data)
    }
  },
)
// export const deleteVacancy = createAsyncThunk()

const vacanciesSlice = createSlice({
  name: "vanacies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createVacancy.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createVacancy.fulfilled, (state, action) => {
        state.vacancyList.push(action.payload)
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
      })
      .addCase(createVacancy.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })

      .addCase(getVacancies.pending, (state) => {})
      .addCase(getVacancies.fulfilled, (state, action) => {
        state.vacancyList = action.payload
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
      })
      .addCase(getVacancies.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export default vacanciesSlice.reducer
