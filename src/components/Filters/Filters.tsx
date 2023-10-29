import {
  Autocomplete,
  Stack,
  Typography,
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Button,
} from "@mui/material"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { filterShema } from "@Utils"
import { useAppSelector } from "@ReduxHooks"
import { useState, SyntheticEvent } from "react"
import { Input } from "@UI"

type TSelectedOpt = {
  id: number
  name: string
}

function Filters() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(filterShema),
    defaultValues: {
      employment: "2",
      experience: "1",
      currency: "4",
      schedule: "1",
    },
  })
  const {
    cityOpt,
    skillsOpt,
    currencyOpt,
    schedulesOpt,
    experienceOpt,
    employmentsOpt,
  } = useAppSelector((state) => state.filters)

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

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
    >
      <Stack spacing={3} maxWidth={"330px"}>
        <Typography variant="h4">Фильтры</Typography>
        <FormControl>
          <Input
            register={register}
            InputProps={{ sx: { height: "53px" } }}
            customLabel="Статус поиска работы"
            registerName={"currency"}
            fullWidth
            select
          >
            {currencyOpt.map((option) => (
              <MenuItem value={option.id} key={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Input>
        </FormControl>

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
              register={register}
              registerName={"skills"}
              error={!!errors.skills}
              helperText={errors.skills?.message}
            />
          )}
        />

        <FormControl>
          <Input
            register={register}
            InputProps={{ sx: { height: "53px" } }}
            customLabel="Опыт"
            registerName={"experience"}
            fullWidth
            select
          >
            {experienceOpt.map((option) => (
              <MenuItem value={option.id} key={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Input>
        </FormControl>
        <FormControl>
          <Input
            register={register}
            InputProps={{ sx: { height: "53px" } }}
            customLabel="Условия работы"
            registerName={"employments"}
            fullWidth
            select
          >
            {employmentsOpt.map((option) => (
              <MenuItem value={option.id} key={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Input>
        </FormControl>
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
              customLabel="Местоположение"
              type={"text"}
              value={selectedCity}
              register={register}
              registerName={"city"}
              error={!!errors.city}
              helperText={errors.city?.message}
            />
          )}
        />
        <Stack direction={"row"} alignItems={"flex-end"} spacing={0.5}>
          <Box>
            <Input
              customLabel="Зарплата"
              InputProps={{ sx: { height: "53px" } }}
              type={"number"}
              defaultValue={150000}
              register={register}
              registerName={"salary_from"}
              registerOptions={{ valueAsNumber: true }}
              error={!!errors.salary_from}
              helperText={errors.salary_from?.message}
            />
          </Box>

          <FormControl sx={{ minWidth: 111 }}>
            <Input
              register={register}
              InputProps={{ sx: { height: "53px" } }}
              customLabel="Валюта"
              registerName={"currency"}
              defaultValue={currencyOpt[3]?.id || "4"}
              fullWidth
              select
            >
              {currencyOpt.map((option) => (
                <MenuItem value={option.id} key={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Input>
          </FormControl>
        </Stack>
        <FormControl sx={{ minWidth: 111 }}>
          <Input
            register={register}
            InputProps={{ sx: { height: "53px" } }}
            customLabel="Занятость"
            defaultValue={""}
            registerName={"schedule"}
            fullWidth
            select
          >
            {schedulesOpt.map((option) => (
              <MenuItem value={option.id} key={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Input>
        </FormControl>
        <Button variant="contained" sx={{ color: "#FFF" }}>
          Начать поиск
        </Button>
        <Stack direction={"row"} spacing={2} justifyContent={"space-around"}>
          <Button
            type="submit"
            variant="text"
            sx={{
              color: "text.primary",
              fontSize: "14px",
              fontWeight: 400,
              textTransform: "none",
            }}
          >
            Сохранить фильтры
          </Button>
          <Button
            variant="text"
            sx={{
              color: "text.primary",
              fontSize: "14px",
              fontWeight: 400,
              textTransform: "none",
            }}
            onClick={() => reset({})}
          >
            Сбросить фильтры
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}
export default Filters
