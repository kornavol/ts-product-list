import React, { FC } from "react";

import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import BasicAutocomplete from "../../../components/Autocomplete"; // change a name to Autocomlite

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

  const handleChange = (event: SelectChangeEvent) => {
    const value: string = event.target.value;
    setFilter((prev: ProductFilter) => ({ ...prev, gender: value }));
  };

  return (
    <Stack spacing={2} direction="row">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter.gender}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"male"}>male</MenuItem>
          <MenuItem value={"female"}>female</MenuItem>
          <MenuItem value={"unisex"}>unisex</MenuItem>
        </Select>
      </FormControl>

      <BasicAutocomplete
        data={data}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </Stack>
  );
};

export default ProductBar;
