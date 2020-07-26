import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// Importando as páginas
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/";
import QRCode from "./pages/QRCode/";
import PaymentOptions from "./pages/PaymentOptions";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Dashboard} path="/dashboard" />
      <Route component={QRCode} path = "/qr_code" />
      <Route component={PaymentOptions} path="/payment_options"/>
    </BrowserRouter>
  );
};

export default Routes;
