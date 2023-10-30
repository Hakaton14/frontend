import axios from "axios"
import { API_URL } from "@Utils"
const json = localStorage.getItem("user")
const user = json && JSON.parse(json)

const getStudents = async (query: any) => {
  const response = await axios.get(`${API_URL}/students/`, {
    params: query,
    paramsSerializer: {
      indexes: null,
    },
    headers: {
      Authorization: `Bearer ${user.access}`,
    },
  })

  return response.data
}

const searchService = {
  getStudents,
}

export default searchService
