import axios from "axios"
interface IUserData {
  email: string
  password: string
}
//TODO Вынести в .env
const API_URL = "http://127.0.0.1:8000/api/v1"

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
