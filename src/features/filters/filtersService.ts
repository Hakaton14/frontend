import axios from "axios"
import { API_URL } from "@Utils"

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

const getSkills = async () => {
  const json = localStorage.getItem("user")
  const user = json && JSON.parse(json)
  const response = await axios.get(`${API_URL}/skills/`, {
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
const getExperiences = async () => {
  const json = localStorage.getItem("user")
  const user = json && JSON.parse(json)

  const response = await axios.get(`${API_URL}/experiences/`, {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=windows-1251",
      Authorization: `Bearer ${user.access}`,
    },
  })
  return response.data
}
const getSchedules = async () => {
  const json = localStorage.getItem("user")
  const user = json && JSON.parse(json)

  const response = await axios.get(`${API_URL}/schedules/`, {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=windows-1251",
      Authorization: `Bearer ${user.access}`,
    },
  })
  return response.data
}
const getEmployments = async () => {
  const json = localStorage.getItem("user")
  const user = json && JSON.parse(json)

  const response = await axios.get(`${API_URL}/employments/`, {
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
  getSkills,
  getEmployments,
  getExperiences,
  getSchedules,
}

export default filtersService
