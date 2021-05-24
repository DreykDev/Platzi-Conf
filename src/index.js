// const element = document.createElement('h1')
// element.innerHTML = 'Hola, Platzi'

// const container = document.getElementById('app')

// container.appendChild(element)
//LO ANTERIOR ES USANDO JS, AHORA LO HAREMOS CON REACT

import React from 'react' //Hace analogo a createElement()
import ReactDOM from 'react-dom' //Hace analogo a appendChild()

const element = <h1>Hello, you!</h1>

const container = document.getElementById('app')

// ReactDOM.render(__que__,__donde__)
ReactDOM.render(element,container)