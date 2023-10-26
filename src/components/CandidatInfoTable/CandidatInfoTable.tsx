import {
  Avatar,
  Button,
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
    // label: "$",
  },
  {
    value: "Собеседование с HR",
    // label: "€",
  },
]

function CandidatInfoTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
            // sx={{
            //   fontSize: "14px",
            //   fontStyle: "normal",
            //   fontWeight: "500",
            //   lineHeight: "20px",
            //   color: "#1A1B22",
            // }}
            >
              #
            </TableCell>
            <TableCell align="left">Кандидат</TableCell>
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
              <TableCell align="left">
                {/* {row.workStatus} */}
                <TextField
                  id="outlined-select-currency"
                  select
                  // label="Select"
                  // defaultValue="EUR"
                  // helperText="Please select your currency"
                  sx={{
                    width: "242px",
                    height: "48px",
                    border: "none",
                    // padding: "9px 14px",
                  }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {/* {option.label} */}
                    </MenuItem>
                  ))}
                </TextField>
              </TableCell>
              <TableCell align="left">{row.staduStatus}</TableCell>
              {/* <TableCell align="right">{row.staduStatus}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CandidatInfoTable
