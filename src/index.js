import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import BadgeNew from './pages/BadgeNew.jsx';
import Badges from './pages/Badges.jsx'

const container = document.getElementById('app');

ReactDOM.render(<Badges/>, container);
//-> Lección 7

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Badge from './components/Badge'

// const NAME = 'David'
// const PROFESION = 'Fronted Developer'

// const element = (
//     <div>
//       <h1>Hola, soy {NAME}</h1>
//       <p>Soy {PROFESION}.</p>
//     </div>
//   );

// const container = document.getElementById('app');
// ReactDOM.render(<Badge/>, container);
// Clase 7
//-> Lección 1
/*
import React from 'react';
import ReactDOM from 'react-dom';

const jsx = <h1>Hello, Platzi Badges!</h1>;

const container = document.getElementById('app');
ReactDOM.render(jsx, container);
*/
//-> Lección 2
/*
import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
    'a',
    {
        href: 'https://google.com'
    },
    'Ir a Google'
);

const container = document.getElementById('app');
ReactDOM.render(element, container);
*/
//-> Lección 3
/*
import React from 'react';
import ReactDOM from 'react-dom';

const name = 'luiscordero29';
const element = React.createElement(
    'h1',
    {},
    `Hola soy, ${name}`
)

const container = document.getElementById('app');
ReactDOM.render(element, container);
*/
//-> Lección 4
/*
import React from 'react';
import ReactDOM from 'react-dom';

const name = 'luiscordero29';
const element = <h1>Soy, {name}</h1>

const container = document.getElementById('app');
ReactDOM.render(element, container);
*/
//-> Lección 5
/*
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>La suma de 2 + 9 = {2 + 9}</h1>

const container = document.getElementById('app');
ReactDOM.render(element, container);
*/
//-> Lección 6
/*
import React from 'react';
import ReactDOM from 'react-dom';

const sumar = () => 2 + 9;
const element = <h1>La suma de 2 + 9 = {sumar()}</h1>

const container = document.getElementById('app');
ReactDOM.render(element, container);
*/

//-> Lección 8

// import React from 'react';
// import ReactDOM from 'react-dom';

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola, soy Luis Cordero'),
//     React.createElement('p', {}, 'Soy ingeniero en informática.')
// );
// const container = document.getElementById('app');
// ReactDOM.render(element, container);
