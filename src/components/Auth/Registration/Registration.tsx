import { FC } from "react"
import { useForm } from "react-hook-form"
import styles from "./Registration.module.scss"
import { Input } from "@UI"
import { Button } from "@mui/material"
import { registrationShema } from "@Utils"
import { yupResolver } from "@hookform/resolvers/yup"

type formRegistration = {
  fullName: string
  email: string
  password: string
}

const Registration: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationShema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Регистрация</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.input}>
          <Input
            type={"text"}
            placeholder={"Фамилия и Имя"}
            register={register}
            registerName={"fullName"}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />
        </div>

        <div className={styles.input}>
          <Input
            type={"email"}
            placeholder={"email"}
            register={register}
            registerName={"email"}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>

        <div className={styles.input}>
          <Input
            type={"password"}
            placeholder={"Пароль"}
            register={register}
            registerName={"password"}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
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
