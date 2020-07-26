import React from "react";
import "./styles.css";
const seta = require("./seta.svg")

 const payment_review = props => {
  return (
    <div className="flex">
      <div className="cell">
        <div className="retangulo-superior">
          <img src={seta} alt="seta" className="seta"/>
          <p className="revisar">REVISAR E PAGAR</p>
        </div>
        <p className="detalhe">Detalhe da compra</p>
        <div>
          <p className="cafeteira">Cafeteira Expresso Branca,110v </p>
          <p className="preco-cafeteira">R$362,50</p>
        </div>
        <div>
          <p className="imposto">Impostos e taxas</p>
          <p className="preco-imposto">R$0,00</p>
        </div>
        <div>
          <p className="total">TOTAL</p>
          <p className="preco-total">R$362,50</p>
        </div>
        <div className="linha1"></div>
      </div>
    </div>
  )
}

export default payment_review;