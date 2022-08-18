import Cronometro from '../components/Cronometro';
import Formulario from '../components/Forms';
import Lista from '../components/List';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
