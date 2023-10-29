import axios from "axios"
const API_URL = "http://127.0.0.1:8000/api/v1"
const json = localStorage.getItem("user")
const user = json && JSON.parse(json)

const getStudents = async (query: any) => {
  const response = await axios.get(`${API_URL}/students/`, {
    params: query,
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
