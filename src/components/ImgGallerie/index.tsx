import React, { FC, useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import { GallerieStyles } from "./style";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { Grid } from "@mui/material";

import { FilterParam, ProductFilter } from "../../interfaces";

const ImgGallerie: FC = () => {
  const classes = GallerieStyles();
  const history = useHistory();
  const location: any = useLocation();

  const [isLinkFailed, setIsLinkFailed] = useState<boolean>(false);

  const imagesArr: string[] = location.state.split(",");

  const images: JSX.Element[] = imagesArr.map((img: string) => (
    <Grid item xs={12} lg={6}>
      {isLinkFailed ? null : (
        <img
          src={img}
          className={classes.img}
          alt="additional picture of product"
          key={img}
          loading="lazy"
          onError={() => setIsLinkFailed(true)}
        />
      )}
    </Grid>
  ));

  const filterParam: FilterParam = {
    searchTerm: "",
    filter: { gender: "", onSale: false },
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
