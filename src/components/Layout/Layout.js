import React from 'react'
import PropTypes from 'prop-types'
import './Layout.css'

const Layout = ({ children }) => <div className="layout">{children}</div>

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
