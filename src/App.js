import React, { Component } from 'react'
import './App.css'
import BlogViewer from 'components/BlogViewer'
import Layout from 'components/Layout'
import Sidebar from 'components/Sidebar'
import RouteContent from 'components/RouteContent'

// Switch and Router from react-router for routing
import { Switch, Route } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Layout> */}
        {/* <Sidebar /> */}
        {/* Use RouteContent so that Sidebar
            is fixed position with RouteContent */}
        {/* <RouteContent> */}
        <Switch>
          <Route exact path="/" component={BlogViewer} />
        </Switch>
        {/* </RouteContent> */}
        {/* </Layout> */}
      </div>
    )
  }
}

export default App
