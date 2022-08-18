import React from "react";
import style from './buttons.module.scss';

// metodo usando class
class Botao extends React.Component<{ children: any }>{
    render(): React.ReactNode {
        return(
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;