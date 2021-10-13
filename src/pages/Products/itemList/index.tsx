import React, { FC } from "react";

import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { ItemsListStyles, ItemStyles } from "./style";

const Item: FC<any> = ({ item }) => {
  const classes = ItemStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <motion.div
        className={classes.root}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>{item.title}</p>
        <img src={item.image_link} alt="image" className={classes.img} />
        <p>{`Price: ${item.price}`}</p>
        <p>{`Price2: ${item.sale_price}`}</p>
      </motion.div>
    </Grid>
  );
};

interface IProps {
  items: any[];
}

const ItemList: FC<IProps> = ({ items }) => {
  const classes = ItemsListStyles();

  let searchTerm: string = "Slip black";

  const list: JSX.Element[] = items
    .filter((item: any) => {
      if (searchTerm === "") {
        return item;
      } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      }
    })
    .map((item: any) => <Item key={item.gtin} item={item} />);

  return (
    <Grid container spacing={1}>
      {items.length > 0 ? list.length > 0 ? list : <p>test1</p> : <p>test2</p>}
    </Grid>
  );
};

export default ItemList;