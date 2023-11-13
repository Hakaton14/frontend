import { useAppSelector } from "@ReduxHooks"
import { FC } from "react"
import { Avatar } from "@mui/material"
import { useChangeTitle } from "@Hooks"
import { AvatarResumeMoke } from "@IconResume"
import { ToolBar } from "./ToolBar/ToolBar"
import { ButtonPanel } from "./ButtonPanel/ButtonPanel"
import { Bio } from "./Bio/Bio"
import { BasicInfo } from "./BasicInfo/BasicInfo"

import styles from "./CandidateResume.module.scss"

const CandidateResume: FC = () => {
  useChangeTitle("Анкета Кандидата")
  const { studentProfile } = useAppSelector((state) => state.student)

  return (
    <section className={styles.Container}>
      <div className={styles.ToolBar}>
        <ToolBar />
      </div>

      <div className={styles.ContainerTop}>
        <Avatar
          alt={`Аватар кандидата ${studentProfile?.first_name} ${studentProfile?.last_name}`}
          src={studentProfile?.avatar || AvatarResumeMoke}
          sx={{ width: 120, height: 120 }}
        />
        <Bio />

        <ButtonPanel />
        <div className={styles.Bio}></div>
      </div>

      <div className={styles.ContainerBottom}>
        <div className={styles.Left}>
          <BasicInfo title="Обо мне" paragraph={studentProfile?.about_me} />
          <BasicInfo title="Навыки" chips={studentProfile?.skills} />
        </div>

        <div className={styles.Right}>
          <BasicInfo
            title="Опыт работы"
            paragraph={studentProfile?.about_exp}
          />
          <BasicInfo
            title="Образование"
            paragraph={studentProfile?.about_education}
          />
        </div>
      </div>
    </section>
  )
}

export default CandidateResume
