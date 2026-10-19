import React, { Component } from "react";
import serviceCoche from "../serviceCoche";
import { Navigate } from "react-router-dom";

export default class CochesCreate extends Component {
  service = new serviceCoche();

  cajaIdcoche = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  state = {
    mensaje: null,
    status: false,
    imagen: "",
  };

  cambiarImagen = () => {
    this.setState({
      imagen: this.cajaImagen.current.value,
    });
  };

  insertCoche = (event) => {
    event.preventDefault();

    let coche = {
      idCoche: parseInt(this.cajaIdcoche.current.value, 10),
      marca: this.cajaMarca.current.value,
      modelo: this.cajaModelo.current.value,
      conductor: this.cajaConductor.current.value,
      imagen: this.cajaImagen.current.value,
    };

    this.service
      .insertCoche(coche)
      .then((result) => {
        this.setState({
          status: true,
        });
      })
      .catch((error) => {
        this.setState({
          mensaje: error.message,
        });
      });
  };

  render() {
    if (this.state.status === true) {
      return <Navigate to="/" replace />;
    }

    let input =
      "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 " +
      "text-slate-900 outline-none transition " +
      "focus:border-amber-400 focus:ring-2 focus:ring-amber-200";

    let label = "block text-sm font-medium text-slate-700";

    return (
      <main className="mx-auto max-w-lg px-4 py-12">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
          <div className="flex aspect-video items-center justify-center bg-slate-100">
            {this.state.imagen ? (
              <img
                src={this.state.imagen}
                alt="Vista previa"
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-sm text-slate-400">
                Vista previa de la imagen
              </span>
            )}
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900">Nuevo coche</h1>

            {this.state.mensaje && (
              <p className="mt-3 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
                {this.state.mensaje}
              </p>
            )}

            <form onSubmit={this.insertCoche} className="mt-4 space-y-4">
              <div>
                <label className={label}>ID coche</label>
                <input
                  type="number"
                  required
                  className={input}
                  ref={this.cajaIdcoche}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={label}>Marca</label>
                  <input
                    type="text"
                    required
                    className={input}
                    ref={this.cajaMarca}
                  />
                </div>

                <div>
                  <label className={label}>Modelo</label>
                  <input
                    type="text"
                    required
                    className={input}
                    ref={this.cajaModelo}
                  />
                </div>
              </div>

              <div>
                <label className={label}>Conductor</label>
                <input
                  type="text"
                  required
                  className={input}
                  ref={this.cajaConductor}
                />
              </div>

              <div>
                <label className={label}>URL de la imagen</label>
                <input
                  type="url"
                  required
                  className={input}
                  ref={this.cajaImagen}
                  onChange={this.cambiarImagen}
                  placeholder="https://..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-amber-400 px-4 py-2.5 font-semibold text-slate-900 transition hover:bg-amber-300"
              >
                Insertar coche
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
