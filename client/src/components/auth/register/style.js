import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
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
    btn: {
      "&.MuiButton-root": {
        marginTop: "20px",
        width: "100%",
        padding: "12px",
      },
    },
    text: {
      "&.MuiTypography-h4": {
        fontSize: "12px",
        marginTop: "20px",
        textTransform: "capitalize",
      },
    },
    link: {
      "margin-left": "5px",
      "text-decoration": "none",
      color: "#1900D5",
    },
  };
});
