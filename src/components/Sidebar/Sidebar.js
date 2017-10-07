import React from 'react'
import Avatar from 'components/Avatar'
import Footer from 'components/Footer'
import Banner from 'components/Banner'
import './Sidebar.css'

const image = 'https://i.ytimg.com/vi/7HKVvcNOQb0/maxresdefault.jpg'
const Sidebar = () => (
  <div className="sidebar">
    <Avatar img={image} />
    <Banner imgsrc="banner.jpg" />
    <Footer />
  </div>
)

export default Sidebar
