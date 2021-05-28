import React from 'react'
import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'
import me from '../images/me.jpg'

class Badge extends React.Component{
  render(){
    const {firtsName,lastName,email,jobTitle,twitter} = this.props
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={me} alt="avatar" />
          <h1>{firtsName}<br/>{lastName}</h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>{twitter}</div>
        </div>

        <div className="Badge__footer">
          #PlatziConf
        </div>
      </div>
    )
  }
}

export default Badge