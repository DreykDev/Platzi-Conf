import React from 'react';
// import { Link } from 'react-router-dom';
import api from '../api'

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
// import Navbar from '../components/Navbar'
import BadgesList from '../components/BadgesList'
import ButtonComp from '../components/ButtonComp'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

class Badges extends React.Component {
  state = {
    loading: true,//El loading se inicia en true, porque es lo primero que vera el cliente, mientras se renderiza la pagina
    error: null,
    data: undefined,
  }

  //LLAMADO A LA API -->

  componentDidMount(){//Es buena practica hacer la peticion a una api en componentDidMount, nos asegura que el codigo del componente api ya esta listo
    this.fetchData()

    this.intervalId = setInterval(this.fetchData, 5000)//Cada 5 segundos se hara un llamado a la API
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})

    try{ //Llamada a la API
      const data = await api.badges.list()//Lamada a la api desde el componente api
      this.setState({loading: false, data: data})//Obtenidos los datos apagamos el loading y guardamos datos
    } catch(error){
      this.setState({loading: false, error: error})//Si resulta en error lo guardamos para manipularlo
    }
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  render() {
    //Siempre lo primero debe ser el manejo del estado de Loading
    if (this.state.loading === true && !this.state.data){
      return <PageLoading/> //Retornamos un indicador que nos diga que se esta cargando la pagina
    }

    if (this.state.error){//Si hay un error, mosrtramos el error
      return <PageError error={this.state.error} />
    }
    //En el llamado al componente de BadgesList le pasamos por propiedad badges porque es la propiedad que instaciamos en el componente BadgesList junto a props. y asi comportir los datos de state
    return (
      <>
        {/* <Navbar /> */}

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            {/* <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link> */}
            <ButtonComp newTo="/badges/new" newText="New Badge"/>
          </div>

          <BadgesList badges={this.state.data} />
        </div>
      </>
    );
  }
}

export default Badges;
