import { FC } from "react"
import SuccesIcon from "../../icons/statusSucces.svg"
import styles from "../Notificatio.module.scss"

interface SuccesProps {
  title?: string
  description?: string
}

export const Succes: FC<SuccesProps> = ({
  title = "Успешно",
  description = "Подробности отсутствуют",
}) => {
  return (
    <div className={styles.MessageContainerSucces}>
      <img className={styles.Icon} src={SuccesIcon} alt="Иконка успешности" />
      <div className={styles.MessageSucces}>
        <h1 className={styles.MessageTitle}>{title}</h1>
        <p className={styles.MessageDescription}>{description}</p>
      </div>
    </div>
  )
}
