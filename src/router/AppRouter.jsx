import React from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "../pages/Homejsx";
import Default from "../pages/Default.jsx";
import LoginForm from "../pages/LoginFormjsx";
import PreRegistroForm from "../pages/PreRegistroForm.jsx";
import VerificarTramiteForm from "../pages/VerificarTramiteFormjsx";

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Default} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default AppRouter;