import { useLocation, useNavigate } from "react-router-dom"
import { Button, AppBar, Box, IconButton, Toolbar } from "@mui/material"
import GroupIcon from "../../ui-kit/icons/letter.svg"
import Logo from "../../ui-kit/icons/career-logo-1b10b20f 1.svg"
import NotificationIcon from "../../ui-kit/icons/bell.svg"
import SearchIcon from "../../ui-kit/icons/search.svg"
import UserIcon from "../../ui-kit/icons/user.svg"

import styles from "./Header.module.scss"

function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <Box sx={{ flexGrow: 1, Width: "100%" }}>
      <AppBar position="static" sx={{ backgroundColor: "#1A1B22" }}>
        <Toolbar>
          <img
            onClick={() => navigate("/")}
            src={Logo}
            alt="Логотип"
            className={styles.img}
            style={{
              margin: "10px 148px 10px 83px",
            }}
          />
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
    </Box>
  )
}

export default Header
