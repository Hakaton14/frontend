import { FC } from "react"
import { IconButton } from "@mui/material"
import { logout } from "@Features"
import { useAppDispatch } from "@ReduxHooks"
import GroupIcon from "../../../ui-kit/icons/letter.svg"
import NotificationIcon from "../../../ui-kit/icons/bell.svg"
import ExitIcon from "../../../ui-kit/icons/exit.svg"
import UserIcon from "../../../ui-kit/icons/user.svg"

import styles from "../Header.module.scss"
import { reset } from "features/auth/authSlice"

export const ToolPanel: FC = () => {
  const dispatch = useAppDispatch()

  const handlerLogout = () => {
    dispatch(logout())
    dispatch(reset())
    console.log("logout")
  }

  return (
    <div className={styles.ToolPanel}>
      <IconButton disabled>
        <img
          className={styles.IconBtn}
          src={UserIcon}
          alt="Иконка пользователя"
        />
      </IconButton>

      <IconButton disabled>
        <img className={styles.IconBtn} src={GroupIcon} alt="Иконка писем" />
      </IconButton>

      <IconButton disabled>
        <img
          className={styles.IconBtn}
          src={NotificationIcon}
          alt="Иконка уведомлений"
        />
      </IconButton>

      <IconButton onClick={handlerLogout}>
        <img className={styles.IconBtn} src={ExitIcon} alt="Иконка выхода" />
      </IconButton>
    </div>
  )
}
