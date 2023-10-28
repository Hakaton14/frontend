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
import {
  getCity,
  getCurrency,
  getEmployments,
  getExperiences,
  getSchedules,
  getSkills,
} from "@Features"
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
    defaultValues: {
      employment: "2",
      experience: "1",
      currency: "4",
      schedule: "1"
    }
  })
  // const [options, setOptions] = useState<string[]>([])
  // const [currencyOpts, setCurrencyOpts] = useState<object[]>([])

  const dispatch = useAppDispatch()
  const {
    cityOpt,
    skillsOpt,
    currencyOpt,
    schedulesOpt,
    experienceOpt,
    employmentsOpt,
  } = useAppSelector((state) => state.filters)

  // const onChangehandle = async (value: any) => {
  //   dispatch(getCity())
  // }

  const [selectedCity, setSelectedCity] = useState<TSelectedOpt | null>(null)
  const [selectedSkills, setSelectedSkills] = useState<TSelectedOpt[]>([])

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
    selectedSkill: TSelectedOpt[],
  ) => {
    setSelectedSkills([...selectedSkill])
  }

  // const onSubmit = (evt: SyntheticEvent) => {
  //   evt.city = console.log(evt)
  // }
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(value, name, type)
    })
    return () => subscription.unsubscribe()
  }, [watch])

  useEffect(() => {
    dispatch(getCurrency())
    dispatch(getCity())
    dispatch(getSkills())
    dispatch(getSchedules())
    dispatch(getEmployments())
    dispatch(getExperiences())
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
              options={skillsOpt}
              getOptionLabel={(skillsOpt) => skillsOpt.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              onChange={handleSkillsChange}
              value={selectedSkills}
              filterSelectedOptions
              noOptionsText={"Нет подходящих вариантов"}
              renderInput={(params) => (
                <Input
                  {...params}
                  customLabel="Ключевые навыки"
                  type={"text"}
                  placeholder={
                    selectedSkills.length === 0
                      ? "Например, Material Design 3"
                      : ""
                  }
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
                defaultValue={experienceOpt[0]?.id || "1"}
                name="radio-buttons-group"
              >
                {experienceOpt.map((option) => (
                  <FormControlLabel
                    key={option.id}
                    {...register("experience")}
                    value={option.id}
                    control={<Radio />}
                    label={option.name}
                  />
                ))}
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
                defaultValue={0}
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
                defaultValue={0}
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
                  defaultValue={currencyOpt[3]?.id || "4"}
                  label="Валюта"
                  fullWidth
                >
                  {currencyOpt.map((option) => (
                    <MenuItem value={option.id} key={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} pb={1}>
            <Autocomplete
              options={cityOpt}
              getOptionLabel={(cityOpt) => cityOpt.name}
              onChange={handleCityChange}
              value={selectedCity}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              noOptionsText={"Нет подходящих вариантов"}
              renderInput={(params) => (
                <Input
                  {...params}
                  customLabel="В каком городе опубликовать вакансию"
                  type={"text"}
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
              registerName={"requirements"}
              error={!!errors.requirements}
              helperText={errors.requirements?.message}
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
              defaultValue={"1"}
              name="radio-buttons-group1"
            >
              {employmentsOpt.map((option) => (
                <FormControlLabel
                  {...register("employment")}
                  key={option.id}
                  value={option.id}
                  control={<Radio />}
                  label={option.name}
                />
              ))}
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
              defaultValue={schedulesOpt[0]?.id || "1"}
              name="radio-buttons-group2"
            >
              {schedulesOpt.map((option) => (
                <FormControlLabel
                  {...register("schedule")}
                  key={option.id}
                  value={option.id}
                  control={<Radio />}
                  label={option.name}
                />
              ))}
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
      onSubmit={handleSubmit((data) => {
        data.city = selectedCity?.id
        data.skills = selectedSkills.map((skill) => skill.id)
        data.employment = Number(data.employment)
        data.experience = Number(data.experience)
        data.schedule = Number(data.schedule)
        data.currency = Number(data.currency)
        dispatch(createVacancy(data))
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
