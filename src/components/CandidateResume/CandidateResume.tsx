import { Avatar, Button } from "@mui/material"
import { useChangeTitle } from "@Hooks"
import { AvatarResumeMoke, CloseMini } from "@IconResume"
import { ToolBar } from "./ToolBar/ToolBar"
import { ButtonPanel } from "./ButtonPanel/ButtonPanel"
import { Bio } from "./Bio/Bio"
import { BasicInfo } from "./BasicInfo/BasicInfo"
import { Resume } from "./MokeData"
import styles from "./CandidateResume.module.scss"
import { FC } from "react"
const styleSx = {
  btn: {
    position: "absolute",
    top: "16px",
    right: "16px",
    minWidth: 24,
    width: 24,
    height: 24,
    padding: 0,
    display: "block",
  },
}

interface CandidateResumeProps {
  onClose: () => void
}

const CandidateResume: FC<CandidateResumeProps> = ({ onClose }) => {
  useChangeTitle("Анкета Кандидата")

  const onClickClouse = () => {
    onClose()
  }

  return (
    <section className={styles.Container}>
      <Button sx={styleSx.btn} onClick={onClickClouse}>
        <img src={CloseMini} alt="иконка закрытия" />
      </Button>

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
        <div className={styles.Left}>
          <BasicInfo title="Обо мне" paragraph={Resume.about} />
          <BasicInfo title="Навыки" paragraph={Resume.skills} />
        </div>

        <div className={styles.Right}>
          <BasicInfo title="Опыт работы" paragraph={Resume.expertise} />
          <BasicInfo title="Образование" paragraph={Resume.education} />
        </div>
      </div>
    </section>
  )
}

export default CandidateResume
