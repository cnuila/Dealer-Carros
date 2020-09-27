import React from "react";
import Carro from "./Carro";
import Estado from "./Estado";
import Filtros from "./Filtros";
import InfoCarro from "./InfoCarro";
import { db } from "../firebase"
import { Link } from 'react-router-dom';
import Modal from 'react-modal'

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estados: [
        { estado: "Disponible", selected: true, color: "text-green-500" },
        { estado: "Repo", selected: false, color: "text-red-600" },
        { estado: "Apartado", selected: false, color: "text-blue-600" },
        { estado: "Vendido", selected: false, color: "text-yellow-400" },
      ],
      carros: [],
      mostrarFiltros: false,
      mostrarInfo: false,
      carroMostrar:{},
    };
    this.clicEstadoCarro = this.clicEstadoCarro.bind(this)
    this.mostrarConsulta = this.mostrarConsulta.bind(this)
    this.clickMostraInfo = this.clickMostraInfo.bind(this)
  }

  componentDidMount() {
    this.getCarros()
  }

  mostrarConsulta = async (query) => {
    query.onSnapshot((querySnapshot) => {
      const rCarros = []
      querySnapshot.forEach((doc) => {
        rCarros.push({ ...doc.data(), id: doc.id })
      });
      this.setState({
        carros: rCarros,
      })
    })
  }

  getCarros = async () => {
    let query = db.collection("carros").orderBy("marca")
    this.mostrarConsulta(query)
    console.log("me ejecuto")
  }

  estadoSeleccionado = () => {
    let { estados } = this.state
    let seleccionado = estados.filter(estado => estado.selected === true)
    return seleccionado[0].estado
  }

  //elegir el estado segun el boton
  clicEstadoCarro(estadoEnviado) {
    let { estados } = this.state;
    let temp = [...estados]

    temp.forEach(est => {
      est.selected = false;
      if (est.estado === estadoEnviado) {
        est.selected = true;
      }
    })
    this.setState({
      estados: temp,
    })
  }

  clicMostrarFiltro = () => {
    this.setState({
      mostrarFiltros: !this.state.mostrarFiltros
    })
  }

  clickMostraInfo = (vin) => {
    let carro = this.state.carros.filter(carro => carro.id === vin);    
    this.setState({
      mostrarInfo: !this.state.mostrarInfo,
      carroMostrar: carro[0],
    })    
  }

  render() {
    console.log(this.state.mostrarInfo,this.state.carroAmostrar)
    let botonesEstados; 
    let { estados, carros, carroMostrar } = this.state;
    botonesEstados = estados.map((boton) => {
      return (
        <>
          <Estado key={boton.estado} estado={boton.estado} selected={boton.selected} color={boton.color} clicEstadoCarro={this.clicEstadoCarro} />
        </>
      );
    });

    let translateCarros
    let textoFiltro
    if (this.state.mostrarFiltros) {
      translateCarros = "0 sm:-translate-y-0"
      textoFiltro = "Esconder"
    } else {
      translateCarros = "72 sm:-translate-y-56"
      textoFiltro = "Mostrar"
    }

    let estadoActual = this.estadoSeleccionado()
    let carrosMostrar = carros.filter(carro => carro.estado === estadoActual)
    if (carrosMostrar.length === 0) {
      carrosMostrar = (<div>No hay carros</div>)
    } else {
      carrosMostrar = carrosMostrar.map(carro => {
        return (<Carro info={carro} mostrarInfo={this.clickMostraInfo}/>)
      })
    }

    return (

      <div className="bg-gray-100">
        {/*Inicio del navbar*/}
        <nav className="justify-center flex items-center justify-between flex-wrap bg-gray-900 p-3">
          <div className="flex items-center ml-2 mb-3 lg:ml-0 lg:mb-0 flex-shrink-0 text-white mr-6">
            <span className="font-bold text-4xl tracking-tight pl-10">
              Santos Motors
            </span>
          </div>
          <div className="flex items-center">
            <Link to="/agregar-carro">
              <button className="ml-8 focus:outline-none bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold py-1 px-4 rounded inline-flex items-center">
                <svg className="w-8 h-8 mr-3 fill-current text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.001 488.001">
                  <path
                    className="active-path"
                    d="M462.6 214.404l-39.2-17.9-34.6-55.2c-10-16-27.6-25.7-46.5-25.6H194.9c-17.1 0-33.3 7.9-43.7 21.5l-44.7 58.5-74.5 20.4c-18.9 5.2-32 22.5-32 42.1v28.5c0 24.1 19.2 44 43.3 44h6.4c7.7 29.7 38 47.5 67.7 39.8 19.5-5.1 34.8-20.3 39.8-39.8h168c7.7 29.7 38 47.5 67.7 39.8 19.5-5.1 34.8-20.3 39.8-39.8h12c24.1 0 43.3-19.9 43.3-44v-32.5c.1-17.1-9.9-32.7-25.4-39.8zm-359.2 137.7c-19.6 0-35.5-15.9-35.5-35.5s15.9-35.5 35.5-35.5 35.5 15.9 35.5 35.5c.1 19.5-15.8 35.4-35.5 35.5zm275.5 0c-19.6 0-35.5-15.9-35.5-35.5s15.9-35.5 35.5-35.5 35.5 15.9 35.5 35.5c.1 19.5-15.8 35.4-35.5 35.5zm65.8-41.4h-10.6c-3.3-30.5-30.8-52.5-61.3-49.1-25.9 2.8-46.3 23.3-49.1 49.1H158.6c-3.3-30.5-30.8-52.5-61.3-49.1-25.9 2.8-46.3 23.3-49.1 49.1h-5c-13.1 0-23.3-10.9-23.3-24v-28.5c-.1-10.7 7-20 17.3-22.9l77.9-21.3c2.1-.6 4-1.8 5.3-3.6l46.6-61.1c6.7-8.6 17-13.6 27.9-13.6h147.4c12-.1 23.3 6 29.6 16.2l36.2 57.8c1 1.7 2.6 3 4.3 3.8l41.8 19.1c8.4 3.9 13.8 12.3 13.7 21.6v32.5h.1c0 13.1-10.2 24-23.3 24z"
                    data-original="#000000" data-old_color="#000000" />
                </svg>
                <span>Agregar</span>
              </button>
            </Link>
            <Link to="/login">
              <button className="focus:outline-none bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="w-6 h-6 mr-2 fill-current text-gay-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M19 10l-6-5v3H6v4h7v3l6-5zM3 3h8V1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H3V3z" />
                </svg>
                <span>Log out</span>
              </button>
            </Link>
          </div>
        </nav>
        {/*fin del navbar*/}
        <div>

          {/*Botones Estado y filtro*/}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-7 place-items-center m-4 sm:m-6">
              {botonesEstados}
              <button className="my-2 col-span-2 md:col-start-7 focus:outline-none hover:bg-gray-300 text-gray-900 text-sm py-2 px-4 rounded-lg inline-flex items-center w-40"
                onClick={this.clicMostrarFiltro}>
                <svg
                  className="h-5 w-5 fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                  <path d="M5 1.6c0-.553-.448-.6-1-.6-.553 0-1 .047-1 .6V10h2V1.6zM3 18.4c0 .551.447.6 1 .6.552 0 1-.049 1-.6V15H3v3.4zM6.399 11h-4.8C1.046 11 1 11.448 1 12v1c0 .553.046 1 .599 1H6.4c.55 0 .6-.447.6-1v-1c0-.552-.05-1-.601-1zm12 1h-4.801c-.552 0-.598.448-.598 1v1c0 .553.046 1 .599 1H18.4c.55 0 .6-.447.6-1v-1c0-.552-.05-1-.601-1zM13 7c0-.552-.05-1-.601-1h-4.8C7.046 6 7 6.448 7 7v1c0 .553.046 1 .599 1H12.4c.55 0 .6-.447.6-1V7zm-2-5.4c0-.553-.448-.6-1-.6-.553 0-1 .047-1 .6V5h2V1.6zM9 18.4c0 .551.447.6 1 .6.552 0 1-.049 1-.6V10H9v8.4zm8-16.8c0-.553-.448-.6-1-.6-.553 0-1 .047-1 .6V11h2V1.6zm-2 16.8c0 .551.447.6 1 .6.552 0 1-.049 1-.6V16h-2v2.4z" />
                </svg>
                <span className="flex-1">{textoFiltro + " filtros"}</span>
              </button>
            </div>
            <Filtros mostrarConsulta={this.mostrarConsulta} />
          </div>
          {/*Fin de filtros*/}

          {/*Carros*/}
          <div className={`border-t-2 border-gray-400 pt-5 grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-100 place-items-center mb-10 mt-4 md:mt-8 mx-6 md:mx-8 transform transition duration-500 ease-in-out -translate-y-${translateCarros}`}>
            {carrosMostrar}{/*Ventana para info Vehiculo*/}

            <div class="px-4 w-full">
              <div class="animate-pulse">
                <div class="relative pb-48 bg-gray-400 h-full w-full rounded-lg shadow-md"></div>
                <div className="relative px-4 -mt-10">
                  <div className="px-6 py-4 bg-gray-500 rounded-lg shadow-xl">
                    <div class="flex-1 space-y-4 py-1">
                      <div class="h-4 bg-gray-400 rounded w-3/4"></div>
                      <div class="space-y-2">
                        <div class="h-4 bg-gray-400 rounded"></div>
                        <div class="h-4 bg-gray-400 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/}
          <InfoCarro carro={carroMostrar}/>
          {/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/}
          {/*Fin de la Ventana*/}
        </div>
        <div className="py-20"></div>
      </div >
    );
  }
}

export default Principal;
