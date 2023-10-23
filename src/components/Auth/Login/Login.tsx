import { FC } from "react"
import { Button } from "@mui/material"
import { Input } from "@UI"
import styles from "./Login.module.scss"

const Login: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Войти в аккаунт</h2>

      <form>
        <div className={styles.input}>
          <Input type={"email"} placeholder={"Почта"} />
        </div>

        <div className={styles.input}>
          <Input type={"password"} placeholder={"Пароль"} />
        </div>

        <div className={styles.button}>
          <Button type="submit" fullWidth variant="contained" size="medium">
            Войти
          </Button>
        </div>

        <div className={styles.button}>
          <Button type="submit" fullWidth variant="outlined" size="medium">
            Войти с Яндекс ID
          </Button>
        </div>
      </form>

      <div>
        <span>Нет аккаунта?</span>
        <a href="/sign-up">Зарегистрироваться</a>
      </div>
    </div>
  )
}

export default Login
