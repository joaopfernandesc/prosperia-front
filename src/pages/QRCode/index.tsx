import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QrReader from 'react-qr-reader';
import { FiChevronLeft } from "react-icons/fi";
import { Redirect } from "react-router-dom";

import "./styles.scss";

const QRCode: React.FC = () => {
  const [result, setResult] = useState("No result")

  const handleScan = (data: string | null) => {
    if (data) {
      setResult(data)
    }
  }
  const handleError = (err: any) => {
    console.error(err)
  }

  if (result !== "No result") {
    return <Redirect to="payment_review" />
  }



  return (
    <div className="qr-code">
      <nav className="topbar">
        <div>
          <FiChevronLeft/>
        </div>
        <div>
          AUTORIZAÇÃO DE PAGAMENTO
        </div>
        <div>

        </div>
      </nav>

      <div className="info-text">
        ESCANEIE O CÓDIGO OU DIGITE O NÚMERO DE AUTORIZAÇÃO.
      </div>

      <QrReader className="frame"
        delay={300}
        onError={(err) => handleError(err)}
        onScan={(data) => handleScan(data)}
      />

      <div>
        <input type="text" className="qr-input" placeholder="Código de autorização"/>
      </div>

      <button className="qr-button">
        CONTINUAR
      </button>
  </div>)
}

export default QRCode;
