import styles from "./СandidateСard.module.scss"
import FotoIcon from "../../ui-kit/icons/foto_icon.png"
import LikeIcon from "../../ui-kit/icons/like_icon.svg"
import HideIcon from "../../ui-kit/icons/hide_icon.svg"
import { Chip } from "@mui/material"

function СandidateСard() {
  return (
    <div className={styles.mainContainer}>
      {/* <div className={styles.innerContainer}> */}
      <img className={styles.fotoIcon} src={FotoIcon} alt="Иконка фотографии" />
      <div className={styles.infoWrapper}>
        <h2 className={styles.candidateName}>Смирнов Иван Иванович</h2>
        <h3 className={styles.candidateJob}>UX/UI дизайнер</h3>
        <h3 className={styles.candidateInfo}>28 лет, г. Москва</h3>
      </div>
      <div className={styles.skillsWrapper}>
        <div className={styles.skillsSecondWrapper}>
          <Chip
            label="UX-исследования"
            variant="outlined"
            sx={{
              marginRight: "6px",
              marginBottom: "6px",
              fontSize: "13px",
              lineHeight: "16px",
              fontWeight: "500",
              color: "#1A1B22",
            }}
          />
          <Chip
            label="Wireframimg"
            variant="outlined"
            sx={{ marginBottom: "6px" }}
          />
        </div>
        <div className={styles.skillsSecondWrapper}>
          <Chip label="Figma" variant="outlined" sx={{ marginRight: "6px" }} />
          <Chip label="Прототипирование" variant="outlined" />
        </div>
      </div>
      <div className={styles.iconsWrapper}>
        <img
          className={styles.likeIcon}
          src={LikeIcon}
          alt="Иконка добавить в избранное"
        />
        <img src={HideIcon} alt="Иконка скрыть" />
      </div>
      {/* </div> */}
    </div>
  )
}

export default СandidateСard
