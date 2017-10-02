import React from 'react'
import Avatar from 'components/Avatar'
import './Sidebar.css'

const image = 'https://i.ytimg.com/vi/7HKVvcNOQb0/maxresdefault.jpg'
const Sidebar = () => (
  <div className="sidebar">
    <Avatar img={image} />
  </div>
)

export default Sidebar
