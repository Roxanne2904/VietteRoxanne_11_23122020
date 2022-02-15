import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//Components
import Header from './Components/Header/index'
//Pages
import Home from './Pages/Home/index'
import Error from './Pages/Error/index'
import HostPage from './Pages/Host/index'
import About from './Pages/About'
import Footer from './Components/Footer'
//Context
import { DatasProvider } from './Utils/Context/index'
// basename={process.env.PUBLIC_URL}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <DatasProvider>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/host/:id" element={<HostPage hostDatas={null} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </DatasProvider>
    </Router>
  )
}

export default App
