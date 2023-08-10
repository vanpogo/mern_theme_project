import {
  AppBar,
  Box,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import {
  DarkMode,
  LightMode,
  NotificationsNone,
  Search,
  Menu,
} from "@mui/icons-material";
import { ColorModeContext, tokens } from "../../theme/theme.js";
import { useTheme } from "@emotion/react";
import { useStyles } from "./style.js";

function Header(props) {
  const { setIsOpen, isOpen } = props;
  const { user } = useSelector((state) => state.auth);

  const widthQuery = useMediaQuery("(min-width:950px)");

  const theme = useTheme();
  const currentTheme = theme.palette.mode;
  const colors = tokens(theme.palette.mode);

  const colorContext = useContext(ColorModeContext);

  const classes = useStyles();
  return (
    <AppBar sx={{ boxShadow: "none" }} position="static">
      <Toolbar className={classes.toolbar}>
        <Box display={"flex"} alignItems={"center"}>
          {(!widthQuery || !isOpen) && (
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <Menu />
            </IconButton>
          )}
          <Grid marginLeft={"20px"}>
            Welcome {user?.firstName ? user?.firstName : ""}
          </Grid>
        </Box>

        <Box display={"flex"} gap={"10px"}>
          <Grid onClick={colorContext.toggleColorMode}>
            <IconButton>
              {currentTheme === "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Grid>
          <Grid>
            <IconButton>
              <NotificationsNone />
            </IconButton>
          </Grid>
          <Grid
            sx={{
              background: colors.primary[600],
              width: "400px",
              border: `1px ${colors.white[200]} solid`,
              borderRadius: "5px",
            }}
          >
            <IconButton className={classes.root}>
              <Search></Search>
            </IconButton>
            <InputBase placeholder="Поиск"></InputBase>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
