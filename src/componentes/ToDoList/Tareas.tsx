import styles from './ToDoList.module.css';

interface Tareas{
    tarea:string,
    estado:string
    creacion:string,
    estimado:string
}

interface Index{
    index:number
}

interface Handler{
    handlerRealizado: (num:number) => void;
}


const TareasPendientes: React.FC<Tareas & Handler & Index> = ({ tarea, estado, creacion, estimado, handlerRealizado, index }) => {
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
