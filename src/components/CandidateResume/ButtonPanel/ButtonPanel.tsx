import { Button, Typography } from "@mui/material"
import styles from "../CandidateResume.module.scss"

const styleSx = {
  blue: {
    background: "rgba(90, 155, 255, 1)",
    borderRadius: "6px",
    width: "250px",
    height: "40px",
    ".MuiButtonBase-root-MuiButton-root:hover": {
      background: "rgba(25, 118, 210, 0.70)",
    },
  },
  text1: {
    textTransform: "none",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "20px",
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
  },
  white: {
    borderRadius: "6px",
    width: "250px",
    height: "40px",
  },
  text2: {
    textTransform: "none",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "20px",
    textAlign: "center",
    color: "rgba(29, 107, 243, 1)",
  },
}

export const ButtonPanel = () => {
  return (
    <div className={styles.ButtonPanel}>
      <Button sx={styleSx.blue}>
        <Typography variant="body1" sx={styleSx.text1}>
          Пригласить
        </Typography>
      </Button>

      <Button sx={styleSx.white} variant="outlined" size="medium">
        <Typography variant="body1" sx={styleSx.text2}>
          Написать
        </Typography>
      </Button>
    </div>
  )
}
