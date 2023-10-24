import axios from "axios"

//TODO Вынести в .env
const API_URL = "http://127.0.0.1:8000/api/v1"

//Регистрация пользователя
//TODO Дописать типы юзера
const signIn = async (userData: any) => {
  const response = await axios.post(`${API_URL}/users/`, userData)
  response.data && localStorage.setItem("user", JSON.stringify(response.data))
  return response.data
}
//Вход пользователя
const login = async (userData: any) => {
  const tokenData = await axios.post(`${API_URL}/auth/token/create/`, userData)
  const response = await axios.get(`${API_URL}/users/me/`, {
    headers: { Authorization: `Bearer ${tokenData.data.access}` },
  })
  response.data &&
    localStorage.setItem(
      "user",
      JSON.stringify({ ...response.data, ...tokenData.data }),
    )
  return response.data
}
//Выход пользователя
const logout = async () => {
  localStorage.removeItem("user")
}

const authService = {
  signIn,
  login,
  logout,
}

export default authService
