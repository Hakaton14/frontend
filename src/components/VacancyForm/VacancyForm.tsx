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
  Autocomplete,
} from "@mui/material"
import { Fragment, SyntheticEvent, useEffect, useState } from "react"
import { getCity, getCurrency } from "@Features"
import { useAppDispatch, useAppSelector } from "@ReduxHooks"
import { createVacancy } from "@Features"

type VacancyFormProps = {
  tab: number
}

type TSelectedOpt = {
  id: number
  name: string
}

function VacancyForm({ tab }: VacancyFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(vacancyShema),
  })
  // const [options, setOptions] = useState<string[]>([])
  // const [currencyOpts, setCurrencyOpts] = useState<object[]>([])

  const dispatch = useAppDispatch()
  const { cityOpt } = useAppSelector((state) => state.filters)

  // const onChangehandle = async (value: any) => {
  //   dispatch(getCity())
  // }

  const [selectedCity, setSelectedCity] = useState<TSelectedOpt | null>(null)
  const [selectedSkills, setSelectedSkills] = useState<TSelectedOpt[] | null>(
    null,
  )

  const handleCityChange = (
    evt: SyntheticEvent,
    selectedCity: TSelectedOpt | null,
  ) => {
    if (selectedCity) {
      setSelectedCity(selectedCity)
    } else {
      setSelectedCity(null)
    }
  }
  const handleSkillsChange = (
    evt: SyntheticEvent,
    selectedSkill: TSelectedOpt | null,
  ) => {
    if (selectedSkill) {
      setSelectedSkills((prev) => console.log(selectedSkill) )
    } else {
      setSelectedSkills(null)
    }
  }

  // const onSubmit = (evt: SyntheticEvent) => {
  //   evt.city = console.log(evt)
  // }
  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => {
  //     console.log(value, name, type)
  //   })
  //   return () => subscription.unsubscribe()
  // }, [watch])

  useEffect(() => {
    dispatch(getCurrency())
    dispatch(getCity())
  }, [])

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
              registerName={"name"}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={12} pb={1}>
            <Autocomplete
              multiple
              options={cityOpt}
              getOptionLabel={(cityOpt) => cityOpt.name}
              onChange={handleSkillsChange}
              noOptionsText={"Нет подходящих вариантов"}
              renderInput={(params) => (
                <Input
                  {...params}
                  customLabel="Ключевые навыки"
                  type={"text"}
                  placeholder={"Например, Material Design 3"}
                  register={register}
                  registerName={"skills"}
                  error={!!errors.skills}
                  helperText={errors.skills?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} pb={1}>
            <FormControl>
              <FormLabel id="skills-radio-buttons-group-label">
                Опыт работы
              </FormLabel>
              <RadioGroup
                aria-labelledby="skills-radio-buttons-group-label"
                defaultValue="0"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  {...register("experience")}
                  value="0"
                  control={<Radio />}
                  label="Нет опыта"
                />
                <FormControlLabel
                  {...register("experience")}
                  value="1"
                  control={<Radio />}
                  label="от 1 года до 3 лет"
                />
                <FormControlLabel
                  {...register("experience")}
                  value="2"
                  control={<Radio />}
                  label="от 3 года до 6 лет"
                />
                <FormControlLabel
                  {...register("experience")}
                  value="3"
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
                registerName={"address"}
                error={!!errors.address}
                helperText={errors.address?.message}
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
                registerName={"salary_from"}
                registerOptions={{ valueAsNumber: true }}
                error={!!errors.salary_from}
                helperText={errors.salary_from?.message}
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                customLabel="."
                type={"number"}
                placeholder={"До"}
                register={register}
                registerOptions={{ valueAsNumber: true }}
                registerName={"salary_to"}
                error={!!errors.salary_to}
                helperText={errors.salary_to?.message}
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
                  {...register("currency")}
                  labelId="currency_select_id_label"
                  id="currency"
                  defaultValue={0}
                  label="Валюта"
                  fullWidth
                >
                  <MenuItem value={0}>Рубли</MenuItem>
                  <MenuItem value={1}>Доллары</MenuItem>
                  <MenuItem value={2}>Евро</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} pb={1}>
            <Autocomplete
              options={cityOpt}
              getOptionLabel={(cityOpt) => cityOpt.name}
              onChange={handleCityChange}
              noOptionsText={"Нет подходящих вариантов"}
              renderInput={(params) => (
                <Input
                  {...params}
                  customLabel="В каком городе опубликовать вакансию"
                  type={"text"}
                  value={selectedCity?.name}
                  placeholder={"Укажите города для размещения"}
                  register={register}
                  registerName={"city"}
                  error={!!errors.city}
                  helperText={errors.city?.message}
                />
              )}
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
              registerName={"responsibilities"}
              error={!!errors.responsibilities}
              helperText={errors.responsibilities?.message}
            />
          </Grid>
          <Grid item xs={12} pb={1}>
            <Input
              fullWidth
              multiline={true}
              rows={2}
              customLabel="Требования"
              type={"text"}
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
              register={register}
              registerName={"conditions"}
              error={!!errors.conditions}
              helperText={errors.conditions?.message}
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
                {...register("workload")}
                value="fullTime"
                control={<Radio />}
                label="Полная занятость"
              />
              <FormControlLabel
                {...register("workload")}
                value="partTime"
                control={<Radio />}
                label="Частичная занятость"
              />
              <FormControlLabel
                {...register("workload")}
                value="project"
                control={<Radio />}
                label="Проектная работа"
              />
              <FormControlLabel
                {...register("workload")}
                value="intenship"
                control={<Radio />}
                label="Стажировка"
              />
              <FormControlLabel
                {...register("workload")}
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
    <form
      noValidate
      onSubmit={handleSubmit((evt) => {
        // evt.city = selectedCity?.id
        dispatch(createVacancy(evt))
      })}
    >
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
