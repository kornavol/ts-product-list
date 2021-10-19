import React, { FC, useState } from "react";

import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { ItemStyles } from "./style";
import noPicture from "../../../assets/pictures/no-img-layout.png";

import { useHistory } from "react-router-dom";

const Item: FC<any> = ({ item }) => {
  const classes = ItemStyles();

  const history = useHistory();

  const [image, setImage] = useState<string>(item.image_link);

  const ImgClickHandler = () => {
    if (item.additional_image_link && item.additional_image_link.length > 0) {
      history.push(`/item/${item.gtin}`, item.additional_image_link);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <motion.div
        className={classes.root}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={classes.title}>{item.title}</div>
        <img
          src={image}
          alt="product-image"
          className={classes.img}
          onError={() => setImage(noPicture)}
          onClick={ImgClickHandler}
          loading="lazy"
        />
        <div className={classes.price}>
          <div>{item.price}</div>
          {item.sale_price < item.price ? (
            <div className={classes.sale}>
              <div style={{ marginRight: "5px", fontWeight: "bold" }}>
                SALE:
              </div>
              <span>{item.sale_price}</span>
            </div>
          ) : null}
        </div>
      </motion.div>
    </Grid>
  );
};

interface IProps {
  items: any[];
}

const ItemList: FC<IProps> = ({ items }) => {
  interface Item {
    [key: string]: string;
  }

  const list: JSX.Element[] = items.map((item: Item) => (
    <Item key={item.gtin} item={item} />
  ));

  return (
    <Grid container spacing={1}>
      {items.length > 0 ? list : null}
    </Grid>
  );
};

export default ItemList;
