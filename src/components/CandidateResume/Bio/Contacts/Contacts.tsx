import { Typography } from "@mui/material"
import { Email, FaceBook, LikeFilled, Phone, Telegram, VK } from "@IconResume"
import styles from ".././../CandidateResume.module.scss"

const styleSx = {
  contacts: {
    fontfamily: "YS Text",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "24px",
    textAlign: "left",
  },
}

export const Contacts = () => {
  return (
    <div className={styles.Contacts}>
      <Typography variant="h2" sx={styleSx.contacts}>
        Контакты:
      </Typography>
    </div>
  )
}
