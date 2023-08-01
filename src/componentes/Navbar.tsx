import styles from './Navbar.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={styles.container}>
            <button>
                <Link to='/'>Inicio</Link>
            </button>
            <button>
                <Link to='/calculadora'>Calculadora</Link>
            </button>
            <button>
                <Link to='/todolist'>ToDoList</Link>
            </button>
            <button>
                <Link to='/fetchdatos'>Fetch Datos</Link>
            </button>
        </nav>
    )
}

export default Navbar;