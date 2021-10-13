import React, {FC,  useState, useEffect} from 'react';

import { Box } from "@mui/material";

import ItemList from "./itemList";

import { DSVRowArray } from 'd3-dsv';
import csvConverter from '../../utilites/csvConverter'

const ProductList: FC = () => {
    const [list, setList] = useState<any[]>([])
    useEffect(() => {
        csvConverter('products').then((data: DSVRowArray<string>)=>setList(data))
      }, []);
    
    return (
      <Box
      maxWidth={"1480px"}
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <ItemList items={list}/>
      </Box>
    );
}

export default  ProductList;