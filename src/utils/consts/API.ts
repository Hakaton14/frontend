const MODE = import.meta.env.MODE
const args = "api"
const version = "v1"
export const API_URL =
  MODE === "development"
    ? `http://localhost:8000/${args}/${version}`
    : `https://hr-praktikum.webtm.ru/${args}/${version}`
