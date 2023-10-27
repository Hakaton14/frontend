import axios from "axios"

//TODO Вынести в .env
const API_URL = "http://127.0.0.1:8000/api/v1"

const getCity = async () => {
  const json = localStorage.getItem("user")
  const user = json && JSON.parse(json)
  const response = await axios.get(`${API_URL}/cities/`, {
    headers: {
      Authorization: `Bearer ${user.access}`,
    },
  })
  return response.data
}

const getCurrency = async () => {
  const json = localStorage.getItem("user")
  const user = json && JSON.parse(json)

  const response = await axios.get(`${API_URL}/currencies/`, {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=windows-1251",
      Authorization: `Bearer ${user.access}`,
    },
  })
  return response.data
}

const filtersService = {
  getCity,
  getCurrency,
}

export default filtersService
