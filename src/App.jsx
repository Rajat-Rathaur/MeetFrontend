import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import routes from './routes/routes';
import './App.css'
import Dashboard from './Components/Dashboard';
import { CssBaseline } from '@mui/material';
function App() {


  return (
    <>
    <CssBaseline />
      {  <Router>
    {/*   <Dashboard/> */}
      
      <Routes>
        {routes.map((route, index)=>(
          <Route key={index} path= { route.path } element={<route.component />} />
        ))}
      </Routes>
     
  </Router>}
    </>
  )
}

export default App
