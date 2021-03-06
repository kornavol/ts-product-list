import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import ProductList from "./pages/Products";
import Gallerie from './components/ImgGallerie'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/item/:id" children={<Gallerie />} />
      </Switch>
    </>
  );
}

export default App;
