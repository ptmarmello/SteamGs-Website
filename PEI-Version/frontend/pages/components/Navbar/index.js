import styled, { css } from 'styled-components';
import styles from './Navbar.module.css';



export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div>Logo</div>
            <div>
                <ul>
                    <li>
                        Sobre
                    </li>
                    <li>
                        Testemunho do senhor
                    </li>
                </ul>
            </div>
            <div className={styles.actions}>
                <a href="/login">Login</a>
                <a href="/signin">Signin</a>
            </div>
        </nav>
    )
}