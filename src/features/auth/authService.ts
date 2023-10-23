import axios from "axios"

//TODO Вынести в .env
const API_URL = "http://127.0.0.1:8000/api"

//Регистрация пользователя
//TODO Дописать типы юзера
const register = async (userData: any) => {
  const response = await axios.post(`${API_URL}/users/`, userData)
  response.data && localStorage.setItem("user", JSON.stringify(response.data))
  return response.data
}
//Вход пользователя
const login = async (userData: any) => {
  const response = await axios.post(API_URL, userData)
  response.data && localStorage.setItem("user", JSON.stringify(response.data))
  return response.data
}
//Выход пользователя
const logout = async () => {
  localStorage.removeItem("user")
}

const authService = {
  register,
  login,
  logout,
}

export default authService
