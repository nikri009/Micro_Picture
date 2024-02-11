import {  Route , BrowserRouter as Router, Routes } from "react-router-dom";
// import { useState } from "react";
import Home from "./fregments/Home";
import Vote from "./fregments/Vote";
import Login from "./fregments/Login";
import Register from "./fregments/Register";
import DsAdmin from "./fregments/DsAdmin";
import NavbarBF from "./components/NavbarBF";
import { AuthProvider } from "./auth/Auth";
import { QueryClient, QueryClientProvider } from "react-query";
import AddBlogs from "./fregments/AddBlogs";

const queryClient = new QueryClient();

const App:React.FC = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // // const [isAdmin, setIsAdmin] = useState(false)

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
   
  //   console.log(isLoggedIn)
    
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
    
  // };
  
  
  
  return(
    <Router>
     <QueryClientProvider client={queryClient}>

      <AuthProvider>
        <NavbarBF />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/vote" element={<Vote/>}/>
          <Route path="/login" element={<Login  />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dasboard" element={<DsAdmin/>}/>
          <Route path="/addblogs" element={<AddBlogs />}/>
        </Routes>

     </AuthProvider>
     </QueryClientProvider>
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