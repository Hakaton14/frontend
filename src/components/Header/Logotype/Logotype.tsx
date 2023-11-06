import { FC } from "react"
import Logo from "../../../ui-kit/icons/logotype.svg"

import styles from "../Header.module.scss"

type LogotypeProps = {
  src?: string
  alt?: string
  onClick?: () => void
}

export const Logotype: FC<LogotypeProps> = ({
  src = Logo,
  alt = "Логотип проекта",
  onClick,
}) => {
  return (
    <>
      <img className={styles.Logotype} src={src} alt={alt} onClick={onClick} />
    </>
  )
}
