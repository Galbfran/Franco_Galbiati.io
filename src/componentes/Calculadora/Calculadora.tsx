import styles from './Calculadora.module.css'
import CeroIgual from './CeroIgual';
import Numeros from './Numeros';
import Resultado from './Resultado';
import Signos from './Signos';
import Contacto from '../Inicio/Contacto';
import Texto from './Texto';

import {useState } from 'react'

const Calculadora = () => {
    let [primerNumero, setPrimerNumero] = useState('')
    let [segundoNumero, setSegundoNumero] = useState('')
    const [operacion , setOperacion ] = useState('')
    const [selecionar , setSelecionar] = useState(true)
    const [resultado , setResultado] = useState('')

    const handlerNumeros = (num:string) => {
        if(selecionar){setPrimerNumero(primerNumero + num)}
        else{setSegundoNumero(segundoNumero + num)}
    }

    const handlerOperacion = (signo:string) => {
        setOperacion(signo)
        setSelecionar(false)
    }

    const handlerBorrar = () =>{
        if (selecionar) {
            setPrimerNumero(primerNumero.slice(0, primerNumero.length - 1));
        } else {
            setSegundoNumero(segundoNumero.slice(0, segundoNumero.length - 1));
        }
    }

    const handlerReset = () => {
        setPrimerNumero('');
        setSegundoNumero('');
        setOperacion('');
        setResultado('');
        setSelecionar(true)
    }

    const handlerResultado = (operacion:string) => {
        let primNum = parseInt(primerNumero)
        let segundoNum = parseInt(segundoNumero)
        let result = 0
        switch(operacion){
            case "+":
                result= primNum + segundoNum;
                setResultado(result.toString())
                return
            case "-":
                result= primNum - segundoNum;
                setResultado(result.toString())
                return
            case "*":
                result= primNum * segundoNum;
                setResultado(result.toString())
                return
            case "/":
                result= primNum / segundoNum;
                setResultado(result.toString())
                return
            default:
                throw new Error(`Operador no válido: ${operacion}`);
        }
    }

    return(
        <article className={styles.article}>
            <section className={styles.section}>
                <Texto/>
            </section>
            <section className={styles.section}>
                <Resultado  primerNumero={primerNumero} segundoNumero={segundoNumero} operacion={operacion} resultado={resultado}/>
                <div className={styles.container}>
                    <Numeros handlerNumeros={handlerNumeros}/>
                    <Signos handlerSignos={handlerOperacion}/>
                </div>
                <CeroIgual operacion={operacion} handlerResultado={handlerResultado} handlerBorrar={handlerBorrar} handlerReset={handlerReset} handlerNumeros={handlerNumeros} />
            </section>
            <div className={styles.section} >
                <Contacto/>
            </div>
        </article>
    )
}

export default Calculadora;