import { Card, CardContent, Box, Typography } from "@mui/material"
type AppointmentCardProps = {
  time: string
  name: string
  inActive?: boolean
}

function AppointmentCard({ time, name, inActive }: AppointmentCardProps) {
  return (
    <Box
      sx={{ maxWidth: "256px" }}
      boxShadow={"0px 8px 8px 0px rgba(34, 60, 80, 0.2)"}
    >
      <Card sx={{ boxShadow: "none" }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            "&.MuiCardContent-root:last-child": {
              padding: "16px",
            },
          }}
        >
          <Typography variant="body1">{time}</Typography>
          <Typography variant="body1">{name}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
export default AppointmentCard
