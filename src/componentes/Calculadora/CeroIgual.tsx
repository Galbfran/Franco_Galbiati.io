import React from "react";
import styles from './Calculadora.module.css'

interface ResultsProps {
    handlerResultado: (num: string) => void;
    handlerBorrar: () => void;
    handlerReset: () => void;
    handlerNumeros: (num:string) => void;
    operacion:string
}


const CeroIgual: React.FC<ResultsProps> = ({handlerResultado,handlerReset, handlerBorrar , handlerNumeros, operacion}) => {
    return(
        <div className={styles.ceroIgual}>
            <button onClick={()=> handlerNumeros('0')}>0</button>
            <button onClick={()=> handlerResultado(operacion)}> = </button>
            <button onClick={() => handlerBorrar()}>C</button>
            <button onClick={()=> handlerReset()}>X</button>
        </div>
    )
}

export default CeroIgual;