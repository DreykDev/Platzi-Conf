import React from 'react'
import md5 from 'md5'

const Gravatar = props => {
  const email = props.email
  const hash = md5(email)

  return (
    <img className={props.className} src={`http://www.gravatar.com/avatar/${hash}?d=identicon`} alt="avatar" />
  )
}

export default Gravatar
// http://www.gravatar.com/avatar/cead1cd7d8e0cd9e73f10cf8fa39a376?d=identicon