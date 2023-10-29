import {
  Autocomplete,
  FormControl,
  Grid,
  Button,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { yupResolver } from "@hookform/resolvers/yup"
import { vacancyShema } from "@Utils"
import styles from "./Filter.module.scss"
import TrashIcon from "../../ui-kit/icons/trash_icon.svg"
import { useAppSelector } from "@ReduxHooks"
import { SyntheticEvent, useState } from "react"
import { useForm } from "react-hook-form"

type TSelectedOpt = {
  id: number
  name: string
}

const searchStatus = [
  { label: "Активный поиск" },
  { label: "Готов рассматреть варианты" },
  { label: "Есть работа" },
]

const profession = [
  { label: "Дизайн" },
  { label: "Frontend" },
  { label: "Backend" },
  { label: "QA" },
]

const experience = [
  { label: "Нет опыта" },
  { label: "1 год" },
  { label: "1-3 года" },
  { label: "5 лет" },
]

const conditions = [
  { label: "Офис" },
  { label: "Гибрид" },
  { label: "Удаленка" },
]

function Filters() {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(vacancyShema),
    defaultValues: {
      employment: "2",
      experience: "1",
      currency: "4",
      schedule: "1",
    },
  })

  // const dispatch = useAppDispatch()
  const [selectedSkills, setSelectedSkills] = useState<TSelectedOpt[]>([])
  const { skillsOpt, currencyOpt } = useAppSelector((state) => state.filters)

  const handleSkillsChange = (
    evt: SyntheticEvent,
    selectedSkill: TSelectedOpt[],
  ) => {
    setSelectedSkills([...selectedSkill])
  }

  return (
    <div className={styles.filtersWrapper}>
      <h1 className={styles.title}>Фильтры</h1>
      <div className={styles.filterSection}>
        <Autocomplete
          options={searchStatus}
          sx={{ marginBottom: "26px", width: "320px", height: "59px" }}
          renderInput={(params) => (
            <TextField {...params} label="Статус поиска работы" />
          )}
        />
        <Autocomplete
          options={profession}
          sx={{ marginBottom: "26px", width: "320px", height: "59px" }}
          renderInput={(params) => (
            <TextField {...params} label="Профессиональная область" />
          )}
        />
        <Autocomplete
          options={experience}
          sx={{ marginBottom: "26px", width: "320px", height: "59px" }}
          renderInput={(params) => <TextField {...params} label="Опыт" />}
        />
        <Autocomplete
          options={conditions}
          sx={{ marginBottom: "26px", width: "320px", height: "59px" }}
          renderInput={(params) => (
            <TextField {...params} label="Условия работы" />
          )}
        />

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
              // customLabel="Ключевые навыки"
              type={"text"}
              placeholder={
                selectedSkills.length === 0 ? "Например, Material Design 3" : ""
              }
              // register={register}
              // registerName={"skills"}
              error={!!errors.skills}
              // helperText={errors.skills?.message}
            />
          )}
        />

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Input
              type={"number"}
              placeholder={"Вознаграждение"}
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
      </div>
      <div className={styles.buttonsWrapper}>
        <Button
          sx={{
            padding: "0",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            color: "#1A1B22",
            textTransform: "none",
          }}
        >
          Сохранить фильтры
        </Button>
        <Button
          sx={{
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            color: "#1A1B22",
            textTransform: "none",
            marginRight: "4px",
          }}
        >
          <img src={TrashIcon} alt="Иконка писем" />
          Очистить фильтры
        </Button>
      </div>
    </div>
  )
}

export default Filters
