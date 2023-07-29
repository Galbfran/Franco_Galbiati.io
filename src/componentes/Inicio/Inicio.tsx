import styles from './Inicio.module.css'
import 'animate.css';
import Tecnologias from './Tecnologias';
import Contacto from './Contacto';

const Inicio = () => {
    return(
        <article className={styles.article}>
            <h2 ><a href="https://github.com/Galbfran" target="_blank">Desarrollador Web</a></h2>
            <h3>Javascript | Html | Css | React-js | Redux | Node-js</h3>
            <section className={styles.section}>
                <p>Desarrollador Full Stack con formación en Henry, donde estoy estudiando para convertirme en un 
                experto en desarrollo web.
                Mi formación en Henry me ha permitido adquirir competencias valiosas, como trabajar en equipo 
                de manera colaborativa y analizar datos de manera eficiente. Además, estoy especializado en el 
                desarrollo de aplicaciones web, tanto en el Front-end como en el Back-end. Mis conocimientos 
                incluyen metodologías ágiles, GIT, estructura de datos, algoritmos y frameworks CSS, entre 
                otros.
                </p>
            </section>
            <section className={styles.section}>
                <h3>Tecnologias Aprendidas:</h3>
                <div>
                    <Tecnologias/>
                </div>
            </section>
            <section className={styles.section}>
                <h3>Links de contacto:</h3>
                <Contacto/>
            </section>
        </article>
    )
}

export default Inicio;