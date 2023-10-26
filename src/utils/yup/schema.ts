import * as yup from "yup"

const phoneRegExp = /^(\+7)\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/
const passwordRegExp = {}

export const loginShema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
  password: yup.string().required("Пароль обязателен"),
})

export const registrationShema = yup.object().shape({
  first_name: yup
    .string()
    .min(3, "Имя должно содержать минимум 3 знака")
    .max(50, "Имя не может быть длинее 50 знаков")
    .matches(/^[A-ZА-ЯЁ].*$/, "Первая буква имени должна быть заглавной")
    .matches(
      /^[A-ZА-ЯЁ][a-zа-яё]+$/,
      "Символы, следующие за первым, должны быть строчными",
    )
    .matches(/^[А-ЯЁа-яё]*$/, "Используйте только кириллические буквы")
    .required("Имя обязательно"),
  last_name: yup
    .string()
    .min(5, "Фамилия должна содержать минимум 3 знака")
    .max(50, "Фамилия не может быть длинее 50 знаков")
    .matches(/^[A-ZА-ЯЁ].*$/, "Первая буква фамилии должна быть заглавной")
    .matches(
      /^[A-ZА-ЯЁ][a-zа-яё]+$/,
      "Символы, следующие за первым, должны быть написаны строчными буквами",
    )
    .matches(/^[А-ЯЁа-яё]*$/, "Используйте только кириллические буквы")
    .required("Фамилия обязательна"),
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
  password: yup
    .string()
    .min(5, "Пароль должен содержать минимум 5 символов")
    .max(50, "Пароль не может содержать более 50 символов")
    .matches(
      /^[a-zA-Z0-9!_@#$%^&+=]*$/,
      "Пароль может содержать только символы латинского алфавита и специальные символы",
    )
    .matches(/[0-9]/, "Пароль должен содержать хотя бы одну цифру (0-9)")
    .matches(
      /[a-z]/,
      "Пароль должен содержать хотя бы одну прописную букву (a-z)",
    )
    .matches(
      /[A-Z]/,
      "Пароль должен содержать хотя бы одну заглавную букву (A-Z)",
    )
    .matches(
      /[!_@#$%^&+=]/,
      "Пароль должен содержать хотя бы один специальный символ (!_@#$%^&+=)",
    )
    .required("Пароль обязателен для заполнения"),
  phone: yup
    .string()
    .required("Телефон обязателен")
    .matches(
      phoneRegExp,
      "Неверный формат номера телефона (Пример: +7 999 888 77 22)",
    )
    .required("Телефон обязателен для заполнения"),
})

export const vacancyShema = yup.object().shape({
  vacName: yup.string().required("Заполните поле"),
  specialization: yup.string().required("Заполните поле"),
  skills: yup.string().required("Заполните поле"),
  grade: yup.string().required("Заполните поле"),
  radioOfficeAddress: yup.boolean().required("Заполните поле"),
  officeAdress: yup.string(),
  city: yup.string().required("Заполните поле"),
  salaryFrom: yup.string(),
  salaryTo: yup.string(),
  currencySelect: yup.string(),
  responsibility: yup.string().required("Заполните поле"),
  requirement: yup.string().required("Заполните поле"),
  condition: yup.string().required("Заполните поле"),
  lang: yup.string().required("Заполните поле"),
  langGrade: yup.string().required("Заполните поле"),
  workHours: yup.string().required("Заполните поле"),
})
