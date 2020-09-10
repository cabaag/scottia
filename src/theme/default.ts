import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import { createMuiTheme } from "@material-ui/core/styles";

const DefaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default DefaultTheme;
