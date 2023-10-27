import { FC, useState } from "react"
import { Snackbar, SnackbarProps } from "@mui/material"
import { Succes } from "./Succes/Succes"
import { Error } from "./Error/Error"
import styles from "./Notificatio.module.scss"

enum ETypeNotification {
  error,
  succes,
}

type TTypeNotification = keyof typeof ETypeNotification

export type NotificationProps = {
  typeNotification: TTypeNotification
}

const Notification = (props: SnackbarProps & NotificationProps) => {
  const { typeNotification, ...rest } = props

  return (
    <Snackbar {...rest}>
      <div className={styles.MessageContainer}>
        {typeNotification === "error" ? <Error /> : <Succes />}
      </div>
    </Snackbar>
  )
}

export default Notification
