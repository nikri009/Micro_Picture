import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Router>
      <App />
    </Router> */}
    <App />
  </React.StrictMode>,
)



// import { createBrowserRouter } from 'react-router-dom'
// import Login from './fregments/login.tsx'
// import Register from './fregments/Register.tsx'
// import Home from './fregments/Home.tsx'
// import DetailBerita from './fregments/DetailBerita.tsx'
// import Vote from './fregments/Vote.tsx'
// import DsAdmin from './fregments/DsAdmin.tsx'
// import ListPaslon from './fregments/ListPaslon.tsx'
// import ListPartai from './components/ListPartai.tsx'
// import AddPaslon from './fregments/AddPaslon.tsx'
// import AddPartai from './fregments/AddPartai.tsx'
// import AddVote from './fregments/AddVote.tsx'


// const router = createBrowserRouter([
//   {
//     path:"/login",
//     element:<Login/>

//   },
//   {
//     path:"/register",
//     element:<Register/>

//   },
//   {
//     path:"/",
//     element:<Home/>

//   },
//   {
//     path:"/detail",
//     element:<DetailBerita/>

//   },
//   {
//     path:"/vote",
//     element:<Vote/>

//   },
//   {
//     path:"/setting",
//     element:<AddVote/>

//   }
// ]);