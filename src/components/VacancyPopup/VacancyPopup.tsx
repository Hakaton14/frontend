import { VacancyForm } from "@Components"

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Tabs,
  Tab,
} from "@mui/material"
import { useState, SyntheticEvent } from "react"

type VacancyPopupProps = {
  openPopup: boolean
}
function VacancyPopup({ openPopup }: VacancyPopupProps) {
  const [isOpen, setIsOpen] = useState(openPopup)
  const [value, setValue] = useState(0)
  //Изменение вкладки
  const switchTab = (evt: SyntheticEvent, newVal: number) => {
    setValue(newVal)
  }
  //Закрытие попапа
  const handleClose = () => {
    setIsOpen(false)
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    }
  }

  return (
    <Dialog open={isOpen} maxWidth="lg">
      <DialogTitle>
        <Typography variant="h5" component="p" fontWeight="500" pb={2}>
          Новая вакансия
        </Typography>

        <Tabs value={value} onChange={switchTab}>
          <Tab
            label="Общая информация"
            {...a11yProps(0)}
            sx={{ padding: 0, marginRight: 1 }}
          />
          <Tab
            label="Дополнительная информация"
            {...a11yProps(1)}
            sx={{ padding: 0, marginLeft: 1 }}
          />
        </Tabs>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        {/* //TODO Вставить норм иконку */}
        <>x</>
      </IconButton>
      <DialogContent sx={{ width: "900px" }}>
        <VacancyForm tab={value} />
      </DialogContent>
    </Dialog>
  )
}
export default VacancyPopup
