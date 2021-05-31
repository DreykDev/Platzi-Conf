import React from 'react'
import './styles/BadgeNew.css'
// import Navbar from '../components/Navbar.jsx'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import header from '../images/badge-header.svg'

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
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

  render() {
    return (
      <div>

        {/* <Navbar/> */}

        <div className="BadgeNew__hero">
          <img className="img-fliud" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="rox" />
            <div className="BadgeT col-6">
              <Badge
                firtsName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                email={this.state.form.email}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>

        </div>

      </div>
    );
  }
}

export default BadgeNew;
