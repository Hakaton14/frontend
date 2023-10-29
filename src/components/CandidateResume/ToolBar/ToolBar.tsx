import { Button } from "@mui/material"
import { LikeFilled, Like, EyeSlashed, Eye, Download, Share } from "@IconResume"
import styles from "../CandidateResume.module.scss"

const styleSx = {
  padding: "4px",
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: "400",
  textTransform: "none",
  color: "#1A1B22",
}

export const ToolBar = () => {
  return (
    <div className={styles.ToolBar}>
      <Button sx={styleSx}>
        <img
          className={styles.ToolBarIcon}
          src={Like}
          alt="Иконка кнопки"
        ></img>
        Добавить в избранное
      </Button>
      <Button sx={styleSx}>
        <img
          className={styles.ToolBarIcon}
          src={EyeSlashed}
          alt="Иконка кнопки"
        ></img>
        Скрыть
      </Button>
      <Button sx={styleSx}>
        <img
          className={styles.ToolBarIcon}
          src={Download}
          alt="Иконка кнопки"
        ></img>
        Сохранить
      </Button>
      <Button sx={styleSx}>
        <img
          className={styles.ToolBarIcon}
          src={Share}
          alt="Иконка кнопки"
        ></img>
        Поделиться
      </Button>
    </div>
  )
}
