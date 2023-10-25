import { Routes, Route } from "react-router-dom"
import { Calendar } from "@Components"
import { Auth } from "@Components"
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import MainScreen from "../MainScreen/MainScreen"

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route
          path="/"
          element={<ProtectedRoute element={MainScreen} />}
        ></Route> */}
        <Route path="/" element={<MainScreen />}></Route>
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
