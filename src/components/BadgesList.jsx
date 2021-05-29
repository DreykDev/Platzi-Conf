import React from 'react';
import './styles/BadgesList.css'

class BadgeList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {//props porque es una propiedad que le pasaremos al componente desde la pagina de Badges con los datos que debe almacenar cada badge
        //EL metodo map crea un nuevo array con los resultados de la llamada a la funcion
        //El key es un identificador unico para cada (badge) iteracion de este componente data, asi no corremos el riesgo de presentar problemas por si un badge tiene una identificacion igual a otro, por lo mismo este key (id) debe de ser unico por badge
          return ( //Retornandome por cada render cada badge que se le suministre
            <div className="BadgesList__container" key={badge.id}>
              <img className="BadgesList__avatarUrl" src={badge.avatarUrl} alt="" />
              <li>
                <p className="badgesList__itemP badgesList__name" >{badge.firstName} {badge.lastName}</p>
                <p className="badgesList__itemP badgesList__twitter" >{badge.twitter}</p>
                <p className="badgesList__itemP" >{badge.jobTitle}</p>
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;