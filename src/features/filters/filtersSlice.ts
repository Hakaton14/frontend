import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AxiosError } from "axios"
import { filtersService } from "@Features"

interface TOpts {
  id: number
  name: string
  symbol?: symbol
}

interface IinitialState {
  cityOpt: TOpts[]
  skillsOpt: TOpts[]
  experienceOpt: TOpts[]
  empolymentsOpt: TOpts[]
  currencyOpt: TOpts[]
  schedulesOpt: TOpts[]
}

const initialState: IinitialState = {
  cityOpt: [],
  skillsOpt: [],
  empolymentsOpt: [],
  experienceOpt: [],
  currencyOpt: [],
  schedulesOpt: [],
}

export const getCity = createAsyncThunk("filters/city", async () => {
  return await filtersService.getCity()
})

export const getCurrency = createAsyncThunk("filters/currency", async () => {
  return await filtersService.getCurrency()
})

export const getSkills = createAsyncThunk("filters/skills", async () => {
  return await filtersService.getSkills()
})
export const getSchedules = createAsyncThunk("filters/schedules", async () => {
  return await filtersService.getSchedules()
})
export const getEmployments = createAsyncThunk(
  "filters/employments",
  async () => {
    return await filtersService.getEmployments()
  },
)
export const getExperiences = createAsyncThunk(
  "filters/experiences",
  async () => {
    return await filtersService.getExperiences()
  },
)

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

      .addCase(getSchedules.pending, (state) => {})
      .addCase(getSchedules.fulfilled, (state, action) => {
        state.schedulesOpt = action.payload
      })
      .addCase(getSchedules.rejected, (state) => {})

      .addCase(getEmployments.pending, (state) => {})
      .addCase(getEmployments.fulfilled, (state, action) => {
        state.empolymentsOpt = action.payload
      })
      .addCase(getEmployments.rejected, (state) => {})

      .addCase(getExperiences.pending, (state) => {})
      .addCase(getExperiences.fulfilled, (state, action) => {
        state.experienceOpt = action.payload
      })
      .addCase(getExperiences.rejected, (state) => {})

      .addCase(getSkills.pending, (state) => {})
      .addCase(getSkills.fulfilled, (state, action) => {
        state.skillsOpt = action.payload
      })
      .addCase(getSkills.rejected, (state) => {})

      .addCase(getCurrency.pending, (state) => {})
      .addCase(getCurrency.fulfilled, (state, action) => {
        state.currencyOpt = action.payload
      })
      .addCase(getCurrency.rejected, (state) => {})
  },
})

export default filtersSlice.reducer
