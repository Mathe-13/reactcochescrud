import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import MenuComponent from "./MenuComponent";
import CochesList from "./CochesList";
import CochesCreate from "./CochesCreate";
import CochesUpdate from "./CochesUpdate";
import CocheDetails from "./CocheDetails";

// COMPONENTE PARA DETALLES
function DetallesCocheElement() {
  let { id } = useParams();

  return <CocheDetails id={id} />;
}

// COMPONENTE PARA EDITAR
function UpdateCocheElement() {
  let { id } = useParams();

  return <CochesUpdate id={id} />;
}

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuComponent />
        <Routes>
          <Route path="/" element={<CochesList />} />
          <Route path="/details/:id" element={<DetallesCocheElement />} />
          <Route path="/create" element={<CochesCreate />} />
          <Route path="/edit/:id" element={<UpdateCocheElement />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
