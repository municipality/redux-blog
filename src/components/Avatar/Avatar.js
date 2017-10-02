import React from 'react'
import PropTypes from 'prop-types'
import './Avatar.css'

const Avatar = ({ img, name }) => (
  <div className="avatar">
    <div
      className="avatar-image"
      style={{
        backgroundImage: `url(${img})`
      }}
    />
    <div className="avatar-name">{name || 'brianslaundry'}</div>
  </div>
)

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string
}

export default Avatar
