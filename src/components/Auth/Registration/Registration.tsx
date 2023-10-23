import { FC } from "react"
import styles from "./Registration.module.scss"

const Registration: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Регистрация</h2>

      <form>
        <button type="submit">Зарегистрироваться</button>
      </form>

      <div className={styles.toolbar}>
        <span>Есть учетная запись?</span>
        <a href="/sign-in">Войти</a>
      </div>
    </div>
  )
}

export default Registration
