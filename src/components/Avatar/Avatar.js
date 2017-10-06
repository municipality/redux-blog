import React from 'react'
import PropTypes from 'prop-types'
import './Avatar.css'

const Avatar = ({ img, name }) => (
  <div className="avatar">
    <div
      className="avatar-image"
      style={{
        // image is located in /public folder
        backgroundImage: 'url(avatar.jpg)'
      }}
    />
    <div className="avatar-name">{name || 'Brian Lee'}</div>
  </div>
)

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string
}

export default Avatar
