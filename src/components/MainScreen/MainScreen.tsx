import { FC } from "react"
import styles from "./MainScreen.module.scss"
import Header from "../Header/Header"

const MainScreen: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  )
}

export default MainScreen
