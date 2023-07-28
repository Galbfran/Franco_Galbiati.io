import styles from './Resultado.module.css'

interface numero {
    primerNumero:string;
    segundoNumero:string;
    resultado:string;
    operacion:string
}

const Resultado: React.FC<numero> = ({primerNumero , segundoNumero ,resultado , operacion}) => {



    return(
        <div className={styles.render}>
            <p>{primerNumero}</p>
            <p>{segundoNumero}</p>
            <p className={styles.operacion}>{operacion}</p>
            <p>{resultado}</p>   
        </div>
    )
}

export default Resultado;