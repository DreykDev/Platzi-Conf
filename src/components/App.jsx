import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom';//Importamos los componentes de react-router

import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
//Crearemos el componente con una funcion, pueder ser usada si no necesitamos de metodos y estados
const App = () => {
  return (
    <BrowserRouter> {/*Es esencial para nuestro router, toda la logica que se escriba para el router, debe ser dentro de BrowserRouter*/}
      <Switch> {/*Es como un case, pero para rutas, se asegura que sea una sola ruta la que se renderice*/}
        <Route exact path="/badges" component={Badges} />{/*exact path, para que exactamente sea renderizada esta ruta*/}
        <Route exact path="/badges/new" component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}
export default App