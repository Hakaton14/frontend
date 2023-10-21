import axios from "axios"

//TODO Вынести в .env
const API_URL = "/user"

//Регистрация пользователя
//TODO Дописать типы юзера
const register = async (userData: any) => {
  const response = await axios.post(API_URL, userData)
  response.data && localStorage.setItem("user", JSON.stringify(response.data))
  return response.data
}

const authService = {
  register,
}

export default authService
