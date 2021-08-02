import React from 'react'
import {Link} from 'react-router-dom'

import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'
import Badge from '../components/Badge'
// import Modal from '../components/Modal'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

const BadgeDetails = props => {
  const badge = props.badge

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo conferencia" />
            </div>
            <div className="BadgeDetails__hero-attendant-name col-6">
              <h1>{badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

    <div className="container">
      <div className="row">
        <div className="col">
          <Badge
          firstName={badge.firstName}
          lastName={badge.lastName}
          email={badge.email}
          twitter={badge.twitter}
          jobTitle={badge.jobTitle}
          />
        </div>
        <div className="col">
          <div>
            <div>
              <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}`}>Edit</Link>
            </div>
            <div>
              <button
                onClick={props.onOpenModal}
                className="btn btn-danger" >Delete</button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}//Como es un componente funcional, los props vendran del contenedor
                onDeleteBadge={props.onDeleteBadge}
              ></DeleteBadgeModal>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BadgeDetails