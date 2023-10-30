import { Typography, List, ListItem } from "@mui/material"
import { Resume } from "../MokeData"
import styles from "../CandidateResume.module.scss"
import { Contacts } from "./Contacts/Contacts"

const styleSx = {
  fullName: {
    fontFamily: "YS Display",
    fontSize: "24px",
    fontWeight: 500,
    lineHeight: "32px",
    textAlign: "left",
    color: "#1A1B22",
  },
  info: {
    fontFamily: "YS Display",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "24px",
    textAlign: "left",
    color: "#1A1B22",
  },
  list: {},
  lisItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "0",
  },
  body1: {
    fontFamily: "YS Text",
    fontSize: "16px",
    fontWeight: 500,
    fontHeight: "20px",
    textAlign: "left",
    color: "#797981",
  },
  body2: {
    fontFamily: "YS Text",
    fontSize: "16px",
    fontWeight: 500,
    fontHeight: "20px",
    textAlign: "left",
    color: "#1A1B22",
  },
}

export const Bio = () => {
  return (
    <div className={styles.BioShort}>
      <Typography variant="h2" sx={styleSx.fullName}>
        {Resume.fullName}
      </Typography>
      <Typography variant="h3" sx={styleSx.info}>
        {`${Resume.occupation}, ${Resume.age}, ${Resume.location}`}
      </Typography>
      <List sx={styleSx.list}>
        <ListItem sx={styleSx.lisItem} alignItems="flex-start">
          <Typography variant="body1" sx={styleSx.body1}>
            Стаж работы:
          </Typography>
          <Typography variant="body2" sx={styleSx.body2}>
            {Resume.experience}
          </Typography>
        </ListItem>
        <ListItem sx={styleSx.lisItem} alignItems="flex-start">
          <Typography variant="body1" sx={styleSx.body1}>
            Желаемый график работы:
          </Typography>
          <Typography variant="body2" sx={styleSx.body2}>
            {Resume.desiredSchedule}
          </Typography>
        </ListItem>
        <ListItem sx={styleSx.lisItem} alignItems="flex-start">
          <Typography variant="body1" sx={styleSx.body1}>
            Желаемый тип занятости:
          </Typography>
          <Typography variant="body2" sx={styleSx.body2}>
            {Resume.desiredEmploymentType}
          </Typography>
        </ListItem>
        <ListItem sx={styleSx.lisItem} alignItems="flex-start">
          <Typography variant="body1" sx={styleSx.body1}>
            Готовность к переезду:
          </Typography>
          <Typography variant="body2" sx={styleSx.body2}>
            {Resume.willingnessToRelocate}
          </Typography>
        </ListItem>
      </List>
      <Contacts />
    </div>
  )
}
