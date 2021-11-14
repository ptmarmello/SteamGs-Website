// import styled, { css } from 'styled-components';
import styles from './Navbar.module.css';
import Link from 'next/link';
import login from '../../login';
import signup from '../../signup';


export default function Navbar(){

    function dropdownMenu(){
        document.getElementById("dropdownMenu").classList.toggle(styles.show);
    }


    return(
        <nav className={styles.navbar}>
            <div>Logo</div>
            <div>
                <ul>
                    <Link href="/about">
                        Sobre
                    </Link>
                    <Link href="/companies">
                        Para Empresas
                    </Link>
                </ul>
            </div>
            <div className={styles.actions}>
                <Link href="/login">Login</Link>
                <Link href="/signup">Cadastre-se</Link>
            </div>
        </nav>
    )
}

















