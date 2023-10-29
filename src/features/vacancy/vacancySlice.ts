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
  async (thunkAPI) => {
    try {
      return vacancyService.getVacancies()
    } catch (error) {}
  },
)
export const createVacancy = createAsyncThunk(
  "vacancy/create",
  async (vacancyData: any, thunkAPI) => {
    console.log(vacancyData)
    try {
      return vacancyService.createVacancy(vacancyData)
    } catch (error) {}
  },
)

// export const updateVacancy = createAsyncThunk()
// export const deleteVacancy = createAsyncThunk()

const vacanciesSlice = createSlice({
  name: "vanacies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createVacancy.pending, (state) => {})
      .addCase(createVacancy.fulfilled, (state, action) => {
        state.vacancyList.push(action.payload)
      })
      .addCase(createVacancy.rejected, (state) => {})

      .addCase(getVacancies.pending, (state) => {})
      .addCase(getVacancies.fulfilled, (state, action) => {
        state.vacancyList = action.payload
      })
      .addCase(getVacancies.rejected, (state) => {})
  },
})

export default vacanciesSlice.reducer
