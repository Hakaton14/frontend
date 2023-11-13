import { Chip, Typography } from "@mui/material"
import styles from "../CandidateResume.module.scss"
import { FC } from "react"

const styleSx = {
  header: {
    fontFamily: "YS Display",
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "24px",
    textAlign: "left",
    margin: "0 0 16px 0",
  },
  paragraph: {
    fontFamily: "YS Display",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
    textAlign: "left",
  },
  chip: {
    padding: "6px 16px 6px 8px",
    borderRadius: "8px",
  },
}

type TSkills = {
  id: number
  skill: string
  category: string
}

interface BasicInfoProps {
  title: string
  paragraph?: string
  chips?: TSkills[]
}

export const BasicInfo: FC<BasicInfoProps> = ({ title, paragraph, chips }) => {
  return (
    <div className={styles.ContainerInfo}>
      <Typography variant="h3" sx={styleSx.header}>
        {title}
      </Typography>

      {
        <div className={styles.ChipContainer}>
          {chips?.map((chip) => {
            return (
              <Chip
                size="medium"
                sx={styleSx.chip}
                label={chip.skill}
                key={chip.id}
              />
            )
          })}
        </div>
      }

      {paragraph && (
        <Typography variant="body1" sx={styleSx.paragraph}>
          {paragraph}
        </Typography>
      )}
    </div>
  )
}
