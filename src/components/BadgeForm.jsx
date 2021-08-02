import React from 'react';

class BadgeForm extends React.Component {
  // state = {
  //   jobTitle: 'Backend Dev | JS, Python'
  // }

  // handleChange = (e) => {
  //   console.log({
  //     name: e.target.name,
  //     value: e.target.value
  //   })
  //   Vamos a guardar la informacion suministrada en este input en estado
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }//Nos mostrara en consola cada cambio en el formulario
  handleClick = (e) => {
    console.log('Button was clicked')
  }//En este caso no pasamos un valor o un name, solo que algo sucede
  render(){
    return (
      <div>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>FirstName</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text" name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>lastName</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text" name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email" name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text" name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text" name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
          {/* Si existe este errror entonces... */}
          {this.props.error && (
            <p className="text-danger" >{this.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;