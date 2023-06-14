import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Default from "../pages/Default";
import LoginForm from "../pages/LoginForm";
import PreRegistroForm from "../pages/PreRegistroForm";
import VerificarTramiteForm from "../pages/VerificarTramiteForm";

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