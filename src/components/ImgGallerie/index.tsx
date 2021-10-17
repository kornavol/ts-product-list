import React, { FC } from "react";
import { useLocation, useHistory } from "react-router";
// import { ItemStyles } from "./style";

// import noPicture from "../../assets/pictures/no-img-layout.png";

const ImgGallerie: FC<any> = () => {
  const history = useHistory();
  const location: any = useLocation();

  const imagesArr: string[] = location.state.split(",");

  const images: JSX.Element[] = imagesArr.map((img: string) => (
    <img src={img} alt="additinal picture" key={img} loading="lazy" />
  ));

  return (
    <div>
      {images}
      <button onClick={() => history.push("/")}>Back</button>
    </div>
  );
};

export default ImgGallerie;
