import React from 'react'


import Navbar from "./layouts/Navbar"
import Header from "./layouts/Header"
import Footer from './layouts/Footer'
import Dashboard from './Dashboard.jsx';




const AdminPanel = () => {
  return (
       
        <div className="app-wrap">
            <div className="app-container">
                <Navbar/>
                <div className="app-main">
                    <Header/>
                    <Dashboard/>
                </div>
            </div>
            <Footer/>
           
        </div>

  )
}

export default AdminPanel