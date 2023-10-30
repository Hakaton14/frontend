import { FC, useState } from "react"
import { Snackbar, SnackbarProps } from "@mui/material"
import { Succes } from "./Succes/Succes"
import { Error } from "./Error/Error"
import styles from "./Notificatio.module.scss"

enum ETypeNotification {
  error,
  succes,
}

type TMessage = {
  title?: string
  description?: string
}
type TTypeNotification = keyof typeof ETypeNotification

export type NotificationProps = {
  message: TMessage
  typeNotification: TTypeNotification
}

const Notification = (props: SnackbarProps & NotificationProps) => {
  const { typeNotification, message, ...rest } = props

  return (
    <Snackbar {...rest}>
      <div className={styles.MessageContainer}>
        {typeNotification === "error" ? (
          <Error title={message.title} description={message.description} />
        ) : (
          <Succes title={message.title} description={message.description} />
        )}
      </div>
    </Snackbar>
  )
}

export default Notification
