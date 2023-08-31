
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from './Login/Login'
import Signup from './Signup/Signup'


function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signup" element={<Navigate replace to="/" />}/>        
      </Routes>
    </Router>

    </>
  )
}

export default App
