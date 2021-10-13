import React, { FC, useState, useEffect } from "react";

import { Box } from "@mui/material";

import ItemList from "./itemList";
import BasicPagination from "../../components/BasicPagination"; // change a name to Pagination

import { DSVRowArray } from "d3-dsv";
import csvConverter from "../../utilities/csvConverter";
import pagePaginator from '../../utilities/pagePaginator'

const ProductList: FC = () => {
  const [items, setitems] = useState<any[]>([]);
  const [activePage, setActivePage] = useState<number>(1);

  useEffect(() => {
    csvConverter("products").then((data: DSVRowArray<string>) =>
      setitems(data)
    );
  }, []);

  let searchTerm: string = "Zalando";

  const list: any[] = items.filter((item: any) => {
    if (searchTerm === "") {
      return item;
    } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  });

  const limit:number = 10 // default should be 100
  const totalPages: number = Math.round(list.length / limit); 

  const currList = pagePaginator(limit, activePage, list)
  
  return (
    <Box
      maxWidth={"1480px"}
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <ItemList items={currList} />
      <BasicPagination
        totalPages={totalPages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </Box>
  );
};

export default ProductList;
