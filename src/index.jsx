import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//Components
import Header from './Components/Header/index'
//Pages
import Home from './Pages/Home/index'
import Error from './Pages/Error/index'
import HostPage from './Pages/Host/index'
import About from './Pages/About'
//GlobalStyled
import GlobalStyled from './Styled/Global/index'
//Context
import { DatasProvider } from './Utils/Context/index'
// basename={process.env.PUBLIC_URL}
ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <DatasProvider>
        <GlobalStyled />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/host/:id" element={<HostPage hostDatas={null} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </DatasProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
