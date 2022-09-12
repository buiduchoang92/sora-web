import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

import App2 from './App2'
import Store from './store/index'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <HelmetProvider>
      <Router>
        <App2 />
      </Router>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
