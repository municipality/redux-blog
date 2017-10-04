import React, { Component } from 'react'
import './App.css'
import BlogViewer from 'components/BlogViewer'
import Layout from 'components/Layout'
import Sidebar from 'components/Sidebar'

// Switch and Router from react-router for routing
import { Switch, Route } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={BlogViewer} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App
