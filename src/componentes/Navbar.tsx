import styles from './Navbar.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={styles.container}>
            <button>
                <Link to='/'>Inicio</Link>
            </button>
        </nav>
    )
}

export default Navbar;