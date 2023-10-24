import * as yup from "yup"

export const loginShema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
  password: yup.string().required("Пароль обязателен"),
})

export const registrationShema = yup.object().shape({
  fullName: yup.string().required("Фамилия и Имя обязательны"),
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
  password: yup.string().required("Пароль обязателен"),
})
