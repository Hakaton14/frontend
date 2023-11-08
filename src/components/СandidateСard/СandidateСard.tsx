import styles from "./СandidateСard.module.scss"
import FotoIcon from "../../ui-kit/icons/foto_icon.png"
import LikeIcon from "../../ui-kit/icons/like_icon.svg"
import HideIcon from "../../ui-kit/icons/hide_icon.svg"
import { Chip } from "@mui/material"

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

function СandidateСard({ student }: СandidateСardProps) {
  return (
    <div className={styles.mainContainer}>
      {/* <div className={styles.innerContainer}> */}
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
      {/* <div className={styles.iconsWrapper}>
        <img
          className={styles.likeIcon}
          src={LikeIcon}
          alt="Иконка добавить в избранное"
        />
        <img src={HideIcon} alt="Иконка скрыть" />
      </div>
      </div> */}
    </div>
  )
}

export default СandidateСard
