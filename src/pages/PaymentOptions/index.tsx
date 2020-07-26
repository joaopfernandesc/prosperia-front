import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import "./styles.scss";

const PaymentOptions = () => {
  return(
    <div className="qr-code">
      <nav className="topbar">
        <div>
          <FiChevronLeft/>
        </div>
        <div>
          OPÇÕES DE PAGAMENTO
        </div>
        <div>

        </div>
      </nav>
      <div className="date">
        <div>
          Dia
        </div>
        <div>
          26/07/2020
        </div>
      </div>
      <div className="payment-text">
        Essas são as melhores opções de compra hoje:
      </div>
      <div className="payment">
        <Link to="/qr_code" className="payment__methods">
          <div className="payment__methods__picture">
            Teste
          </div>
          <div>
            Pagamento apenas daqui 40 dias
          </div>
        </Link>
        <Link to="/qr_code" className="payment__methods">
          <div className="payment__methods__picture">
            Teste
          </div>
          <div>
            3% de cashback com PicPay
          </div>
        </Link>
        <Link to="/qr_code" className="payment__methods">
          <div className="payment__methods__picture">
            Teste
          </div>
          <div>
            Pagamento apenas daqui 28 dias
          </div>
        </Link>
        <Link to="/qr_code" className="payment__methods">
          <div className="payment__methods__picture">
            Teste 4
          </div>
          <div>
            Aniversário de rendimento: 22/07
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PaymentOptions;
