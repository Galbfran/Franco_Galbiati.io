import styles from './CardTecno.module.css'

interface CardTecnoProps {
    img: string; 
    nombre: string; 
}

const CardTecno: React.FC<CardTecnoProps> = ({img , nombre}) => {
    return(
        <div className={styles.container}>
            <img src={img} alt={nombre} />
            <p>{nombre}</p>
        </div>
    )
}

export default CardTecno;