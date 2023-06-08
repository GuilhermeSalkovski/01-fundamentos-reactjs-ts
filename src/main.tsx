import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

// ! -> root div existe sim: fala para o typescript ignorar o warninig/erro
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
