import { FC } from "react"
import styles from "./MainScreen.module.scss"
import Header from "../Header/Header"
import { VacancyPopup } from "@Components"

const MainScreen: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <VacancyPopup openPopup={true}/>
    </div>
  )
}

export default MainScreen
