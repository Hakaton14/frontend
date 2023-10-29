import { Button, Typography } from "@mui/material"
import Header from "../Header/Header"
import Filters from "../Filters/Filters"
import styles from "./Serach.module.scss"
import ArrowIcon from "../../ui-kit/icons/Long arrow.svg"
import Filtercon from "../../ui-kit/icons/filter_icon.svg"
import СandidateСard from "../СandidateСard/СandidateСard"
import { useAppDispatch, useAppSelector } from "@ReduxHooks"
import { getStudents } from "@Features"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Search() {
  const dispatch = useAppDispatch()
  const { results, isLoading } = useAppSelector((state) => state.search)
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getStudents(""))
  }, [])

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <Button
          sx={{
            padding: "0",
            color: "#1A1B22",
            alignItems: "start",
            position: "absolute",
            left: "-83px",
            top: "0",
          }}
          onClick={()=> navigate("/")}
        >
          <img src={ArrowIcon} alt="Иконка стрелки назад" />
        </Button>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Результаты поиска</h1>
          <h2 className={styles.subtitle}>
            Кандидатов найдено:{" "}
            <Typography
              variant="h6"
              component="span"
              fontWeight={500}
              color="text.primary"
            >
              {results?.length}
            </Typography>
          </h2>
        </div>

        {/* <div className={styles.filterWrapper}>
          <Button
            sx={{
              padding: "0",
              color: "#1A1B22",
              alignItems: "start",
            }}
          >
            <img src={Filtercon} alt="Иконка фильтрации" />
          </Button>
          <h3 className={styles.filterTitle}>По дате публикации</h3>
        </div> */}
        {results?.map((student) => (
          <СandidateСard student={student} key={student.id} />
        ))}
      </div>
    </>
  )
}

export default Search
