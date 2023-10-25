import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { App } from "@Components"
import { ThemeProvider } from "@mui/material"
import { ThemeOptions, createTheme } from "@mui/material/styles"
import "./index.css"

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#5A9BFF",
      dark: "#1D6BF3",
      light: "#F1F6FF",
    },
    secondary: {
      main: "#f50057",
    },
    success: {
      main: "#2e7d32",
    },
    text: {
      primary: "#1A1B22",
      secondary: "#1D6BF3",
      disabled: "#B5B5B7",
    },
    error: {
      main: "#FF0200",
    },
    info: {
      main: "#1D6BF3",
      light: "#5A9BFF",
    },
  },
  typography: {
    fontFamily: "YS Display",
  },
}
const theme = createTheme(themeOptions)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
