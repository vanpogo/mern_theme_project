import { makeStyles, styled } from "@mui/styles";
import { tokens } from "../../theme/theme";
import { Box, ListItem } from "@mui/material";
import LOGO from "../../assets/images/logo.png";

export const useStyles = makeStyles((theme) => {
  const colors = tokens(theme);
  return {
    rootDrawer: {
      width: "250px",
      "& 	.MuiDrawer-paper": {
        color: colors.secondary.DEFAULT,
        background: theme.palette.primary.main,
        boxSizing: "border-box",
        width: "250px",
      },
    },
    navHeader: {
      padding: "40px 16px 0 15px",
      display: "flex",
      alignItems: "center",
    },
    logoImg: {
      backgroundImage: `url(${LOGO})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: "60px",
      height: "60px",
      backgroundPosition: "center",
      cursor: "pointer",
    },
    logoText: {
      fontSize: "28px",
      color:
        theme.palette.mode === "dark"
          ? colors.white.DEFAULT
          : colors.black.DEFAULT,
      fontWeight: "500",
    },
    link: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyItems: "center",
      textDecoration: "none",
    },
    active: {
      background: colors.blue,
      color: "white",
    },
    sidebar_footer: {
      display: "flex",
      marginTop: "10px",
      cursor: "pointer",
      border: `1px  ${colors.secondary}`,
      "&:hover": {
        background: colors.secondary,
      },
      listStyleType: "none",
    },
    navItem: {
      "&:hover": {
        background: colors.blue,
        color: "white",
      },
      borderRadius: "4px",
    },
  };
});

export const BoxMenuItem = styled(ListItem)({
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  cursor: "pointer",
  listStyleType: "none",
  fontSize: "16px",
  fontWeight: "500",
  fontFamily: "Poppins",
  width: "100%",
  marginTop: "10px",
});
