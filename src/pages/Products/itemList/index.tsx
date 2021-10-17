import React, { FC, useState } from "react";

import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { ItemsListStyles, ItemStyles } from "./style";
import noPicture from "../../../assets/pictures/no-img-layout.png";

import { useHistory } from "react-router-dom";

const Item: FC<any> = ({ item }) => {
  const history = useHistory();

  const classes = ItemStyles();
  const [image, setImage] = useState<string>(item.image_link);
  const ImgClickHandler = () => {
    if (item.additional_image_link) {
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
        <p>{item.title}</p>
        <img
          src={image}
          alt="image"
          className={classes.img}
          onError={() => setImage(noPicture)}
          onClick={ImgClickHandler}
          // loading="lazy"
        />
        <p>{`Price: ${item.price}`}</p>
        <p>{`Price2: ${item.sale_price}`}</p>
      </motion.div>
    </Grid>
  );
};

interface IProps {
  items: any[];
}

const ItemList: FC<any> = ({items}) => {
  const classes = ItemsListStyles();
  const list: JSX.Element[] = items.map((item: any) => (
    <Item key={item.gtin} item={item} />
  ));

  return (
    <Grid container spacing={1}>
      {items.length > 0 ? list : <p>test1</p>}
    </Grid>
  );
};

export default ItemList;
