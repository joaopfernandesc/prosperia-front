import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// Importando as páginas
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/";
import QRCode from "./pages/QRCode/";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Dashboard} path="/dashboard" />
      <Route component={QRCode} path = "/qr_code" />
    </BrowserRouter>
  );
};

export default Routes;
