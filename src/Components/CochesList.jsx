import React, { Component } from "react";
import serviceCoche from "../serviceCoche";
import { NavLink } from "react-router-dom";

export default class CochesList extends Component {
  state = {
    coches: [],
    status: false,
    mensaje: null,
  };

  service = new serviceCoche();

  cargarCoches = () => {
    this.service
      .getCoche()
      .then((result) => {
        console.log("COCHES RECIBIDOS:", result);

        this.setState({
          coches: result,
          status: true,
        });
      })
      .catch((error) => {
        console.log(error);

        this.setState({
          mensaje: "Error al cargar los coches",
        });
      });
  };

  componentDidMount() {
    this.cargarCoches();
  }

  eliminarCoche = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este coche?")) {
      this.service
        .deleteCoche(id)
        .then(() => {
          this.cargarCoches();
        })
        .catch((error) => {
          console.log(error);
          alert("Error al eliminar el coche");
        });
    }
  };

  render() {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">
          Lista de coches
        </h1>

        {this.state.mensaje && (
          <h2 className="mb-4 text-red-600">{this.state.mensaje}</h2>
        )}

        {this.state.status === false && !this.state.mensaje && (
          <h2>Cargando coches...</h2>
        )}

        {this.state.status === true && (
          <div className="overflow-x-auto rounded-xl bg-white shadow-lg">
            <table className="w-full border-collapse text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Marca</th>
                  <th className="p-4">Modelo</th>
                  <th className="p-4">Conductor</th>
                  <th className="p-4">Imagen</th>
                  <th className="p-4">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {this.state.coches.map((coche) => {
                  return (
                    <tr
                      key={coche.idCoche} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="p-4">{coche.idCoche}</td>
                      <td className="p-4">{coche.marca}</td>
                      <td className="p-4">{coche.modelo}</td>
                      <td className="p-4">{coche.conductor}</td>
                      <td className="p-4">
                        <img src={coche.imagen} alt={coche.modelo} className="h-20 w-32 rounded-lg object-cover" />
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-2">
                          <NavLink
                            to={"/details/" + coche.idCoche} className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">
                            Detalles
                          </NavLink>
                          <NavLink
                            to={"/edit/" + coche.idCoche} className="rounded-lg bg-amber-500 px-3 py-2 text-white hover:bg-amber-600">
                            Editar
                          </NavLink>
                          <button type="button" onClick={() => this.eliminarCoche(coche.idCoche)} className="rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700"
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  }
}
