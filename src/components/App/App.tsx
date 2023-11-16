import { Routes, Route } from "react-router-dom"
import { Auth, Vacancy } from "@Components"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import Search from "../Search/Search"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@ReduxHooks"
import {
  getCity,
  getCurrency,
  getEmployments,
  getExperiences,
  getSchedules,
  getSkills,
  getVacancies,
} from "@Features"
import { MainLayout } from "@Layout"

function App() {
  const dispatch = useAppDispatch()
  useAppSelector((state) => state.auth)
  useEffect(() => {
    dispatch(getCurrency())
    dispatch(getCity())
    dispatch(getSkills())
    dispatch(getSchedules())
    dispatch(getEmployments())
    dispatch(getExperiences())
    dispatch(getVacancies())
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProtectedRoute element={Vacancy} />} />

        <Route path="/search" element={<ProtectedRoute element={Search} />} />

        <Route path="sign-in" element={<Auth podComponent="login" />} />

        <Route path="sign-up" element={<Auth podComponent="registration" />} />

        <Route path="/test" element={<MainLayout />} />
      </Routes>
    </div>
  )
}

export default App
