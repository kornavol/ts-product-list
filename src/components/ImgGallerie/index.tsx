import { AnySrvRecord } from "dns";
import React, { FC, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import { GallerieStyles } from "./style";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { Grid } from "@mui/material";

import { ProductFilter } from "../../interfaces";

// import noPicture from "../../assets/pictures/no-img-layout.png";

const ImgGallerie: FC<any> = () => {
  const classes = GallerieStyles();
  const history = useHistory();
  const location: any = useLocation();
  const imagesArr: string[] = location.state.split(",");

  const images: JSX.Element[] = imagesArr.map((img: string) => (
    <Grid item xs={12} lg={6}>
      <img
        className={classes.img}
        src={img}
        alt="additinal product picture"
        key={img}
        loading="lazy"
      />
    </Grid>
  ));

  interface FilterParam {
    searchTerm: string;
    filter: any;
  }

  const filterParam: FilterParam = {
    searchTerm: "",
    filter: {},
  };

  useEffect(() => {
    const sessionSearchTerm: string | null =
      sessionStorage.getItem("searchTerm");
    if (sessionSearchTerm) {
      filterParam.searchTerm = sessionSearchTerm;
    }

    const sessionFilter: string | null = sessionStorage.getItem("filter");
    if (sessionFilter) {
      const obj: ProductFilter = JSON.parse(sessionFilter);
      filterParam.filter = obj;
    }
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Grid container className={classes.grid}>
          {images}
        </Grid>
        <HighlightOffIcon
          className={classes.close}
          color="secondary"
          sx={{ fontSize: 50 }}
          onClick={() => history.push("/", filterParam)}
        />
      </div>
    </>
  );
};

export default ImgGallerie;
