import styles from './ToDoList.module.css'
import TareasPendientes from './Tareas'
import PostTareas from './PostTareas'
import obtenerHoraActual from './horaActual'
import TextoToDo from './Texto'
import Contacto from '../Inicio/Contacto'
import {useState} from 'react'



const ToDoList = () => {
    const [tareas , setTareas] = useState([])
    const [tareasRealizada , setTareasRealizda] = useState([])

    const handlerSubmit = (tarea , tiempo) => {
        const nuevaTarea = {
            tarea: tarea,
            estado: 'pendiente',
            creacion: obtenerHoraActual(),
            estimado: tiempo
        };
        setTareas([...tareas, nuevaTarea]);
    }

    const handlerRealizado = (index) => {
        const tareaRealizada = tareas[index];
        tareaRealizada.estado = 'realizada';
        tareaRealizada.estimado = obtenerHoraActual()
    
        setTareas((prevTareas) => {
            const newTareas = [...prevTareas];
            newTareas.splice(index, 1);
            return newTareas;
        });
    
        setTareasRealizda((prevTareasRealizadas) => [...prevTareasRealizadas, tareaRealizada]); // Aquí debe ser setTareasRealizda
    }
    

    return(
        <article className={styles.article}>
            <section className={styles.section}>
                <TextoToDo/>
            </section>
            <section className={styles.section}>
                <PostTareas handlerSubmit={handlerSubmit}/>
            </section>
            <section className={styles.section}>
                <h3>Pendientes:</h3>
                {
                    tareas.map((tarea , index) => <TareasPendientes TareasProps={tarea} key={index} index={index} handlerRealizado={handlerRealizado}/>)
                }
            </section>
            <section className={styles.section}>
                <h3>Realizadas:</h3>
                {
                    tareasRealizada.map((tarea , index) => <TareasPendientes TareasProps={tarea} key={index} handlerRealizado={handlerRealizado}/>)
                }
            </section>
            <section className={styles.section}>
                <Contacto/>
            </section>
        </article>
    )
}

export default ToDoList