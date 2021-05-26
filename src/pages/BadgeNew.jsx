import React from 'react'
import './styles/BadgeNew.css'
import Navbar from '../components/Navbar.jsx'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import header from '../images/badge-header.svg'

class BadgeNew extends React.Component {
  render() {
    return (
      <div>

        <Navbar/>

        <div className="BadgeNew__hero">
          <img className="img-fliud" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="rox" />
            <div className="col-6">
              <Badge firtsName="David" lastName="Valencia" />
            </div>

            <div className="col-6">
              <BadgeForm />
            </div>

        </div>

      </div>
    );
  }
}

export default BadgeNew;
