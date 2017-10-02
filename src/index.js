import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

// BrowserRouter imports
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  //Provide store throughout the app
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
