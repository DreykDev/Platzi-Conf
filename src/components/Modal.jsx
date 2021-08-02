import React from 'react'
import ReactDOM from 'react-dom'

import './styles/Modal.css'

function Modal(props) {
  if (!props.isOpen){
    return null
  }
  return ReactDOM.createPortal(//Haremos uso de la funcione createPortal que toma dos parametros, que y a donde queremos enviar los datos
    <div className="Modal">
      <div className="Modal__container">
        <button
          onClick={props.onClose}//Como es un componente funcional, los props vendran del contenedor
          className="Modal__close-button">
            X
        </button>
        {props.children}
      </div>
    </div>,//Esto enviaremos
    document.getElementById('modal')//Y a esta direccion lo enviaremos
  )
}

export default Modal