import styles from './ToDoList.module.css'
import React  ,{ useState } from "react";

interface SubmitProps{
    handlerSubmit: (tarea:string , tiempo:string) => void;
}

const PostTareas: React.FC<SubmitProps>  = ({handlerSubmit}) => {
    const [tarea, setTarea] = useState('');
    const [tiempo, setTiempo] = useState('');

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Llama a la función 'handlerSubmit' pasándole los valores de tarea y tiempo
        handlerSubmit(tarea, tiempo);
        // Limpia los inputs después de enviar el formulario
        setTarea('');
        setTiempo('');
    };


    return(
        <form  className={styles.form} onSubmit={submit}>
            <div className={styles.input} >
                <label htmlFor="tarea">Tarea</label>
                <input 
                    type="text"
                    id="tarea"
                    value={tarea}
                    onChange={(e) => setTarea(e.target.value)}/>
            </div>
            <div className={styles.input} >
                <label htmlFor="tiempo">Tiempo Estimado</label>
                <input  
                    type="text"
                    id="tiempo"
                    value={tiempo}
                    onChange={(e) => setTiempo(e.target.value)}/>
            </div>
            <div className={styles.input}>
                <button>Crear Tarea</button>
            </div>
        </form>
    )
}

export default PostTareas;