import { NavLink } from "react-router-dom"
import img from '../assets/LogoCS.png'

import styles from './Header.module.css'

function Header(){

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <NavLink to="/">
                <img src={img} alt="Logo da empresa Code Summit" />
                </NavLink>
            </div>
            <nav className={styles.headerNav}>
                <ul className={styles.headerList}>
                    <li><NavLink to="/" className={({isActive}) => `${isActive ? styles.active : ''} ${styles.navLink}`}>Home</NavLink></li>
                    <li><NavLink to="/sobre" className={({isActive}) => `${isActive ? styles.active : ''} ${styles.navLink}`}>Sobre Nós</NavLink></li>
                    <li><NavLink to="/contato" className={({isActive}) => `${isActive ? styles.active : ''} ${styles.navLink}`}>Contato</NavLink></li>
                    <li><NavLink to="/projects" className={({isActive}) => `${isActive ? styles.active : ''} ${styles.navLink}`}>Informações</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header