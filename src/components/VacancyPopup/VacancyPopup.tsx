import { VacancyForm } from "@Components"

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material"
function VacancyPopup({ openPopup }) {
  return (
    <Dialog open={true} maxWidth="lg">
      <DialogTitle>
        <Typography variant="h6" component="p" fontWeight="500">
          Новая вакансия
        </Typography>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => console.log("first")}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <>x</>
      </IconButton>
      <DialogContent>
        <VacancyForm />
      </DialogContent>
    </Dialog>
  )
}
export default VacancyPopup
