import React from 'react';
// import {Link} from 'react-router-dom'
import './styles/home.css'

import logoPlatziConf from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

import ButtonComp from '../components/ButtonComp'

class Home extends React.Component {
  render() {
    // const props.newTo, props.newText = this.props
    // linkProps = {
    //   to: "/badges"
    // }
    return (
      <div className="Home">

        <div className="container__conf">
          <img className="logoPlatziConf" src={logoPlatziConf} alt="Logo Platzi Conf" />
          <h2>PRINT YOUR BADGES</h2>
          <p>The easiest way to manage your conference</p>
          {/* <Link to="/badges" className="btn btn-primary">
              Start now
          </Link> */}
          <ButtonComp newTo="/badges" newText="start now"/>
        </div>

        <img className="astronauts" src={astronauts} alt="Imagen de astronautas Platzi" />

      </div>
    );
  }
}

export default Home;