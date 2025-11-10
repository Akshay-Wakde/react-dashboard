import AdminPanel from "../src/components/AdminPanel"
import './App.css'
import { BrowserRouter, Navigate, Route, Routes, Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Head  from "../src/components/layouts/Head";
import Navbar  from "../src/components/layouts/Navbar";
import Header  from "../src/components/layouts/Header";
import Footer from "../src/components/layouts/Footer";

import Lists from "./components/users/Lists";
import Add from "./components/users/Add";
import Import from "./components/users/Import";
import Login from "./components/pages/Login";


function Layout() {
  return (
    <>
        <Head/>
          <div className="app-wrap">
            <div className="app-container">
              <Navbar />
                <div className="app-main">
                  <Header />
                  <Outlet /> {/* This renders child routes */}
                </div>
            </div>
            <Footer />
          </div>
    </>
  );
}

function App() {

  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users/lists" element={<Lists />} />
          <Route path="/users/add" element={<Add />} />
          <Route path="/users/import" element={<Import />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
