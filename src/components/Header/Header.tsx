import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "../../ui-kit/icons/search.svg"
import NotificationIcon from "../../ui-kit/icons/bell.svg"
import UserIcon from "../../ui-kit/icons/user.svg"
import GroupIcon from "../../ui-kit/icons/letter.svg"
import Logo from "../../ui-kit/icons/career-logo-1b10b20f 1.svg"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
}))

function Header() {
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1, Width: "100%" }}>
      <AppBar position="static" sx={{ backgroundColor: "#1A1B22" }}>
        <Toolbar>
          <img
            src={Logo}
            alt="Логотип"
            style={{ margin: "10px 148px 10px 83px" }}
          />
          <Search onClick={() => navigate("/search")}>
            <SearchIconWrapper>
              <img src={SearchIcon} alt="Иконка поиска" />
            </SearchIconWrapper>
            {/* Сам инпут */}
            <StyledInputBase
              placeholder="Поиск по названию вакансии"
              sx={{
                width: "507px",
                height: "40px",
              }}
            /> */}
          </Search>
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
