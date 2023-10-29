import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { authReducer, vacancyReducer } from "@Features"
import { filtersReducer } from "@Features"
import { searchReducer } from "@Features"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filtersReducer,
    vacancies: vacancyReducer,
    search: searchReducer,
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
