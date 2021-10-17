import React, { FC } from "react";

import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import Autocomplete from "../../../components/Autocomplete";

import { ProductFilter } from "../../../interfaces";

interface IProps {
  data: any[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  filter: ProductFilter;
  setFilter: React.Dispatch<React.SetStateAction<ProductFilter>>;
}

const ProductBar: FC<IProps> = (props) => {
  const { data, searchTerm, setSearchTerm, filter, setFilter } = props;

  const SelectHandleChange = (event: SelectChangeEvent) => {
    const value: string = event.target.value;
    setFilter((prev: ProductFilter) => ({ ...prev, gender: value }));
  };

  const CheckboxHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: any = event.target.checked;
    setFilter((prev: ProductFilter) => ({ ...prev, onSale: value }));
  };

  return (
    <Stack spacing={2} 
    // direction="row"
    >
      <FormGroup row={true}> 
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sale</InputLabel>
          <Checkbox
            checked={filter.onSale}
            onChange={CheckboxHandleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter.gender}
            label="Age"
            onChange={SelectHandleChange}
          >
            <MenuItem value={"male"}>male</MenuItem>
            <MenuItem value={"female"}>female</MenuItem>
            <MenuItem value={"unisex"}>unisex</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>

      <Autocomplete
        data={data}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </Stack>
  );
};

export default ProductBar;