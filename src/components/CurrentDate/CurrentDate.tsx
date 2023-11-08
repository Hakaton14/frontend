import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import dayjs from "dayjs"
import "dayjs/locale/ru"
import { useEffect, useState } from "react"

function CurrentDate() {
  const [value, setValue] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h4">
        {dayjs(Date()).locale("ru").format("D MMMM YYYY")}
      </Typography>
      <Typography variant="h4">
        {dayjs(value).locale("ru").format("HH:mm")}
      </Typography>
    </Box>
  )
}
export default CurrentDate
