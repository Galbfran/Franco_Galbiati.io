import React from 'react'
import styles from './Calculadora.module.css'

interface SingosProps {
    handlerSignos: (num: string) => void;
}

const Signos: React.FC<SingosProps>  = ({handlerSignos}) => {
    let signos: string[] = ['*' , "/" , '+' , '-' ] 


    return(
        <div className={styles.signos}>
            {
                signos.map((num , index) => <button key={index} onClick={()=> handlerSignos(num)}>{num}</button>)
            }
        </div>
    )
}

export default Signos;