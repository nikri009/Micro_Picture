import {  Route , BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./fregments/Home";
import Vote from "./fregments/Vote";
import Login from "./fregments/login";
import Register from "./fregments/Register";
import DsAdmin from "./fregments/DsAdmin";
import NavbarBF from "./components/NavbarBF";



const App:React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true);
    // setIsAdmin(admin)
    console.log(isLoggedIn)
    
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // setIsAdmin(false)
  };
  
  // console.log(isAdmin)

  return(
    <Router>
      <NavbarBF isLoggedIn={isLoggedIn} onLogout={handleLogout} />
     
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/vote" element={<Vote/>}/>
        <Route path="/login" element={<Login  onLogin={handleLogin} />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dasboard" element={<DsAdmin/>}/>
        
      </Routes>

  </Router>
   
    
  )
}

export default App;



{/* {isAdmin && (
          <Route path="/admin" element={
            <Routes>
            <Route path="/" element={<DsAdmin />}/>
          </Routes>
          }
          />
          
        )} */}