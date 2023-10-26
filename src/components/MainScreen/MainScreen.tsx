import { FC } from "react"
import styles from "./MainScreen.module.scss"
import Header from "../Header/Header"
import Calendar from "../Calendar/Calendar"
import CandidateTable from "../CandidateTable/CandidateTable"
import { Button } from "@mui/material"
import AddIcon from "../../ui-kit/icons/add.svg"

const MainScreen: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Добрый день, Александра</h1>
        <div className={styles.buttonWrapper}>
          <Button
            sx={{
              padding: "0",
              paddingRight: "40px",
              fontSize: "24px",
              lineHeight: "32px",
              fontWeight: "500",
              color: "black",
              textTransform: "none",
            }}
          >
            Мои вакансии
          </Button>
          <Button
            sx={{
              padding: "0",
              fontSize: "20px",
              lineHeight: "24px",
              fontWeight: "500",
              color: "#1D6BF3",
              textTransform: "none",
            }}
          >
            <img
              className={styles.addIcon}
              src={AddIcon}
              alt="Иконка плюса"
            ></img>
            Создать вакансию
          </Button>
        </div>

        <div className={styles.tableButtonWrapper}>
          <Button
            sx={{
              padding: "0",
              paddingRight: "60px",
              fontSize: "20px",
              lineHeight: "24px",
              fontWeight: "500",
              color: "#1A1B22",
              textTransform: "none",
            }}
          >
            Активные (3)
          </Button>
          <Button
            sx={{
              padding: "0",
              paddingRight: "60px",
              fontSize: "20px",
              lineHeight: "24px",
              fontWeight: "500",
              color: "#797981",
              textTransform: "none",
            }}
          >
            Архив (0)
          </Button>
          <Button
            sx={{
              padding: "0",
              fontSize: "20px",
              lineHeight: "24px",
              fontWeight: "500",
              color: "#797981",
              textTransform: "none",
            }}
          >
            Шаблоны (0)
          </Button>
        </div>
        <CandidateTable />
      </div>
    </>
  )
}

export default MainScreen
