import React from 'react'
import './styles/BadgeEdit.css'
// import Navbar from '../components/Navbar.jsx'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/platziconf-logo.svg'
import api from '../api'
import PageLoading from '../components/PageLoading'

class BadgeEdit extends React.Component {
  state = {
    loading: true,//Representa el tiempo del envio de los datos, sera true cuando demos click en enviar
    error: null,//Comenzamos sin errores
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  }
//Pedir datos para actualizarlos
componentDidMount(){
  this.fetchData()
}

fetchData = async e => {
  this.setState({loading:true,error:null})

  try{
    const data = await api.badges.read(
      this.props.match.params.badgeId
    )

    this.setState({loading:false, form: data})
  }catch(error){
    this.setState({loading:false,error:error})
  }
}


  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({loading: true, error: null})

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
      this.setState({loading: false})

      this.props.history.push('/badges')
    }catch (error){
      this.setState({loading: false, error: error})
    }
  }

  render() {
    if (this.state.loading === true){
      return <PageLoading/>
    }


    return (
      <div>

        {/* <Navbar/> */}

        <div className="BadgeEdit__hero">
          <img className="BadgeEdit_hero-image img-fliud" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="rox" />
            <div className="BadgeT col-6">

              <Badge
                firtsName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                email={this.state.form.email || 'EMAIL'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITTLE'}
                twitter={this.state.form.twitter || 'TWITTER'}
              />

            </div>

            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>

        </div>

      </div>
    );
  }
}

export default BadgeEdit;
