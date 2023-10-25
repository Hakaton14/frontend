import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { registrationShema } from "@Utils"
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
} from "@mui/material"

function VacancyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationShema),
  })

  return (
    <form noValidate>
      <Grid container spacing={2}>
        <Grid item xs={6}>
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
              registerName={"skill"}
              error={!!errors.skill}
              helperText={errors.skill?.message}
            />
          </Grid>
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
                value="Нет опыта"
                control={<Radio />}
                label="Нет опыта"
              />
              <FormControlLabel
                value="от 1 года до 3 лет"
                control={<Radio />}
                label="от 1 года до 3 лет"
              />
              <FormControlLabel
                value="от 3 года до 6 лет"
                control={<Radio />}
                label="от 3 года до 6 лет"
              />
              <FormControlLabel
                value="более 6 лет "
                control={<Radio />}
                label="более 6 лет"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={4} pb={1}>
              <Input
                customLabel="Зарплата"
                type={"text"}
                placeholder={"От"}
                register={register}
                registerName={"city"}
                error={!!errors.city}
                helperText={errors.city?.message}
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                customLabel="."
                type={"text"}
                placeholder={"До"}
                register={register}
                registerName={"city"}
                error={!!errors.city}
                helperText={errors.city?.message}
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", alignItems: "flex-end" }}
              pb={1}
            >
              <FormControl sx={{ minWidth: 141 }} size="small">
                <InputLabel id="currency_select_id_label">Валюта</InputLabel>
                <Select
                  labelId="currency_select_id_label"
                  id="currency_select"
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
              multiline
              rows={2}
              customLabel="Обязанности"
              type={"text"}
              placeholder={"Введите основные обязанности вакансии"}
              register={register}
              registerName={"responsibility"}
              error={!!errors.responsibility}
              helperText={errors.responsibility?.message}
            />
          </Grid>
          <Grid item xs={12} pb={1}>
            <Input
              multiline
              rows={2}
              customLabel="Требования"
              type={"text"}
              placeholder={"Введите основные требования вакансии"}
              register={register}
              registerName={"requirement"}
              error={!!errors.requirement}
              helperText={errors.requirement?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              multiline
              rows={2}
              customLabel="Условия"
              type={"text"}
              placeholder={"Например, Material Design 3"}
              register={register}
              registerName={"condition"}
              error={!!errors.condition}
              helperText={errors.condition?.message}
            />
          </Grid>
        </Grid>
      </Grid>
      <Button>Опубликовать</Button>
    </form>
  )
}
export default VacancyForm
