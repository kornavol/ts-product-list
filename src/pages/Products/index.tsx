import React, { FC, useState, useEffect } from "react";

import { Box } from "@mui/material";

import ItemList from "./itemList";
import BasicPagination from "../../components/Pagination"; // change a name to Pagination
import ProductBar from "../Products/ProductBar";

import { DSVRowArray } from "d3-dsv";
import csvConverter from "../../utilities/csvConverter";
import pagePaginator from "../../utilities/pagePaginator";

import { ProductFilter } from "../../interfaces";

const ProductList: FC = () => {
  const [items, setitems] = useState<any[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = React.useState<ProductFilter>({
    gender: "",
    price: "",
  });

  console.log(1, filter);

  useEffect(() => {
    csvConverter("products").then((data: DSVRowArray<string>) =>
      setitems(data)
    );
  }, []);

  // const list: any[] = items
  // .filter((item: any) => {
  //   if (searchTerm === "") {
  //     return item;
  //   } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //     return item;
  //   }
  // })
  // .filter((item:any) => {
  //   if (filter.gender === "") {
  //     return item;
  //   } else if (item.gender.includes(filter.gender)) {
  //     return item;
  //   }
  // })

  let list: any[] = items.filter((item: any) => {
    if (searchTerm === "") {
      return item;
    } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  });

  if (filter.gender !== "") {
    list = list.filter((item: any) => {
      if (item.gender.includes(filter.gender)) {
        return item;
      }
    });
  }

  const limit: number = 10; // default should be 100
  const totalPages: number = Math.round(list.length / limit);

  const currList = pagePaginator(limit, activePage, list);

  console.log(list);

  return (
    <Box
      maxWidth={"1480px"}
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <ProductBar
        data={list}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />
      {searchTerm && (
        <>
          <ItemList items={currList} />
          <BasicPagination
            totalPages={totalPages}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </>
      )}
    </Box>
  );
};

export default ProductList;
