import { FC } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, AppBar, Box, IconButton, Toolbar } from "@mui/material"
import { Logotype } from "./Logotype/Logotype"
import GroupIcon from "../../ui-kit/icons/letter.svg"
import NotificationIcon from "../../ui-kit/icons/bell.svg"
import SearchIcon from "../../ui-kit/icons/search.svg"
import UserIcon from "../../ui-kit/icons/user.svg"

const styleSx = {
  appBar: {
    backgroundColor: "#1A1B22",
    width: "100%",
    minHeight: "60px",
    padding: "0 62px 0 82px",
  },
}

const Header: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <AppBar position="fixed" sx={styleSx.appBar}>
      <Toolbar>
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

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton sx={{ padding: "0", marginRight: "52px" }}>
            <img src={UserIcon} alt="Иконка пользователя" />
          </IconButton>

          <IconButton
            sx={{
              padding: "0",
              marginRight: "52px",
              width: "24px",
              height: "24px",
            }}
          >
            <img src={GroupIcon} alt="Иконка писем" />
          </IconButton>

          <IconButton sx={{ padding: "0", width: "24px", height: "24px" }}>
            <img src={NotificationIcon} alt="Иконка уведомлений" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
