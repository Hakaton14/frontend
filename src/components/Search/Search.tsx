import { Button } from "@mui/material"
import styles from "./Serach.module.scss"
import ArrowIcon from "../../ui-kit/icons/Long arrow.svg"
import Filtercon from "../../ui-kit/icons/filter_icon.svg"

function Search() {
  return (
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
      >
        <img src={ArrowIcon} alt="Иконка стрелки назад" />
      </Button>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Результаты поиска</h1>
        <h2 className={styles.subtitle}>Найдено 68 кандидатов</h2>
      </div>

      <div className={styles.filterWrapper}>
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
      </div>
    </div>
  )
}

export default Search
