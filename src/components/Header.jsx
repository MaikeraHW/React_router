import { NavLink, Route, Routes, BrowserRouter } from "react-router-dom"
import img from '../assets/LogoCS.png'

import styles from './Header.module.css'

function Header(){

    return (
        <BrowserRouter>
        <div className={styles.header}>
            <div className={styles.logo}>
                <NavLink to="/">
                <img src={img} alt="Logo da empresa Code Summit" />
                </NavLink>
            </div>
            <nav className={styles.headerNav}>
                <ul className={styles.headerList}>
                    <li><NavLink to="/" className={styles.navLink}>Home</NavLink></li>
                    <li><NavLink to="/sobre" className={styles.navLink}>Sobre Nós</NavLink></li>
                    <li><NavLink to="/contato" className={styles.navLink}>Contato</NavLink></li>
                    <li><NavLink to="/info" className={styles.navLink}>Informações</NavLink></li>
                </ul>
            </nav>
        </div>
        </BrowserRouter>
    )
}

export default Header