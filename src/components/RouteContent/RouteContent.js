import React from 'react'
import PropTypes from 'prop-types'
import './RouteContent.css'

const RouteContent = ({ children }) => (
  <div className="route-content">{children}</div>
)

RouteContent.propTypes = {
  children: PropTypes.node
}

export default RouteContent
