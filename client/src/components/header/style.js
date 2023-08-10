import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme/theme";

export const useStyles = makeStyles((theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      background: colors.primary.DEFAULT,
      boxShadow: "none",
      borderBottom: `1px solid ${colors.white[200]}`,
      padding: "20px 32px 20px 32px",
    },
  };
});
