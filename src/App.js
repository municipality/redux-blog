import React, { Component } from 'react'
import './App.css'
import Blog from 'containers/Blog'
import SearchField from 'containers/SearchField'

class App extends Component {
  render() {
    return (
      <div>
        <SearchField placeholder="Search..." />
        <Blog />
      </div>
    )
  }
}

export default App
