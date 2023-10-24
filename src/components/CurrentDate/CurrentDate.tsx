import { Typography } from "@mui/material"
import { Box } from "@mui/system"

function CurrentDate() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h4">12 октября 2023</Typography>
      <Typography variant="h4">11 : 15</Typography>
    </Box>
  )
}
export default CurrentDate
