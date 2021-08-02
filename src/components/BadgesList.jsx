import React from 'react';
import {Link} from 'react-router-dom'
import './styles/BadgesList.css'
import ButtonComp from './ButtonComp'
import Gravatar from './Gravatar'

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges){
  const [query, setQuery] = React.useState('')
  const [filterBadges, setFilterBadges] = React.useState(badges)

  React.useMemo(()=>{
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    })

    setFilterBadges(result)

  }, [badges,query])

  return {query,setQuery, filterBadges}
}

function BadgeList (props) {
  const badges = props.badges

  const {query,setQuery, filterBadges} = useSearchBadges(badges)

  if(filterBadges.length === 0){//Por si nos da una lista vacia
    return(
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control"
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
          />
        </div>
        <h3>No Badges found</h3>
        <ButtonComp newTo="/badges/new" newText="Create New Badge" />
      </div>
    )
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input type="text" className="form-control"
          value={query}
          onChange={(e)=>{
            setQuery(e.target.value)
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filterBadges.map(badge => {//props porque es una propiedad que le pasaremos al componente desde la pagina de Badges con los datos que debe almacenar cada badge
        //EL metodo map crea un nuevo array con los resultados de la llamada a la funcion
        //El key es un identificador unico para cada (badge) iteracion de este componente data, asi no corremos el riesgo de presentar problemas por si un badge tiene una identificacion igual a otro, por lo mismo este key (id) debe de ser unico por badge
          return ( //Retornandome por cada render cada badge que se le suministre
            <div className="BadgesList__container" key={badge.id}>
              <Gravatar className="BadgesList__avatarUrl" email={badge.email} alt="" />
              <li>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgeList;
//<Gravatar email={this.props.email} className="Badge__avatar" alt="avatar" />