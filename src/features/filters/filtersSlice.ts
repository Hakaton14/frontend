import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AxiosError } from "axios"
import { filtersService } from "@Features"

interface IinitialState {
  cityOpt: { id: number; name: string }[]
  experienceOpt: object[]
  currencyOpt: object[]
  workloadOpt: object[]
  workhoursOpt: object[]
}

const initialState: IinitialState = {
  cityOpt: [],
  experienceOpt: [],
  currencyOpt: [],
  workloadOpt: [],
  workhoursOpt: [],
}

export const getCity = createAsyncThunk("filters/city", async () => {
  return await filtersService.getCity()
})

export const getCurrency = createAsyncThunk("filters/currency", async () => {
  return await filtersService.getCurrency()
})

// export const get = createAsyncThunk("filters/city", async (city: string) => {
//   return await filtersService.getCity(city)
// })

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCity.pending, (state) => {})
      .addCase(getCity.fulfilled, (state, action) => {
        state.cityOpt = action.payload
      })
      .addCase(getCity.rejected, (state) => {})
  },
})

export default filtersSlice.reducer
