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
        handlerSubmit(tarea, tiempo+' minutos');
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
                    placeholder='tarea a realizar'
                    value={tarea}
                    autoComplete="off"
                    onChange={(e) => setTarea(e.target.value)}/>
            </div>
            <div className={styles.input} >
                <label htmlFor="tiempo">Tiempo Estimado</label>
                <input 
                    type="text"
                    id="tiempo"
                    placeholder='minutos'
                    value={tiempo}
                    autoComplete="off"
                    onChange={(e) => setTiempo(e.target.value)}/>
            </div>
            <div className={styles.input}>
                <button>Crear Tarea</button>
            </div>
        </form>
    )
}

export default PostTareas;