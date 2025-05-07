import './index.scss';
import Carrossel from '../../components/Carrosel/carrosel';
import Doacoes from '../../components/Doacoes/Doacoes';
import Oracoes from '../../components/Oracoes/oracoes';

const Home = () => {
  return (
    <div>
      <Carrossel />
      <Doacoes />
      <Oracoes />
    </div>
  );
};

export default Home;
