import { Avatar } from "@mui/material"
import { AvatarResumeMoke } from "@IconResume"
import { ToolBar } from "./ToolBar/ToolBar"
import { ButtonPanel } from "./ButtonPanel/ButtonPanel"
import styles from "./CandidateResume.module.scss"
import { Bio } from "./Bio/Bio"

const CandidateResume = () => {
  return (
    <section className={styles.Container}>
      <div className={styles.ToolBar}>
        <ToolBar />
      </div>
      <div className={styles.ContainerTop}>
        <Avatar
          alt="Remy Sharp"
          src={AvatarResumeMoke}
          sx={{ width: 120, height: 120 }}
        />
        <Bio />
        <ButtonPanel />
        <div className={styles.Bio}></div>
      </div>
      <div className={styles.ContainerBottom}>
        
      </div>
    </section>
  )
}

export default CandidateResume
