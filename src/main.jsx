import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Vigilhao from "./views/Vigilhao/vigilhao";
import AcoesSociais from "./views/AcoesSociais/acoesSociais";
import CaixinhaDeOracoes from "./views/CaixinhaDeOracoes/caixinhaDeOracoes";
import DoeAqui from "./views/DoeAqui/doeAqui";
import Home from "./views/Home/home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="vigilhao" element={<Vigilhao />} />
          <Route path="acoes-sociais" element={<AcoesSociais />} />
          <Route path="caixinha-de-oracoes" element={<CaixinhaDeOracoes />} />
          <Route path="doe-aqui" element={<DoeAqui />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
