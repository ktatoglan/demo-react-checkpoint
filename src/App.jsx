import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
        </Router>
    </>
  )
}

export default App
