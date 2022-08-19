import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Forms';
import Lista from '../components/List';
import { ITarefa } from '../types/tarefas';
import style from './app.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
