import React, {FC} from 'react';
import Pagination from '@mui/material/Pagination';


interface IProps {
    totalPages:number
    activePage:number,
    setActivePage: React.Dispatch<React.SetStateAction<number>>
}


const BasicPagination: FC<IProps> = ({totalPages, activePage, setActivePage} ) => {

    return (
        <>
              <Pagination
                variant="outlined"
                color="primary"
                count={totalPages}
                page={activePage}
                onChange={(e, value:number) => {
                    setActivePage(value)
                }}
            />
        </>
    );
  };
  
  export default BasicPagination;