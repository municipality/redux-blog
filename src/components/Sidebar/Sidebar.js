import React from 'react'
import Avatar from 'components/Avatar'
import Footer from 'components/Footer'
import './Sidebar.css'

const image = 'https://i.ytimg.com/vi/7HKVvcNOQb0/maxresdefault.jpg'
const Sidebar = () => (
  <div className="sidebar">
    <Avatar img={image} />
    <Footer />
  </div>
)

export default Sidebar
