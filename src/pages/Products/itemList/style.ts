import { makeStyles, Theme } from "@material-ui/core/styles";

export const ItemStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "1vw",
    textAlign: "center",
    boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.3)",
  },
  img: {
    boxSizing: "border-box",
    width: "100%",
  },
  title: {
    padding: "5px",
  },
  price: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "15px",
    width: "100%",
  },
  sale: {
    display: "flex",
    flexDirection: "row",
    "& $span": {
      color: "red",
    },
  },
}));
