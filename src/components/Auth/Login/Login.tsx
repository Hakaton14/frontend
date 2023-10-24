import { FC } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "@mui/material"
import { Input } from "@UI"
import { loginShema } from "@Utils"
import styles from "./Login.module.scss"

type formLogin = {
  email: string
  password: string
}

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginShema),
  })

  const onSubmit = (data: any) => {
    console.log(data, "Данные авторизации")
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

        <div className={styles.button}>
          <Button type="submit" fullWidth variant="contained" size="medium">
            Войти
          </Button>
        </div>

        {/* <div className={styles.button}>
          <Button type="submit" fullWidth variant="outlined" size="medium">
            Войти с Яндекс ID
          </Button>
        </div> */}
      </form>

      <div>
        <span>Нет аккаунта?</span>
        <a href="/sign-up">Зарегистрироваться</a>
      </div>
    </div>
  )
}

export default Login
