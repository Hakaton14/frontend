import { FC, useState } from "react"
import { useAppSelector } from "@ReduxHooks"
import { CandidateTable } from "@Components"
import { Button } from "@mui/material"
import { VacancyPopup } from "@Components"
import AddIcon from "../../ui-kit/icons/add.svg"

import styles from "./Vacancy.module.scss"

const styleSx = {
  btnTable: {
    padding: 0,
    paddingRight: "60px",
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: "500",
    color: "#1A1B22",
    textTransform: "none",
  },
  btnWraper: {
    padding: 0,
    paddingRight: "40px",
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: "500",
    color: "black",
    textTransform: "none",
  },
}

const Vacancy: FC = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const user = useAppSelector((state) => state.auth.user)
  const vacancies = useAppSelector((state) => state.vacancies.vacancyList)

  const handleClick = () => {
    setOpenPopup(!openPopup)
  }

  return (
    <>
      <VacancyPopup isOpen={openPopup} togglePopup={handleClick} />

      <div className={styles.container}>
        <h1 className={styles.title}>Добрый день, {user?.first_name}</h1>

        <div className={styles.buttonWrapper}>
          <Button sx={styleSx.btnWraper}>Мои вакансии</Button>

          <Button
            onClick={handleClick}
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
          <Button sx={styleSx.btnTable}>Активные ({vacancies.length})</Button>

          <Button sx={styleSx.btnTable}>Архив (0)</Button>

          <Button sx={styleSx.btnTable}>Шаблоны (0)</Button>
        </div>

        <CandidateTable />
      </div>
    </>
  )
}

export default Vacancy
