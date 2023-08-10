import { makeStyles } from "@mui/styles";
import { tokens } from "../../../theme/theme";

export const useStyles = makeStyles(() => {
  //   const colors = tokens(theme);
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
    },
    block: {
      maxWidth: "650px",
      width: "calc(100% / 3)",
      margin: "auto",
      borderRadius: "5px",
      padding: "5px",
      boxShadow: "5px 5px 10px #000",
    },
  };
});
