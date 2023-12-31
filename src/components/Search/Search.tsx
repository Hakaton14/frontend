import { Button, Typography, Stack, Grid } from "@mui/material"
import Header from "../Header/Header"
import styles from "./Serach.module.scss"
import ArrowIcon from "../../ui-kit/icons/Long arrow.svg"
import СandidateСard from "../СandidateСard/СandidateСard"
import { useAppDispatch, useAppSelector } from "@ReduxHooks"
import { getStudents } from "@Features"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Filters } from "@Components"

function Search() {
  const dispatch = useAppDispatch()
  const { results } = useAppSelector((state) => state.search)

  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getStudents(""))
  }, [])

  return (
    <>
      <Header />
      <Grid container spacing={2} justifyContent={"space-around"} mt={"60px"}>
        <Grid item xs={6}>
          <div className={styles.titleWrapper}>
            <Button
              sx={{
                padding: "0",
                color: "#1A1B22",
                alignItems: "start",
                position: "absolute",
                left: "30px",
                top: "130px",
              }}
              onClick={() => navigate("/")}
            >
              <img src={ArrowIcon} alt="Иконка стрелки назад" />
            </Button>
            <h1 className={styles.title}>Результаты поиска</h1>
            <h2 className={styles.subtitle}>
              Кандидатов найдено:{" "}
              <Typography
                variant="h6"
                component="span"
                fontWeight={500}
                color="text.primary"
              >
                {results?.length || "0"}
              </Typography>
            </h2>
          </div>
          <Stack spacing={1}>
            {results ? (
              results?.map((student) => (
                <СandidateСard student={student} key={student.id} />
              ))
            ) : (
              <Typography variant="h5" component={"p"}>
                Попробуйте изменить параметры поиска
              </Typography>
            )}
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Filters />
        </Grid>
      </Grid>
    </>
  )
}

export default Search
