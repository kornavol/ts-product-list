import React, { FC } from "react";

import {
  Stack,
  InputLabel,
  MenuItem,
  FormGroup,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import Autocomplete from "../../../components/Autocomplete";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FilterBarStyle } from "./style";

import { ProductFilter } from "../../../interfaces";

interface IProps {
  data: any[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  filter: ProductFilter;
  setFilter: React.Dispatch<React.SetStateAction<ProductFilter>>;
}

const ProductBar: FC<IProps> = (props) => {
  const classes = FilterBarStyle();
  const { data, searchTerm, setSearchTerm, filter, setFilter } = props;

  const SelectHandleChange = (event: SelectChangeEvent) => {
    const value: string = event.target.value;
    setFilter((prev: ProductFilter) => ({ ...prev, gender: value }));
  };

  const CheckboxHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: boolean = event.target.checked;
    setFilter((prev: ProductFilter) => ({ ...prev, onSale: value }));
  };

  return (
    <Stack spacing={2} direction="row" className={classes.stack}>
      <div>
        <Autocomplete
          data={data}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      {searchTerm && (
        <FormGroup row={true} className={classes.formGroup}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter.gender}
              label="Gender"
              onChange={SelectHandleChange}
            >
              {filter.gender !== "" && (
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
              )}
              <MenuItem value={"male"}>male</MenuItem>
              <MenuItem value={"female"}>female</MenuItem>
              <MenuItem value={"unisex"}>unisex</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            sx={{ margin: "auto" }}
            label="Sale"
            control={
              <Checkbox
                checked={filter.onSale}
                onChange={CheckboxHandleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
          />
        </FormGroup>
      )}
    </Stack>
  );
};

export default ProductBar;
