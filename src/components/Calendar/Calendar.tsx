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
    ".MuiPickersCalendarHeader-root:first-child": {
      order: 0,
      paddingRight: "20px",
      paddingLeft: "20px",
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
    ".css-31ca4x-MuiPickersFadeTransitionGroup-root": {
      display: "flex",
      position: "absolute",
      paddingLeft: "80px",
    },
    ".css-9reuh9-MuiPickersArrowSwitcher-root": {
      marginLeft: "-2px",
    },
    ".MuiPickersArrowSwitcher-button": {
      paddingRight: "7px",
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
