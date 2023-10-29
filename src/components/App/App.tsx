import { Routes, Route } from "react-router-dom"
import { Auth } from "@Components"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import MainScreen from "../MainScreen/MainScreen"
import Search from "../Search/Search"
import { useEffect } from "react"
import { useAppDispatch } from "@ReduxHooks"
import {
  getCity,
  getCurrency,
  getEmployments,
  getExperiences,
  getSchedules,
  getSkills,
  getVacancies,
} from "@Features"
function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCurrency())
    dispatch(getCity())
    dispatch(getSkills())
    dispatch(getSchedules())
    dispatch(getEmployments())
    dispatch(getExperiences())
    dispatch(getVacancies())
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute element={MainScreen} />}
        ></Route>
        <Route
          path="/search"
          element={<ProtectedRoute element={Search} />}
        ></Route>
        <Route path="sign-in" element={<Auth podComponent="login" />}></Route>
        <Route
          path="sign-up"
          element={<Auth podComponent="registration" />}
        ></Route>
      </Routes>
    </div>
  )
}

export default App
