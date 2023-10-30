import { API_URL } from "@Utils"
import axios from "axios"
interface IVacancyData {
  id: number
  hr: number
  name: string
  skills: string
  experience: string
  radioOfficeAddress: string
  address: string
  city: string
  salary_from: number
  salary_to: number
  currency: string
  responsibilities: string
  requirement: string
  conditions: string
  lang: string
  langGrade: string
  workload: string
  workHours: string
}

const json = localStorage.getItem("user")
const user = json && JSON.parse(json)

const createVacancy = async (vacancyData: IVacancyData) => {
  const response = await axios.post(`${API_URL}/vacancies/`, vacancyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.access}`,
    },
  })

  return response.data
}

const updateVacancy = async (vacancyData: IVacancyData) => {
  const response = await axios.patch(
    `${API_URL}/vacancies/${vacancyData.id}`,
    vacancyData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.access}`,
      },
    },
  )

  return response.data
}

const getVacancies = async () => {
  const response = await axios.get(`${API_URL}/vacancies/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.access}`,
    },
  })

  return response.data
}

const vacancyService = {
  createVacancy,
  getVacancies,
}

export default vacancyService
