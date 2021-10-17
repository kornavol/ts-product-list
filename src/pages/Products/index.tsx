import React, { FC, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";

import { Box } from "@mui/material";

import ItemList from "./itemList";
import Pagination from "../../components/Pagination"; // change a name to Pagination
import ProductBar from "../Products/ProductBar";

import { DSVRowArray } from "d3-dsv";
import csvConverter from "../../utilities/csvConverter";
import pagePaginator from "../../utilities/pagePaginator";

import { ProductFilter } from "../../interfaces";

const ProductList: FC = () => {
  const history = useHistory();
  const location: any = useLocation();

  const [items, setitems] = useState<any[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = React.useState<ProductFilter>({
    gender: "",
    onSale: false,
  });

  useEffect(() => {
    csvConverter("products").then((data: DSVRowArray<string>) =>
      setitems(data)
    );

    console.log(0, location);

    let sessionFilterParam: any = location.state;

    console.log(1, location.state);
    console.log(11, sessionFilterParam);

    window.onpopstate = (e: any) => {
      const sessionSearchTerm: string | null =
        sessionStorage.getItem("searchTerm");
      if (sessionSearchTerm) {
        setSearchTerm(sessionSearchTerm);
      }

      const sessionFilter: string | null = sessionStorage.getItem("filter");
      if (sessionFilter) {
        const obj: ProductFilter = JSON.parse(sessionFilter);
        setFilter(obj);
      }
    };

    if (sessionFilterParam) {
      if (sessionFilterParam?.searchTerm) {
        setSearchTerm(sessionFilterParam.searchTerm);
      }

      if (
        Object.keys(sessionFilterParam?.filter).length === 0 &&
        sessionFilterParam?.filter.constructor === Object
      ) {
        setFilter(sessionFilterParam.filter);
      }

      history.replace("/", "");
    }
    // if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    //   console.info( "This page is reloaded" );
    // }
  }, []);

  useEffect(() => {
    if (searchTerm) {
      sessionStorage.setItem("searchTerm", searchTerm);
    }
  }, [searchTerm]);

  useEffect(() => {
    sessionStorage.setItem("filter", JSON.stringify(filter));
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

  const limit: number = 100;
  const totalPages: number = Math.round(list.length / limit);

  const currList = pagePaginator(limit, activePage, list);
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
          <Pagination
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
