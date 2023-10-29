import { Button } from "@mui/material"
import { LikeFilled, Like, EyeSlashed, Eye, Download, Share } from "@IconResume"
import styles from "../CandidateResume.module.scss"
import { useState } from "react"

const styleSx = {
  padding: "4px",
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: "400",
  textTransform: "none",
  color: "#1A1B22",
}

export const ToolBar = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isHide, setIsHide] = useState<boolean>(false)

  const handleOnLike = () => {
    setIsLiked(!isLiked)
  }

  const handleOnHide = () => {
    setIsHide(!isHide)
  }

  return (
    <div className={styles.ToolBar}>
      <Button sx={styleSx} onClick={handleOnLike}>
        {isLiked ? (
          <img
            className={styles.ToolBarIcon}
            src={LikeFilled}
            alt="Иконка кнопки"
          />
        ) : (
          <img className={styles.ToolBarIcon} src={Like} alt="Иконка кнопки" />
        )}
        {isLiked ? "Убрать из избранного" : "Добавить в избранное"}
      </Button>

      <Button sx={styleSx} onClick={handleOnHide}>
        {!isHide ? (
          <img
            className={styles.ToolBarIcon}
            src={EyeSlashed}
            alt="Иконка кнопки"
          />
        ) : (
          <img className={styles.ToolBarIcon} src={Eye} alt="Иконка кнопки" />
        )}
        {!isHide ? "Скрыть" : "Показать"}
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
