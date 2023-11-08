import { LocalizationProvider } from "@mui/x-date-pickers"
import { ruRU } from "@mui/x-date-pickers/locales/"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import dayjs, { Dayjs } from "dayjs"
import "dayjs/locale/ru"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from "react"

const calendarHeaderPropsStyles = {
  sx: {
    ".MuiPickersCalendarHeader-root": {
      display: "flex",
      alignItems: "center",
      justifyItems: "center",
    },
    ".MuiPickersArrowSwitcher-root": {
      display: "inline-flex",
    },
    ".MuiPickersCalendarHeader-label": {
      textAlign: "center",
    },
    ".MuiPickersArrowSwitcher-spacer": {
      width: "220px",
    },
    ".MuiPickersFadeTransitionGroup-root": {
      display: "flex",
      position: "absolute",
      paddingLeft: "90px",
    },
    "& .MuiPickersCalendarHeader-switchViewButton": {
      display: "none",
    },
    ".MuiIconButton-edgeStart": {
      marginRight: "20px",
    },
  },
}

function Calendar() {
  const [value, setValue] = useState<Dayjs | null>(null)
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="ru"
      localeText={
        ruRU.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <DateCalendar
        slotProps={{ calendarHeader: calendarHeaderPropsStyles }}
        value={value}
        onChange={(newVal) => setValue(newVal)}
      />
    </LocalizationProvider>
  )
}

export default Calendar
