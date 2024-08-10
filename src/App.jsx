import MainPage from './views/app/MainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/admin/login" element={<Login />} /> */}
      </Routes>
    </Router>
  )
}

export default App
