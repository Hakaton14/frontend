import { AppointmentCard, Calendar, CurrentDate } from "@Components"
import { Box, Typography } from "@mui/material"
import styles from "./Planner.module.css"
function Planner() {
  return (
    <div className={styles.container}>
      <div className={styles.calendarContainer}>
        <CurrentDate />
        <Calendar />
      </div>
      <div className={styles.appointmentContainer}>
        <Typography variant="h6" fontWeight="500">
          На сегодня запланировано:
        </Typography>
        <AppointmentCard time="11.32" name="dfjghdfkjgh" />
        <AppointmentCard time="13.32" name="SDFFSDf sdfkf" />
      </div>
    </div>
  )
}
export default Planner
