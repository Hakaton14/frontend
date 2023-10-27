import { FC } from "react"
import ErrorIcon from "../../icons/statusErr.svg"
import styles from "../Notificatio.module.scss"

interface ErrorProps {
  title?: string
  description?: string
}

export const Error: FC<ErrorProps> = ({
  title = "Произошла ошибка",
  description = "Подробности отсутствуют",
}) => {
  return (
    <div className={styles.MessageContainerError}>
      <img className={styles.Icon} src={ErrorIcon} alt="Иконка ошибки" />
      <div className={styles.MessageError}>
        <h1 className={styles.MessageTitle}>{title}</h1>
        <p className={styles.MessageDescription}>{description}</p>
      </div>
    </div>
  )
}
