import { FC } from "react"
import styles from "./Registration.module.scss"

const Registration: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Регистрация</h2>

      <form>
        <div className={styles.input}>
          <Input type={"text"} placeholder={"Фамилия"} />
        </div>

        <div className={styles.input}>
          <Input type={"password"} placeholder={"Пароль"} />
        </div>

        <div className={styles.input}>
          <Input type={"password"} placeholder={"Пароль"} />
        </div>

        <div className={styles.button}>
          <Button type="submit" fullWidth variant="contained" size="medium">
            Зарегистрироваться
          </Button>
        </div>
      </form>

      <div className={styles.toolbar}>
        <span>Есть учетная запись?</span>
        <a href="/sign-in">Войти</a>
      </div>
    </div>
  )
}

export default Registration
