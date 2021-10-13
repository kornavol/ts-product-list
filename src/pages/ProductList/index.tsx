import React, {FC,  useState, useEffect} from 'react';
import { DSVRowArray } from 'd3-dsv';
import csvConverter from '../../utilites/csvConverter'

const ProductList: FC = () => {
    const [list, setList] = useState<any[]>([])
    console.log(list);
    
    useEffect(() => {
        csvConverter('products').then((data: DSVRowArray<string>)=>setList(data))
      }, []);
    
    return (
        <div>
            
        </div>
    );
}

export default  ProductList;