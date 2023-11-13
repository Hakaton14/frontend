import { Typography, List, ListItem } from "@mui/material"
import { Resume } from "../MokeData"
import { Contacts } from "./Contacts/Contacts"
import { useAppSelector } from "@ReduxHooks"

import styles from "../CandidateResume.module.scss"

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
  const { studentProfile } = useAppSelector((state) => state.student)

  return (
    <div className={styles.BioShort}>
      <Typography variant="h2" sx={styleSx.fullName}>
        {`${studentProfile?.first_name} ${studentProfile?.last_name}`}
      </Typography>

      <Typography variant="h3" sx={styleSx.info}>
        {`${studentProfile?.specialization}, г.${studentProfile?.city.name}`}
      </Typography>

      <List sx={styleSx.list}>
        <ListItem sx={styleSx.lisItem} alignItems="flex-start">
          <Typography variant="body1" sx={styleSx.body1}>
            Желаемый тип занятости:
          </Typography>

          <Typography variant="body2" sx={styleSx.body2}>
            {studentProfile?.employment.map((el) => {
              return el.name
            })}
          </Typography>
        </ListItem>

        <ListItem sx={styleSx.lisItem} alignItems="flex-start">
          <Typography variant="body1" sx={styleSx.body1}>
            Готовность к переезду:
          </Typography>

          <Typography variant="body2" sx={styleSx.body2}>
            {studentProfile ? `Да` : `Нет`}
          </Typography>
        </ListItem>
      </List>

      <Contacts />
    </div>
  )
}
