import React from 'react';
import { FaCreditCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';
import avatar from '../../assets/maria-avatar.png';
import itau from '../../assets/itau.png';
import nubank from '../../assets/nubank.png';

const Dashboard: React.FC = () => {
  return (
    <div id="page-dashboard">
      <div className="content">
        <header>
          <div>
            <img src={avatar} alt="Maria Souza" />
            <p>
              Maria Souza
              <span>CPF: 999.999.999-99</span>
            </p>
            <p>
              Total acumulado: <strong>R$ 3.000,00</strong>
            </p>
          </div>
        </header>

        <main>
          <h2>Bancos conectados</h2>
          <ul className="items-grid">
            <li>
              <img src={itau} alt="Itau" />
              <span>Conta corrente</span>
            </li>
            <li>
              <img src={nubank} alt="Nubank" />
              <span>Conta de credito</span>
            </li>
          </ul>
          <h2>Ofertas personalizadas para você</h2>
          <a href="#">VER MAIS</a>

          <div className="cards">
            <Link to="/dashboard">
              <span>
                <FaCreditCard />
              </span>
              <strong>Bancos digitais e cartões</strong>
            </Link>
          </div>

          <button className="button">visualizar lojas parceiras</button>
          <button className="button">efetuar compras</button>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
