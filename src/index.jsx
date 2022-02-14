import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import reportWebVitals from './reportWebVitals'
import App from './App'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// //Components
// import Header from './Components/Header/index'
// //Pages
// import Home from './Pages/Home/index'
// import Error from './Pages/Error/index'
// import HostPage from './Pages/Host/index'
// import About from './Pages/About'
// import Footer from './Components/Footer'
// //GlobalStyled
// // import GlobalStyled from './Styled/Global/index'
// //Context
// import { DatasProvider } from './Utils/Context/index'
// // basename={process.env.PUBLIC_URL}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
