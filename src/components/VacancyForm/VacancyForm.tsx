import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { vacancyShema } from "@Utils"
import { Input } from "@UI"
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Button,
  TextField,
} from "@mui/material"
import { Fragment, useEffect } from "react"
type VacancyFormProps = {
  tab: number
}
function VacancyForm({ tab }: VacancyFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(vacancyShema),
    defaultValues: {
      responsibility: "",
    },
  })

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type),
    )
    return () => subscription.unsubscribe()
  }, [watch])

  const MainFields = () => (
    <Fragment>
      <Grid container spacing={4} justifyContent={"center"}>
        <Grid item xs={5}>
          <Grid item xs={12} pb={1}>
            <Input
              customLabel="Название Вакансии"
              type={"text"}
              placeholder={"Введите название вакансии"}
              register={register}
              registerName={"vacName"}
              error={!!errors.vacName}
              helperText={errors.vacName?.message}
            />
          </Grid>
          <Grid item xs={12} pb={1}>
            <Input
              customLabel="Специализация"
              type={"text"}
              placeholder={"Введите специализацию вакансии"}
              register={register}
              registerName={"specialization"}
              error={!!errors.specialization}
              helperText={errors.specialization?.message}
            />
          </Grid>
          <Grid item xs={12} pb={1}>
            <Input
              customLabel="Ключевые навыки"
              type={"text"}
              placeholder={"Например, Material Design 3"}
              register={register}
              registerName={"skills"}
              error={!!errors.skills}
              helperText={errors.skills?.message}
            />
          </Grid>
          <Grid item xs={12} pb={1}>
            <FormControl>
              <FormLabel id="skills-radio-buttons-group-label">
                Опыт работы
              </FormLabel>
              <RadioGroup
                aria-labelledby="skills-radio-buttons-group-label"
                defaultValue="Нет опыта"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  {...register("grade")}
                  value="intern"
                  control={<Radio />}
                  label="Нет опыта"
                />
                <FormControlLabel
                  {...register("grade")}
                  value="junior"
                  control={<Radio />}
                  label="от 1 года до 3 лет"
                />
                <FormControlLabel
                  {...register("grade")}
                  value="middle"
                  control={<Radio />}
                  label="от 3 года до 6 лет"
                />
                <FormControlLabel
                  {...register("grade")}
                  value="senior"
                  control={<Radio />}
                  label="более 6 лет"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel id="office-radio-buttons-group-label">
                Адрес основного офиса
              </FormLabel>
              <RadioGroup
                aria-labelledby="office-radio-buttons-group-label"
                defaultValue="Не указывать адрес"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  {...register("radioOfficeAddress")}
                  value={false}
                  control={<Radio />}
                  label="Не указывать адрес"
                />
                <FormControlLabel
                  {...register("radioOfficeAddress")}
                  value={true}
                  control={<Radio />}
                  label="Указать адрес"
                />
              </RadioGroup>
              <Input
                disabled
                type={"text"}
                placeholder={"Адрес офиса"}
                register={register}
                registerName={"officeAdress"}
                error={!!errors.officeAdress}
                helperText={errors.officeAdress?.message}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={2}>
            <Grid item xs={4} pb={1}>
              <Input
                customLabel="Зарплата"
                type={"number"}
                placeholder={"От"}
                register={register}
                registerName={"salaryFrom"}
                error={!!errors.salaryFrom}
                helperText={errors.salaryFrom?.message}
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                customLabel="."
                type={"number"}
                placeholder={"До"}
                register={register}
                registerName={"salaryTo"}
                error={!!errors.salaryTo}
                helperText={errors.salaryTo?.message}
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", alignItems: "flex-end" }}
              pb={1}
            >
              <FormControl sx={{ minWidth: 111 }} size="small">
                <InputLabel id="currency_select_id_label">Валюта</InputLabel>
                <Select
                  {...register("currencySelect")}
                  labelId="currency_select_id_label"
                  id="currencySelect"
                  defaultValue={"rub"}
                  label="Валюта"
                  fullWidth
                >
                  <MenuItem value={"rub"}>Рубли</MenuItem>
                  <MenuItem value={"usd"}>Доллары</MenuItem>
                  <MenuItem value={"eur"}>Евро</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} pb={1}>
            <Input
              customLabel="В каком городе опубликовать вакансию"
              type={"text"}
              placeholder={"Укажите города для размещения"}
              register={register}
              registerName={"city"}
              error={!!errors.city}
              helperText={errors.city?.message}
            />
          </Grid>
          <Grid item xs={12} pb={1}>
            <Input
              fullWidth
              multiline={true}
              maxRows={2}
              customLabel="Обязанности"
              type={"text"}
              register={register}
              registerName={"responsibility"}
              error={!!errors.responsibility}
              helperText={errors.responsibility?.message}
            />
          </Grid>
          <Grid item xs={12} pb={1}>
            <Input
              fullWidth
              multiline={true}
              rows={2}
              customLabel="Требования"
              type={"text"}
              // placeholder={"Введите основные требования вакансии"}
              register={register}
              registerName={"requirement"}
              error={!!errors.requirement}
              helperText={errors.requirement?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              fullWidth
              multiline={true}
              rows={2}
              customLabel="Условия"
              type={"text"}
              // placeholder={"Например, Material Design 3"}
              register={register}
              registerName={"condition"}
              error={!!errors.condition}
              helperText={errors.condition?.message}
            />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )

  const Aditionalields = () => (
    <Fragment>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={4} pb={1}>
          <FormControl>
            <FormLabel id="workload-radio-buttons-group-label">
              Тип занятости
            </FormLabel>
            <RadioGroup
              aria-labelledby="workload-radio-buttons-group-label"
              defaultValue="Полная занятость"
              name="radio-buttons-group"
            >
              <FormControlLabel
                {...register("grade")}
                value="fullTime"
                control={<Radio />}
                label="Полная занятость"
              />
              <FormControlLabel
                {...register("grade")}
                value="partTime"
                control={<Radio />}
                label="Частичная занятость"
              />
              <FormControlLabel
                {...register("grade")}
                value="project"
                control={<Radio />}
                label="Проектная работа"
              />
              <FormControlLabel
                {...register("grade")}
                value="intenship"
                control={<Radio />}
                label="Стажировка"
              />
              <FormControlLabel
                {...register("grade")}
                value="volunteer"
                control={<Radio />}
                label="Волонтерство"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4} pb={1}>
          <FormControl>
            <FormLabel id="workHours-radio-buttons-group-label">
              График работы
            </FormLabel>
            <RadioGroup
              aria-labelledby="workHours-radio-buttons-group-label"
              defaultValue="Полная занятость"
              name="radio-buttons-group"
            >
              <FormControlLabel
                {...register("workHours")}
                value="52"
                control={<Radio />}
                label="5/2"
              />
              <FormControlLabel
                {...register("workHours")}
                value="61"
                control={<Radio />}
                label="6/1"
              />
              <FormControlLabel
                {...register("workHours")}
                value="gibki"
                control={<Radio />}
                label="Гибкий график"
              />
              <FormControlLabel
                {...register("workHours")}
                value="smeni"
                control={<Radio />}
                label="Сменный график"
              />
              <FormControlLabel
                {...register("workHours")}
                value="remote"
                control={<Radio />}
                label="Удаленкао"
              />
              <FormControlLabel
                {...register("workHours")}
                value="vahta"
                control={<Radio />}
                label="Вахтовый метод"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Input
            customLabel="Знание иностранных языков"
            type={"text"}
            placeholder={"Выберите язык"}
            register={register}
            registerName={"lang"}
            error={!!errors.lang}
            helperText={errors.lang?.message}
          />
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", alignItems: "flex-end" }}>
          <FormControl sx={{ minWidth: 141 }} size="small">
            <InputLabel id="langGrade_select_id_label">
              Уровень владения
            </InputLabel>
            <Select
              {...register("langGrade")}
              labelId="langGrade_select_id_label"
              id="langGradeSelect"
              defaultValue={"b1"}
              label="Уровень владения"
              fullWidth
            >
              <MenuItem value={"b1"}>B1</MenuItem>
              <MenuItem value={"b2"}>B2</MenuItem>
              <MenuItem value={"c1"}>C1</MenuItem>
              <MenuItem value={"c2"}>C2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Fragment>
  )

  return (
    <form noValidate onSubmit={handleSubmit(() => console.log("first"))}>
      {tab ? <Aditionalields /> : <MainFields />}

      <Grid container justifyContent={"center"} mt={4}>
        <Grid item xs={3}>
          <Button type="submit" variant="contained" color="info">
            Опубликовать
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button type="submit" variant="outlined">
            Сохранить шаблон
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
export default VacancyForm
