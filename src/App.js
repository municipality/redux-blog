import React, { Component } from 'react'
import './App.css'
import Blog from 'containers/Blog'
import SearchField from 'containers/SearchField'
import Layout from 'components/Layout'
import Sidebar from 'components/Sidebar'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sidebar />
          <div>
            <SearchField placeholder="Search..." />
            <Blog />
          </div>
        </Layout>
      </div>
    )
  }
}

export default App
