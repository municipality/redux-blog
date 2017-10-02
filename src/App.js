import React, { Component } from 'react'
import './App.css'
import Blog from 'containers/Blog'
import SearchField from 'containers/SearchField'
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
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <SearchField placeholder="Search..." />
                  <Blog />
                </div>
              )}
            />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App
