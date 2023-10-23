import { FC } from "react"
import { Button } from "@mui/material"
import { Input } from "@UI"
import { login } from "@Features"
import styles from "./Login.module.scss"
import { useForm, Controller } from "react-hook-form"
import { useAppDispatch } from "@ReduxHooks"

interface Inputs {
  email: string
  password: string
}

const Login: FC = () => {
  const dispatch = useAppDispatch()
  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit = async (userData: Inputs) => {
    dispatch(login(userData))
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Войти в аккаунт</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input type={"email"} placeholder={"Почта"} {...field} />
            )}
          />
        </div>

        <div className={styles.input}>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input type={"password"} placeholder={"Пароль"} {...field} />
            )}
          />
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
