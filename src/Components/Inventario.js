import React from "react";
import Carro from "./Inventario/Carro";
import Estado from "./Inventario/Estado";
import Filtros from "./Inventario/Filtros";
import InfoCarro from "./Inventario/InfoCarro";
import CarroCargando from "./Inventario/CarroCargando";
import CarroAveriado from "../CarroAveriado.png";
import { db } from "../firebase"
import Navbar from "./Navbar";

class Principal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      estados: [
        { estado: "Disponible", selected: true, color: "text-green-500" },
        { estado: "Reparacion", selected: false, color: "text-gray-400" },
        { estado: "Repo", selected: false, color: "text-red-600" },
        { estado: "Apartado", selected: false, color: "text-blue-600" },
        { estado: "Vendido", selected: false, color: "text-yellow-400" },
      ],
      loading: true,
      carros: [],
      mostrarFiltros: false,
      mostrarInfo: false,
      carroMostrar: {},
    };
    this.clicEstadoCarro = this.clicEstadoCarro.bind(this)
    this.mostrarConsulta = this.mostrarConsulta.bind(this)
    this.clickMostrarInfo = this.clickMostrarInfo.bind(this)
  }

  componentDidMount() {
    this.getCarros()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.carros !== this.state.carros) {
      this.setState({
        loading: false,
      })
    }
  }

  //funcion que renderiza la query que se envía
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

  //funcion asíncrona que trae todos los carros
  getCarros = async () => {
    let query = db.collection("carros").orderBy("marca")
    this.mostrarConsulta(query)
  }

  //funcion que retorna el estado seleccionado
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

  //funcion que muestra los filtros
  clicMostrarFiltro = () => {
    this.setState({
      mostrarFiltros: !this.state.mostrarFiltros,
    })
  }

  clickMostrarInfo = (vin, estado) => {
    let carro = this.state.carros.filter(carro => carro.id === vin);
    this.setState({
      mostrarInfo: estado,
      carroMostrar: carro[0],
    })
  }

  render() {
    //renderizar los botones de estado
    let botonesEstados;
    let { estados, carros, carroMostrar } = this.state;
    botonesEstados = estados.map((boton) => {
      return (
        <>
          <Estado key={boton.estado} estado={boton.estado} selected={boton.selected} color={boton.color} clicEstadoCarro={this.clicEstadoCarro} />
        </>
      );
    });

    //cuanto se moverán los filtros en diferentes pantallas segun se desee
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

    let carrosMostrar
    let cargandoCarros = carros.filter(carro => carro.estado === estadoActual)
    if (cargandoCarros.length === 0) {
      cargandoCarros = (
        <div className="col-span-4 h-screen">
          <div>
            <img alt="averiado" className="transform scale-75 sm:scale-50 opacity-75" src={CarroAveriado}></img>
            <div className="transform -translate-y-4 sm:-translate-y-16 text-center tracking-tight font-medium text-gray-700 opacity-75">Lo sentimos, no encontramos lo que buscabas</div>
          </div>
        </div>)
    } else {
      cargandoCarros = cargandoCarros.map(carro => {
        return (<Carro info={carro} mostrarInfo={this.clickMostrarInfo} />)
      })
    }

    if (this.state.loading) {
      let array = [1, 2, 3, 4, 5, 6, 7, 8]
      carrosMostrar = array.map(() => {
        return (<CarroCargando />)
      })
    } else {
      carrosMostrar = cargandoCarros
    }

    return (
      <div className="bg-gray-100">
        {/*Inicio del navbar*/}
        <Navbar componente={"Principal"}/>
        {/*fin del navbar*/}
        <div>
          {/*Botones Estado y filtro*/}
          <>
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
          </>
          {/*Fin de filtros*/}
          {/*Carros*/}
          <div className={`border-t-2 border-gray-400 pt-5 grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-100 place-items-center mb-10 mt-4 sm:mt-8 mx-6 sm:mx-8 transform transition duration-500 ease-in-out -translate-y-${translateCarros}`}>
            {carrosMostrar}
          </div>
          {/*Modal para mostrar Informacion del Carro*/}
          <div>
            {this.state.mostrarInfo && (<InfoCarro carro={carroMostrar} mostrarInfo={this.clickMostrarInfo} />)}
          </div>
          {/*Fin del modal*/}
        </div>
      </div >
    );
  }
}

export default Principal;
