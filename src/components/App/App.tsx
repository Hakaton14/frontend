import { Routes, Route } from "react-router-dom"
import { Auth } from "@Components"
import Registration from "../Auth/Registration/Registration"
import MainScreen from "../MainScreen/MainScreen"

function App() {
  return (
    // <div className="App">
    //   <Auth />
    // </div>
    <Routes>
      <Route path="sign-in" element={<Auth />}></Route>
      <Route path="sign-up" element={<Registration />}></Route>
      <Route path="main" element={<MainScreen />}></Route>
    </Routes>
  )
}

export default App
