import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ButtonComp extends Component {
  render() {
    const {newTo,newText} = this.props
    return (
      <Link to={newTo} className="btn btn-primary">
        {newText}
      </Link>
    );
  }
}

export default ButtonComp;
