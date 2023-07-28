import React from "react";
import styles from './Calculadora.module.css'

interface ResultsProps {
    handlerResultado: (num: string) => void;
    handlerBorrar: () => void;
    handlerReset: () => void;
    operacion:string
}


const CeroIgual: React.FC<ResultsProps> = ({handlerResultado,handlerReset, handlerBorrar , operacion}) => {
    return(
        <div className={styles.ceroIgual}>
            <button>0</button>
            <button onClick={()=> handlerResultado(operacion)}> = </button>
            <button onClick={() => handlerBorrar()}>C</button>
            <button onClick={()=> handlerReset()}>X</button>
        </div>
    )
}

export default CeroIgual;