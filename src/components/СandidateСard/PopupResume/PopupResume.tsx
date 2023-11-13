import { FC } from "react"
import { Button, Dialog, DialogContent } from "@mui/material"
import { CandidateResume } from "@Components"
import { CloseMini } from "@IconResume"

interface PopupResumeProps {
  isOpen: boolean
  onCloused: () => void
}

const styleSx = {
  modalBlock: {
    "& .MuiDialog-paper": {
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      "&::-webkit-scrollbar": {
        display: "none",
        "&::-webkit-scrollbar-thumb": {
          display: "none",
        },
      },
    },
  },
  btn: {
    position: "absolute",
    top: "16px",
    right: "16px",
    minWidth: 24,
    width: 24,
    height: 24,
    padding: 0,
    display: "block",
  },
}

export const PopupResume: FC<PopupResumeProps> = ({ isOpen, onCloused }) => {
  return (
    <Dialog
      open={isOpen}
      maxWidth="lg"
      sx={styleSx.modalBlock}
      onClose={() => onCloused}
    >
      <Button onClick={onCloused} sx={styleSx.btn}>
        <img src={CloseMini} alt="иконка закрытия" />
      </Button>

      <DialogContent>
        <CandidateResume />
      </DialogContent>
    </Dialog>
  )
}

export default PopupResume
