import React from "react";
import './style.scss';

// metodo usando class
class Botao extends React.Component{
    render(): React.ReactNode {
        return(
            <button className="botao">
                Botão
            </button>
        )
    }
}

export default Botao;