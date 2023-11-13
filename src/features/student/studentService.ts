import { API_URL } from "@Utils"
import axios from "axios"

const json = localStorage.getItem("user")
const user = json && JSON.parse(json)

const getCandidateResume = async (studentID: number | string) => {
  const response = await axios.get(`${API_URL}/students/${studentID}`, {
    headers: {
      Authorization: `Bearer ${user.access}`,
    },
  })

  return response.data
}

const studentService = {
  getCandidateResume,
}

export default studentService
