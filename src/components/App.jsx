import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom';//Importamos los componentes de react-router

import Navbar from './Navbar'
// import Footer from "./Footer"
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import Notfound from '../pages/Notfound'
import Home from '../pages/Home'

//Crearemos el componente con una funcion, pueder ser usada si no necesitamos de metodos y estados
const App = () => {
  return (
    <BrowserRouter> {/*Es esencial para nuestro router, toda la logica que se escriba para el router, debe ser dentro de BrowserRouter*/}
    <Navbar />
      <Switch> {/*Es como un case, pero para rutas, se asegura que sea una sola ruta la que se renderice*/}
        <Route exact path="/" component={Home}/>
        <Route exact path="/badges" component={Badges} />{/*exact path, para que exactamente sea renderizada esta ruta*/}
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route component={Notfound}/>
      </Switch>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}
export default App