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

interface BasicInfoProps {
  title: string
  paragraph?: string | string[]
}
export const BasicInfo: FC<BasicInfoProps> = ({ title, paragraph }) => {
  return (
    <div className={styles.ContainerInfo}>
      <Typography variant="h3" sx={styleSx.header}>
        {title}
      </Typography>

      {Array.isArray(paragraph) ? (
        <div className={styles.ChipContainer}>
          {paragraph.map((chip, index) => {
            return (
              <Chip
                size="medium"
                sx={styleSx.chip}
                label={chip}
                key={index + 1}
              />
            )
          })}
        </div>
      ) : (
        <Typography variant="body1" sx={styleSx.paragraph}>
          {paragraph}
        </Typography>
      )}
    </div>
  )
}
