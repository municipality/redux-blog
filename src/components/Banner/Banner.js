import React from 'react'
import './Banner.css'
const Banner = ({ imgsrc }) => (
  <div
    className="banner"
    style={{
      backgroundImage: `url(${imgsrc})`
    }}
  />
)

export default Banner
