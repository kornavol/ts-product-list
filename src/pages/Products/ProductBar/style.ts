import { makeStyles, Theme } from "@material-ui/core/styles";

export const FilterBarStyle = makeStyles((theme: Theme) => ({
  root: {
    margin: "auto",
  },
  stack: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    margin: "25px 0px",
  },
  formGroup: {
    flexWrap: "nowrap",
    width: "300px",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px !important",
      marginLeft: "0px !important",
    },
  },
}));
