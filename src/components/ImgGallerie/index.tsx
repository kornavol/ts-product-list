import { AnySrvRecord } from "dns";
import React, { FC, useEffect } from "react";
import { useLocation, useHistory  } from "react-router";
// import { ItemStyles } from "./style";

import { ProductFilter } from "../../interfaces";

// import noPicture from "../../assets/pictures/no-img-layout.png";

const ImgGallerie: FC<any> = () => {
  const history = useHistory();
  const location: any = useLocation();
  const imagesArr: string[] = location.state.split(",");

  const images: JSX.Element[] = imagesArr.map((img: string) => (
    <img src={img} alt="additinal product picture" key={img} loading="lazy" />
  ));

  interface FilterParam {
    searchTerm: string 
    filter: any
  }

  const filterParam:FilterParam = {
    searchTerm:"",
    filter:{}
  }

  useEffect(() => {

    const sessionSearchTerm: string | null =
      sessionStorage.getItem("searchTerm");
    if (sessionSearchTerm) {
      filterParam.searchTerm = sessionSearchTerm
    }

    const sessionFilter: string | null = sessionStorage.getItem("filter");
    if (sessionFilter) {
      const obj:ProductFilter = JSON.parse(sessionFilter)
      filterParam.filter = obj
    }

  }, []);

  return (
    <div>
      {images}
      <button onClick={() => history.push("/", filterParam )}>Back</button>
    </div>
  );
};

export default ImgGallerie;
