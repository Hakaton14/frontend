import axios from "axios"
interface IVacancyData {
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
//TODO Вынести в .env
const API_URL = "http://127.0.0.1:8000/api/v1"
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

const vacancyService = {
  createVacancy,
}

export default vacancyService
