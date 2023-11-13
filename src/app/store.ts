import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import {
  authReducer,
  vacancyReducer,
  filtersReducer,
  searchReducer,
  studentReducer,
} from "@Features"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filtersReducer,
    vacancies: vacancyReducer,
    search: searchReducer,
    student: studentReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
