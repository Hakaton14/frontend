import { FC, useEffect } from "react"
import { useForm } from "react-hook-form"
import styles from "./Registration.module.scss"
import { Input } from "@UI"
import { Button } from "@mui/material"
import { registrationShema } from "@Utils"
import { yupResolver } from "@hookform/resolvers/yup"
import { useAppDispatch, useAppSelector } from "@ReduxHooks"
import { login, signUp } from "@Features"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"
type formRegistration = {
  first_name: string
  last_name: string
  email: string
  password: string
  phone: string
}

const Registration: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isError, isSuccess, message, isLoading } = useAppSelector(
    (state) => state.auth,
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationShema),
  })

  useEffect(() => {
    if (isSuccess) navigate("/")
  }, [isSuccess, navigate])

  const onSubmit = async (userData: formRegistration) => {
    await dispatch(signUp(userData))
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Регистрация</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.input}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            register={register}
            registerName={"first_name"}
            error={!!errors.first_name}
            helperText={errors.first_name?.message}
          />
        </div>

        <div className={styles.input}>
          <Input
            type={"text"}
            placeholder={"Фамилия"}
            register={register}
            registerName={"last_name"}
            error={!!errors.last_name}
            helperText={errors.last_name?.message}
          />
        </div>

        <div className={styles.input}>
          <Input
            type={"phone"}
            placeholder={"phone"}
            register={register}
            registerName={"phone"}
            error={!!errors.phone}
            helperText={errors.phone?.message}
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
          <Button type="submit" variant="contained" size="medium" fullWidth>
            Зарегистрироваться
          </Button>
        </div>
      </form>

      <div className={styles.toolbar}>
        <span>Есть учетная запись? </span>
        <Link to="/sign-in">Войти</Link>
      </div>
    </div>
  )
}

export default Registration
