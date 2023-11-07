import { FC } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, AppBar, Box, Toolbar } from "@mui/material"
import { Logotype } from "./Logotype/Logotype"
import { ToolPanel } from "./ToolPanel/ToolPanel"
import SearchIcon from "../../ui-kit/icons/search.svg"

const styleSx = {
  appBar: {
    backgroundColor: "#1A1B22",
    width: "100%",
    minHeight: "60px",
    padding: "0px 68px 0 48px",
  },
  ToolBar: {
    "& .MuiToolbar-root": { padding: 0 },
  },
}

const Header: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <AppBar position="fixed" sx={styleSx.appBar}>
      <Toolbar sx={styleSx.ToolBar}>
        <Logotype onClick={() => navigate("/")} />

        {pathname !== "/search" && (
          <Button
            onClick={() => navigate("/search")}
            variant="text"
            sx={{ color: "#FFF" }}
          >
            <img src={SearchIcon} alt="Иконка поиска" />
            Поиск кандидатов
          </Button>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <ToolPanel />
      </Toolbar>
    </AppBar>
  )
}

export default Header
