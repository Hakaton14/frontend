import axios from "axios"
import { API_URL } from "@Utils"
interface IUserData {
  email: string
  password: string
}

//Регистрация пользователя
//TODO Дописать типы юзера
const signUp = async (userData: any) => {
  return await axios.post(`${API_URL}/users/`, userData)
}
//Вход пользователя
const login = async ({ email, password }: IUserData) => {
  const tokenData = await axios.post(`${API_URL}/auth/token/create/`, {
    email,
    password,
  })
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
  signUp,
  login,
  logout,
}

export default authService
