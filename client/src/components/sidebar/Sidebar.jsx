import React from "react";
import { BoxMenuItem, useStyles } from "./styles";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme/theme";
import FlexBetween from "../flex-between/FlexBetween";
import {
  Home,
  Logout,
  AccountBoxOutlined,
  KeyboardDoubleArrowLeft,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/slices/auth/authSlice";

function Sidebar(props) {
  const dispatch = useDispatch();
  const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;

  const menu = [
    "Dashboard",
    "Analytics",
    "Products",
    "Orders",
    "Enquiry",
    "Marketing",
    "Settings",
  ];
  //THEME
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const classes = useStyles(theme.palette.mode);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      {isOpen && (
        <Drawer
          anchor="left"
          open={true}
          onClose={() => setIsOpen(false)}
          variant="persistent"
          className={classes.rootDrawer}
        >
          <FlexBetween>
            <Box className={classes.navHeader}>
              <Box
                onClick={() => navigate("/")}
                component={"div"}
                className={classes.logoImg}
              />
              <Typography variant="h3" className={classes.logoText}>
                Demo
              </Typography>
              <IconButton
                sx={{ marginLeft: "15px" }}
                onClick={() => setIsOpen(!isOpen)}
              >
                <KeyboardDoubleArrowLeft />
              </IconButton>
            </Box>
            <Box sx={{ padding: "20px 16px 0 15px" }} marginTop={"45px"}>
              <List>
                {menu.map((name, index) => (
                  <BoxMenuItem
                    key={index}
                    onClick={() => navigate(`/${name.toLowerCase()}`)}
                    className={`${classes.navItem} ${
                      pathname === `/${name.toLowerCase()}`
                        ? classes.active
                        : ""
                    }`}
                  >
                    <Typography>{name}</Typography>
                  </BoxMenuItem>
                ))}
              </List>
            </Box>
            <Divider
              component={"div"}
              sx={{ marginTop: "30px", background: colors.secondary.DEFAULT }}
            />
            <Box sx={{ padding: "20px 16px 0 15px" }}>
              <List>
                <ListItem className={classes.sidebar_footer}>
                  <AccountBoxOutlined />
                  <Typography marginLeft={"10px"}>User</Typography>
                </ListItem>
                <ListItem
                  onClick={() => {
                    dispatch(logOut());
                    window.localStorage.removeItem("token");
                    navigate("/login");
                  }}
                  className={classes.sidebar_footer}
                >
                  <Logout />
                  <Typography marginLeft={"10px"}>Logout</Typography>
                </ListItem>
              </List>
            </Box>
          </FlexBetween>
        </Drawer>
      )}
    </>
  );
}

export default Sidebar;
