import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Homejsx";
import Default from "../pages/Default.jsx";
import LoginForm from "../pages/LoginFormjsx";
import PreRegistroForm from "../pages/PreRegistroForm.jsx";
import VerificarTramiteForm from "../pages/VerificarTramiteFormjsx";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/default" component={Default} />
        <Route path="/login" component={LoginForm} />
        <Route path="/preregistro" component={PreRegistroForm} />
        <Route path="/verificar" component={VerificarTramiteForm} />
      </Switch>
    </Router>
  );
};

export default AppRouter;