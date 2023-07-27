import Navbar from "./Navbar"
import styles from './Header.module.css'

const Header = () => {
    return(
        <header className={styles.container}>
            <h1><a href="https://www.linkedin.com/in/franco-galbiati/">Galbiati Franco</a></h1>
            <Navbar/>
        </header>
    )
}

export default Header;