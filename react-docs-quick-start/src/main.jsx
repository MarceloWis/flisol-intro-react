import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import State from './components/State/index.jsx'
import UseEffect from './components/UseEffect/index.jsx'
import Start from './Start.jsx'
import MainContextProvider from './contexts/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <State /> */}
    {/* <UseEffect /> */}
  <>
  <MainContextProvider>
      <Start />
    </MainContextProvider>
  </>
  </React.StrictMode>,
)
