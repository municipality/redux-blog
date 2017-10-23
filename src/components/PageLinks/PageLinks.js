import React from 'react'
import { Link } from 'react-router-dom'
import './PageLinks.css'

const PageLinks = () => (
  <div className="page-links">
    <Link to="/">Laundry</Link>
    {/* <Link to="/">About</Link> */}
    <a href="http://github.com/municipality">About</a>
  </div>
)

export default PageLinks
