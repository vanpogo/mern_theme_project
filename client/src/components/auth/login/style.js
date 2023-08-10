import { makeStyles } from "@mui/styles";
import { tokens } from "../../../theme/theme";
import { inputLabelClasses } from "@mui/material/InputLabel";

export const useStyles = makeStyles((theme) => {
  const colors = tokens(theme);
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "20px",
    },
    title: {
      "&.MuiTypography-h4": {
        fontSize: "3vw",
        fontFamily: "Poppins",
      },
    },
    textfield: {
      "&.MuiTextField-root": {
        color: "red",
      },
    },
    text: {
      "&.MuiTypography-h4": {
        fontSize: "12px",
        marginTop: "20px",
        textTransform: "capitalize",
      },
    },
    btn: {
      "&.MuiButton-root": {
        marginTop: "20px",
        width: "100%",
        padding: "12px",
      },
    },
    link: {
      "margin-left": "5px",
      "text-decoration": "none",
      color: "#1900D5",
    },
  };
});
