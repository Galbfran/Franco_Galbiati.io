import styles from './ToDoList.module.css';
import React from "react";



const TareasPendientes = ({ TareasProps , handlerRealizado , index}) => {
    const { tarea, estado, creacion, estimado } = TareasProps;
    return (
        <div className={styles.tarea}>
            <p>{tarea}</p>
            <p>{estado}</p>
            <p>{creacion}</p>
            <p>{estimado}</p>
            { (estado === 'pendiente') && <button onClick={()=> handlerRealizado(index)}>realizada</button>}
        </div>
    );
}

export default TareasPendientes;
