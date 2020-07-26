import React from "react";
import "./styles.css";
const x = require("./x.svg")
const aprovado = require("./aprovado.svg")

const payment_aproved = props => {
  return (
    <div className="flex">
      <div className="cell">
      <div className="retangulo-superior">
          <img src={x} alt="x" className="x"/>
          <p className="aprovado">PAGAMENTO APROVADO</p>
        </div>
        <img src={aprovado} alt="aprovado_img" className="aprovado_img"/>
        <p className="log">Pagamento realizado com sucesso!</p>
        <p className="log_desc">O valor de R$ 362,50 foi autorizado
pelo emissor do cartão de credito</p>
      </div>
    </div>
  )
}

export default payment_aproved;