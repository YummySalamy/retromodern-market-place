import MainRender from './layouts/MainRender'
import MainPage from './views/app/MainPage'
import About from './views/app/About'
import Contact from './views/app/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainRender children={<MainPage />} />} />
        <Route path="/about" element={<MainRender children={<About />} />} />
        <Route path="/contact" element={<MainRender children={<Contact />} />} />
        {/* <Route path="/admin/login" element={<Login />} /> */}
      </Routes>
    </Router>
  )
}

export default App
