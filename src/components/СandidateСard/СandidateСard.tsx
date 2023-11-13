import { FC, useState } from "react"
import { Chip } from "@mui/material"
import { useAppDispatch } from "@ReduxHooks"
import { closeStudent, getStudentProfile } from "@Features"
import PopupResume from "./PopupResume/PopupResume"
import FotoIcon from "../../ui-kit/icons/foto_icon.png"

import styles from "./СandidateСard.module.scss"

interface СandidateСardProps {
  student: IStudent
}

interface IStudent {
  id: number
  first_name: string
  last_name: string
  skills: ISkill[]
  city: { id: number; name: string }
}

interface ISkill {
  id: number
  skill: string
  category: string
}

const СandidateСard: FC<СandidateСardProps> = ({ student }) => {
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const handelOpenPopup = () => {
    if (open === true) {
      setOpen(false)
      dispatch(closeStudent())
    } else {
      setOpen(true)
    }
  }

  const onCliickCard = () => {
    handelOpenPopup()
    dispatch(getStudentProfile(student.id))
  }

  return (
    <div className={styles.mainContainer} onClick={onCliickCard}>
      <PopupResume isOpen={open} onCloused={handelOpenPopup} />
      <img className={styles.fotoIcon} src={FotoIcon} alt="Иконка фотографии" />

      <div className={styles.infoWrapper}>
        <h2
          className={styles.candidateName}
        >{`${student.last_name} ${student.first_name}`}</h2>

        <h3 className={styles.candidateJob}>UX/UI дизайнер</h3>

        <h3 className={styles.candidateInfo}>{student.city.name}</h3>
      </div>

      <div className={styles.skillsWrapper}>
        <div className={styles.skillsSecondWrapper}>
          {student.skills.map((skill) => (
            <Chip
              key={skill.id}
              label={skill.skill}
              variant="filled"
              sx={{
                marginRight: "6px",
                marginBottom: "6px",
                fontSize: "13px",
                lineHeight: "16px",
                fontWeight: "500",
                bgcolor: "#ACCCFF",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default СandidateСard
