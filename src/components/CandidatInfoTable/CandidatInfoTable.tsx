import {
  Avatar,
  Button,
  IconButton,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material"

import AvatarIcon from "../../ui-kit/icons/avatar.svg"
import TrashIcon from "../../ui-kit/icons/trashBox.svg"

function createData(
  number: number,
  name: string,
  workStatus: string,
  staduStatus: string,
) {
  return { number, name, workStatus, staduStatus }
}

const rows = [
  createData(1, "Владимир Белоголовцев", "Проходит ТЗ", "Проходит обучение"),
  createData(2, "Олег Петров", "Собеседование с HR", "Проходит обучение"),
  createData(
    3,
    "Виталий Кольцовский",
    "Собеседование с HR",
    "Проходит обучение",
  ),
]

const currencies = [
  {
    value: "Проходит ТЗ",
    label: "Проходит ТЗ",
  },
  {
    value: "Собеседование с HR",
    label: "Собеседование с HR",
  },
]

function CandidatInfoTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                width: "48px",
                height: "58px",
                padding: "0",
                textAlign: "center",
              }}
            >
              #
            </TableCell>
            <TableCell
              align="left"
              sx={{ width: "293px", height: "58px", padding: "0" }}
            >
              Кандидат
            </TableCell>
            <TableCell align="left">Статус трудоустройства</TableCell>
            <TableCell align="left">Учебный статус</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            // key={row.name}
            // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={AvatarIcon}
                  sx={{ marginRight: "10px" }}
                />
                {row.name}
              </TableCell>
              <TableCell align="left" sx={{ padding: "0", width: "283px" }}>
                <TextField
                  id="outlined-select-currency"
                  select
                  // label="Select"
                  // defaultValue="EUR"
                  // helperText="Please select your currency"
                  sx={{
                    width: "242px",
                    border: "none",
                    padding: "0",
                    "& .MuiFormControl-root": {
                      padding: "15px 32.5px 13px 14.65px",
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "10px 14.65px",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "20px",
                    },
                  }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </TableCell>
              <TableCell
                // align="space-between"
                sx={{
                  padding: "0",
                  width: "210px",
                  // justifyContent: "space-between",
                }}
              >
                {row.staduStatus}
                <IconButton aria-label="delete" sx={{ marginLeft: "10px" }}>
                  <img src={TrashIcon} alt="Иконка корзины" />
                </IconButton>
              </TableCell>
              {/* <TableCell align="left" sx={{ padding: "0" }}>

              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CandidatInfoTable
