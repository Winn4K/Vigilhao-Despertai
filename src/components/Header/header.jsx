import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoBranco from "../../assets/svg/logo-branco.svg";
import Cronometro from "../Cronometro/cronometro";
import './index.scss';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // ativa quando rolar mais de 30px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Cronometro />
      <div id="header" className={isScrolled ? "scrolled" : ""}>
        <div>
          <img src={LogoBranco} alt="Logo Branco" id="logo-header" />
        </div>
        <nav>
          <ul id="menu-header">
            <li className="item-menu-header"><Link to="/">Home</Link></li>
            <li className="item-menu-header"><Link to="/vigilhao">O Vigilhão</Link></li>
            <li className="item-menu-header"><Link to="/acoes-sociais">Ações Sociais</Link></li>
            <li className="item-menu-header"><Link to="/caixinha-de-oracoes">Caixinha de Orações</Link></li>
            <li className="item-menu-header"><Link to="/doe-aqui">Doe Aqui</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
