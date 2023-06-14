import React from "react";
import { Routes, Route } from 'react-router-dom';
import {Home, Login} from "../pages";


function AppRouter() {
  return (

    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>

  );
}

export default AppRouter;