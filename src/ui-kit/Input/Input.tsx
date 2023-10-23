import { SxProps, TextField, TextFieldProps } from "@mui/material"
import styles from "./Input.module.scss"

const sxStyles: SxProps = {
  width: "100%",
  "& .MuiInputLabel-root": {
    transition: "none",
  },
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    height: "20px",
    padding: "10px 12px",
    // margin: "4px 0",
  },
  "& .MuiInputBase-input:disabled": {
    border: "1px solid #DDE0E4",
    borderRadius: "4px",
    backgroundColor: "#DDE0E4",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    color: "#FF0200",
    margin: 0,
  },
  "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
    {
      border: "1px solid #FF0200",
    },
}

type TInputProps = {
  customLabel?: string
}

const Input = (props: TextFieldProps & TInputProps) => {
  const { customLabel, sx, ...rest } = props

  return (
    <>
      {customLabel && <span className={styles.LabelСustom}>Custom</span>}
      <TextField sx={sxStyles} placeholder="Your Placeholder Here" {...rest} />
    </>
  )
}

export default Input
