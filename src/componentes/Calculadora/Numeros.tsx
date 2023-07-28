import React from 'react'
import styles from './Calculadora.module.css'

interface NumerosProps {
    handlerNumeros: (num: string) => void;
}


const Numeros: React.FC<NumerosProps> = ({handlerNumeros}) => {
    let numeros: string[] = ['9' , "8" , '7' , '6' , '5' ,'4' ,'3' ,'2' ,'1' ] 


    return(
        <div className={styles.numeros}>
            {
                numeros.map((num , index) => <button key={index} onClick={() => handlerNumeros(num)}>{num}</button>)
            }
        </div>
    )
}

export default Numeros