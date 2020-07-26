import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import icon from "../../assets/icon.svg";
import logo from "../../assets/logo.svg";

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={icon} alt="Icon Prosperia" />
          <img src={logo} alt="Prosperia" />
          <div className="header__text">OPEN BANKING</div>
        </header>

        <main>
          <h1>Um dos métodos de pagamento mais seguro e rápido.</h1>
          <p>
            Nós somos a Prosperia, uma ferramenta que vai resolver seus
            problemas relacionados à segurança online, com comodidade e
            agilidade
          </p>
          <div className="filler">

          </div>
          <Link to="/dashboard" className="upperButton">
            <strong>Já tenho conta</strong>
          </Link>
          <Link to="/dashboard" className="bottomButton">
            <strong>Comece por aqui</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
