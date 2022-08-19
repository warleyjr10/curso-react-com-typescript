import { ITarefa } from '../../types/tarefas';
import Item from './Item';
import style from './list.module.scss';

// metodo usando function
export default function Lista({tarefas} : {tarefas : ITarefa[]}){
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia:</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                    key={index}
                    {...item}
                    />
                ))}
            </ul>

        </aside>
    )
}