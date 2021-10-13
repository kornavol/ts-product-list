import { makeStyles, Theme } from "@material-ui/core/styles";
import { styled, alpha } from "@mui/material/styles";

export const ItemsListStyles = makeStyles((theme: Theme) => ({
  root: {},
  skeleton: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    margin: "1vw",
    overflow: "hidden",
  },
  skeletonImg: {
    boxSizing: "content-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

export const ItemStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "1vw",
    boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.3)",
  },
  img: {
    boxSizing: "border-box",
    width: "100%",
  },
}));
