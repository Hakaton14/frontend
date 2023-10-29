import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AxiosError } from "axios"
import { searchService } from "@Features"
interface IResult {
  id: number
  first_name: string
  last_name: string
  skills: ISkill[]
  city: number
}

interface ISkill {
  id: number
  skill: string
  category: string
}

interface IinitialState {
  results: IResult[] | null
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  message: string | unknown
}

const initialState: IinitialState = {
  results: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
}

export const getStudents = createAsyncThunk(
  "search/get",
  async (query: any, thunkAPI) => {
    try {
      return searchService.getStudents(query)
    } catch (error) {
      const err = error as AxiosError
      return thunkAPI.rejectWithValue(err.response?.data)
    }
  },
)

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.results = action.payload
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.results = null
      })
  },
})

export default searchSlice.reducer
