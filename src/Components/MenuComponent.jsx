import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MenuComponent extends Component {
  render() {
    const estiloLink = ({ isActive }) =>
      "rounded-lg px-4 py-2 font-medium transition " +
      (isActive
        ? "bg-white text-slate-900"
        : "text-slate-200 hover:bg-slate-700 hover:text-white");

    return (
      <nav className="bg-slate-900 shadow-lg">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <NavLink
            to="/"
            className="text-2xl font-bold tracking-tight text-white"
          >
            Coches
          </NavLink>

          <div className="flex flex-wrap gap-3">
            <NavLink to="/" end className={estiloLink}>
              Listado
            </NavLink>

            <NavLink to="/create" className={estiloLink}>
              Añadir coche
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
