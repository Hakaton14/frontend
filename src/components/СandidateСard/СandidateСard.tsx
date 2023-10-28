import styles from "./СandidateСard.module.scss"
import FotoIcon from "../../ui-kit/icons/foto_icon.png"
import LikeIcon from "../../ui-kit/icons/like_icon.svg"
import HideIcon from "../../ui-kit/icons/hide_icon.svg"

function СandidateСard() {
  return (
    <div className={styles.mainContainer}>
      <img src={FotoIcon} alt="Иконка фотографии" />
      <div className={styles.infoWrapper}>
        <h2 className={styles.candidateName}>Смирнов Иван Иванович</h2>
        <h3 className={styles.candidateJob}>UX/UI дизайнер</h3>
        <h3 className={styles.candidateInfo}>28 лет, г. Москва</h3>
      </div>
      <div className={styles.skillsWrapper}></div>
      <div className={styles.iconsWrapper}>
        <img src={LikeIcon} alt="Иконка добавить в избранное" />
        <img src={HideIcon} alt="Иконка скрыть" />
      </div>
    </div>
  )
}

export default СandidateСard
