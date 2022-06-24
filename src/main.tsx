import { ApolloProvider } from '@apollo/client'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

import { client } from './lib/apollo'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
