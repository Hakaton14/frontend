import { SxProps, TextField, TextFieldProps } from "@mui/material"
import styles from "./Input.module.scss"
import { forwardRef } from "react"

const sxStyles: SxProps = {
  width: "100%",
  "& .MuiInputLabel-root": {
    transition: "none",
  },
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    height: "20px",
    padding: "10px 12px",
    // margin: "4px 0",
    background: "#FFFFFF",
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

export type TInputProps = {
  customLabel?: string
  register?: any
  registerName?: string
}

<<<<<<< HEAD
const Input = (props: TextFieldProps & TInputProps) => {
  const { customLabel, register, registerName, sx, ...rest } = props
=======
const Input = forwardRef((props: TextFieldProps & TInputProps, ref) => {
  const { customLabel, sx, ...rest } = props
>>>>>>> 81be05b6164195e5b12d63adc615902aecb26504

  return (
    <>
      {customLabel && <span className={styles.LabelСustom}>Custom</span>}
      <TextField {...register(`${registerName}`)} sx={sxStyles} {...rest} />
    </>
  )
})
export default Input
