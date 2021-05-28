import React from 'react';
import './styles/BadgesList.css'

class BadgeList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
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