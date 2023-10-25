import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "@mui/material"
import { Input } from "@UI"
import { loginShema } from "@Utils"
import { login } from "@Features"
import styles from "./Login.module.scss"
import { useAppDispatch } from "@ReduxHooks"

interface Inputs {
  email: string
  password: string
}

type formLogin = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginShema),
  })

  const dispatch = useAppDispatch()
  const onSubmit = async (userData: Inputs) => {
    dispatch(login(userData))
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Войти в аккаунт</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.input}>
          <Input
            type="email"
            placeholder={"Почта"}
            register={register}
            registerName={"email"}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>

        <div className={styles.input}>
          <Input
            type="password"
            placeholder={"Пароль"}
            register={register}
            registerName={"password"}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>

        <div className={styles.Button}>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            size="medium"
            disabled
          >
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
