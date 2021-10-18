import React, { FC, useState } from "react";

import {
  TextField,
  Stack,
  useMediaQuery,
  ListSubheader,
  Popper,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme, styled } from "@mui/material/styles";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";

import { VariableSizeList, ListChildComponentProps } from "react-window";

import { toArrwithUniqItems } from "../utilities/converters";

interface IProps {
  data: any[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const LISTBOX_PADDING = 8;

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING,
  };

  if (dataSet.hasOwnProperty("group")) {
    return (
      <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
        {dataSet.group}
      </ListSubheader>
    );
  }

  return (
    <Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
      {dataSet[1]}
    </Typography>
  );
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: any) {
  const ref = React.useRef<VariableSizeList>(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>(function ListboxComponent(props, ref) {
  const { children, ...other } = props;
  const itemData: React.ReactChild[] = [];
  (children as React.ReactChild[]).forEach(
    (item: React.ReactChild & { children?: React.ReactChild[] }) => {
      itemData.push(item);
      itemData.push(...(item.children || []));
    }
  );

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"), {
    noSsr: true,
  });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child: React.ReactChild) => {
    if (child.hasOwnProperty("group")) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: "border-box",
    "& ul": {
      padding: 0,
      margin: 0,
    },
  },
});

const BasicAutocomplete: FC<IProps> = ({ data, searchTerm, setSearchTerm }) => {
  const [inputValue, setInputValue] = useState<string>("");

  //   console.log("searchTerm: ", searchTerm);
  //   console.log("inputValue: ", inputValue);
  function groupBy(option: string): string {
    // console.log("option", option);
    const firstLetter: string = option[0].toUpperCase();
    const num = /[0-9]/.test(firstLetter);
    if (num) {
      return "0-9";
    } else {
      return firstLetter;
    }
  }

  /* remove doplicates and conver to array of strings */
  const products: any = toArrwithUniqItems(data);

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="Autocomplete-search"
        sx={{ width: 300 }}
        disableListWrap
        PopperComponent={StyledPopper}
        ListboxComponent={ListboxComponent}
        // options={optionConf(data)}
        options={products.sort()}
        groupBy={(option: string) => groupBy(option)}
        renderInput={(params) => <TextField {...params} label="Search..." />}
        renderOption={(props, option) => [props, option]}
        renderGroup={(params) => params}
        value={searchTerm}
        inputValue={inputValue}
        onInputChange={(event: any, value: string) => {
          //   console.log(3, event.code);
          //   console.log('OnIN', value);

          if (event?.code === "Enter") {
            setSearchTerm(inputValue);
          } else {
            setInputValue(value);
          }
        }}
        onChange={(event: React.SyntheticEvent, newValue: string | null) => {
          //   console.log(4, event);
          //   console.log("newValue", newValue);

          if (newValue) {
            setSearchTerm(newValue);
          } else {
            setSearchTerm(inputValue);
          }
        }}
      />
    </Stack>
  );
};

export default BasicAutocomplete;
