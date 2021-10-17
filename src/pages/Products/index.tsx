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
  const [searchTerm, setSearchTerm] = useState<string>("Zalando");
  const [filter, setFilter] = React.useState<ProductFilter>({
    gender: "",
    onSale: false,
  });

  console.log(1, filter);

  useEffect(() => {
    console.log('from USeEffect');
    
    csvConverter("products").then((data: DSVRowArray<string>) =>
      setitems(data)
    );

    const sessionSearchTerm:string | null  = sessionStorage.getItem('searchTerm')
    if (sessionSearchTerm) {
      setSearchTerm(sessionSearchTerm)
    }

    const sessionFilter:ProductFilter  = JSON.parse(sessionStorage.getItem('filter') || `{ gender: "", onSale: false}`)
    if (sessionFilter) {
      setFilter(sessionFilter)
    }



  }, []);

  useEffect(() => {
      sessionStorage.setItem('searchTerm', searchTerm)
  }, [searchTerm]);

  useEffect(() => {
    sessionStorage.setItem('filter', JSON.stringify(filter))
}, [filter]);

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

  if (filter.onSale) {
    list = list.filter((item: any) => {
      if (item?.sale_price < item?.price) {
        return item;
      }
    });
  }

  const limit: number = 10; // default should be 100
  const totalPages: number = Math.round(list.length / limit);

  const currList = pagePaginator(limit, activePage, list);
  
  localStorage.setItem('currList', JSON.stringify(currList));

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
          <ItemList 
          // items={currList}
           />
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
