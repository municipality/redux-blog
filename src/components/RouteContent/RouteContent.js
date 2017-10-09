import React from 'react'
import PropTypes from 'prop-types'
import './RouteContent.css'

/**
 * This is the container for all Routing content
 * @param {PropTypes.node} children passes on its
 * children into itself
 */
const RouteContent = ({ children }) => (
  <div className="route-content">{children}</div>
)

RouteContent.propTypes = {
  children: PropTypes.node
}

export default RouteContent
