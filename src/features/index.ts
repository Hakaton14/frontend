// Пример: export { default as Компонент } from "./Компонент/Компонент"

export { default as authReducer } from "./auth/authSlice"
export { default as authService } from "./auth/authService"
export { signUp, login, logout, reset } from "./auth/authSlice"

export { default as studentReducer } from "./student/studentSlice"
export { default as studentService } from "./student/studentService"
export { getStudentProfile, closeStudent } from "./student/studentSlice"

export { default as filtersReducer } from "./filters/filtersSlice"
export { default as filtersService } from "./filters/filtersService"
export {
  getCity,
  getCurrency,
  getSkills,
  getSchedules,
  getExperiences,
  getEmployments,
} from "./filters/filtersSlice"

export { default as vacancyReducer } from "./vacancy/vacancySlice"
export { default as vacancyService } from "./vacancy/vacancyService"
export { createVacancy, getVacancies } from "./vacancy/vacancySlice"

export { default as searchReducer } from "./search/searchSlice"
export { default as searchService } from "./search/searchService"
export { getStudents, setQuery } from "./search/searchSlice"
