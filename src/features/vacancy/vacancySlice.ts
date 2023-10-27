import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AxiosError } from "axios"
import { vacancyService } from "@Features"

interface IinitialState {
  vacancyList: object[] | []
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

export const createVacancy = createAsyncThunk(
  "vacancy/create",
  async (vacancyData: any, thunkAPI) => {
    try {
      return vacancyService.createVacancy(vacancyData)
    } catch (error) {}
  },
)
export const updateVacancy = createAsyncThunk()
export const deleteVacancy = createAsyncThunk()

const vacanciesSlice = createSlice({
  name: "vanacies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createVacancy.pending, (state) => {})
      .addCase(createVacancy.fulfilled, (state, action) => {
        state.vacancyList.concat(action.payload)
      })
      .addCase(createVacancy.rejected, (state) => {})
  },
})
