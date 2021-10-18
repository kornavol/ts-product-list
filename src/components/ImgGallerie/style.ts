import { makeStyles, Theme } from "@material-ui/core/styles";

export const GallerieStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection:'column',
    alignItems: "center",
    margin: "1vw",
  },
  grid:{
    width:'1562px',
    justifyContent: 'flex-start',
  },
  img:{
    boxSizing: "border-box",
    width:'100%',
  },
  close:{
    position:'fixed',
    right:'15px',
    opacity:0.5,
    "&:hover": {
      opacity:1,
    },
    
  }
}));
