import './App.scss'
import Header from "./components/Header/header";
import Footer from './components/Footer/footer';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Aqui será renderizada a view conforme a rota */}
      </main>
      <Footer />
    </>
  );
}

export default App;
