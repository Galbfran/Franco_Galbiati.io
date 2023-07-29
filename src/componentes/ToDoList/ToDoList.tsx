import styles from './ToDoList.module.css'
import TareasPendientes from './Tareas'
import PostTareas from './PostTareas'
import obtenerHoraActual from './horaActual'
import TextoToDo from './Texto'
import Contacto from '../Inicio/Contacto'
import {useState} from 'react'

interface Tareas{
    tarea:string,
    estado:string
    creacion:string,
    estimado:string
}

const ToDoList = () => {
    const [tareas , setTareas] = useState<Tareas[]>([])
    const [tareasRealizada , setTareasRealizda] = useState<Tareas[]>([])

    const handlerSubmit = (tarea:string , tiempo:string) => {
        const nuevaTarea = {
            tarea: tarea,
            estado: 'pendiente',
            creacion: obtenerHoraActual(),
            estimado: tiempo
        };
        setTareas([...tareas, nuevaTarea]);
    }

    const handlerRealizado = (index:number) => {
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
                    tareas.map((tarea , index) => <TareasPendientes  
                        tarea={tarea.tarea}
                        estado={tarea.estado}
                        creacion={tarea.creacion}
                        estimado={tarea.estimado}
                        handlerRealizado={handlerRealizado} // Pasar la función handlerRealizado si es necesaria
                        index={index}
                    />)
                }
            </section>
            <section className={styles.section}>
                <h3>Realizadas:</h3>
                {
                    tareasRealizada.map((tarea , index) => <TareasPendientes 
                        key={index}
                        tarea={tarea.tarea}
                        estado={tarea.estado}
                        creacion={tarea.creacion}
                        estimado={tarea.estimado}
                        handlerRealizado={handlerRealizado} // Pasar la función handlerRealizado si es necesaria
                        index={index}
                    />)
                }
            </section>
            <section className={styles.section}>
                <Contacto/>
            </section>
        </article>
    )
}

export default ToDoList