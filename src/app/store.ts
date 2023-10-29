import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { authReducer, vacancyReducer } from "@Features"
import { filtersReducer } from "@Features"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filtersReducer,
    vacancies: vacancyReducer,
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
