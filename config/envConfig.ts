import dotenv from "dotenv"
import path from "path"
import fs from "fs"

const loadEnv = () => {
  const envPath = path.resolve(__dirname, "../../backend/.env")
  const envVariables = dotenv.parse(fs.readFileSync(envPath))

  return Object.keys(envVariables).reduce((prev, next) => {
    prev[next] = JSON.stringify(envVariables[next])

    return prev
  }, {})
}

export { loadEnv }
