import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import dayjs from "dayjs"
import "dayjs/locale/ru"
function CurrentDate() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h4">
        {dayjs(Date()).locale("ru").format("D MMMM YYYY")}
      </Typography>
      <Typography variant="h4">
        {dayjs().locale("ru").format("HH:MM:ss")}
      </Typography>
    </Box>
  )
}
export default CurrentDate
