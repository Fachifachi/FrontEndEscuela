import React from "react";
import {  Routes, Route } from 'react-router-dom';
import Home from "../pages/Homejsx";
import Default from "../pages/Default.jsx";
import LoginForm from "../pages/LoginFormjsx";
import PreRegistroForm from "../pages/PreRegistroForm.jsx";
import VerificarTramiteForm from "../pages/VerificarTramiteFormjsx";

function AppRouter() {
  return (
    <Routes>
      <Layout>
    
          <Route path="/" component={<Layout/>} />
        
     
      </Layout>
    </Routes>
  );
}

export default AppRouter;