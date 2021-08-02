import React from 'react'

import './styles/BadgeDetails.css'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'
import api from '../api'


export default class BadgeDetailsContainer extends React.Component{
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  }

  componentDidMount(){//Cuando el componente este cargado se inicia fetchData
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})//Se inicia el estado de carga

    try{
      const data = await api.badges.read(//Traemos los datos de la api
        this.props.match.params.badgeId
      )
      this.setState({loading:false,data:data})//Detenemos el estado de carga y guardamos en data
    }catch(error){
      this.setState({loading: false, error: error})//Si nos devuelve error, se termina el estado de carga y guardamos el error
    }
  }
  handleOpenModal = e => {
    this.setState({modalIsOpen:true})
  }
  handleCloseModal = e => {
    this.setState({modalIsOpen:false})//Manejamos el evento de cierre del modal
  }
  handleDeleteBadge = async e => {
    this.setState({loading: true, error: null})

    try {
      await api.badges.remove(
        this.props.match.params.badgeId
      )
      this.setState({loading: false})

      this.props.history.push('/badges')
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render() {
    if (this.state.loading){
      return <PageLoading/>
    }
    if (this.state.error){
      return <PageError error={this.state.error}/>
    }

    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}//Manejamos el evento de cierre del modal
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        badge={this.state.data}
      />
    )
  }
}