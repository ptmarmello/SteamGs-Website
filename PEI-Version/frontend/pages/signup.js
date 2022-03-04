import React, { useCallback, useEffect, useState } from 'react';
// import { AiOutlineGoogle } from "react-icons/ai";
import { GoArrowRight, GoMarkGithub } from "react-icons/go";
import { supabase } from "../utils/supabaseClient";
import Router from 'next/router';
import { Button } from '@mui/material';
import Link from 'next/link';
import Head from 'next/head'

import styles from '../styles/Signup.module.css';
import { signInWithGithub } from '../utils/login';

function signup(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [loading, setLoading] = useState(true);

    // async function signInWithGithub() {    
    //     try {
    //         setLoading(true);
    //         const { error } = await supabase.auth.signIn({
    //         provider: 'github',
    //         });
    //         if (error) throw error;
    //     } catch (error) {
    //         alert(error.error_description || error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    //     Router.push({
    //         pathname:'/trilhas',
    //     })
    // }

    return (        
        <div className={styles['register-container']}>
            <Head>
                <title>Steam Groups | Signup</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles['contain']}>
                <section>
                    <h1>Cadastro</h1>
                    <p>Estamos procurando pessoas que se envolvam, sejam dedicadas e tenham o espírito de mudança assim como a gente!
                        Se deseja saber mais sobre nossa visão e sobre nosso espírito de mudança: 
                    </p>
                </section>
                <section>
                    <form onSubmit={ alert("not ready for email yet")}>
                            <input
                                type="text"
                                name="email"
                                placeholder="Seu email"
                                onChange={
                                    (e) => {
                                        setEmail(e.target.value);
                                    }
                                }
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Sua senha"
                                onChange={
                                    (e) => {
                                        setPassword(e.target.value);
                                    }

                                }
                            />
                            <input
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirme sua senha"
                                onChange={
                                    (e) => {
                                        setConfirmPassword(e.target.value);
                                        // handlePasswordChange(e.target.value);
                                    }
                                }
                            />
                    </form>
                        <>
                            <Link href='/login'>
                                <Button>
                                    Já possuo uma conta
                                        <GoArrowRight />
                                </Button>
                            </Link>
                        </>
                        <section style={{display:'flex', paddingRight:'0'}}>
                            <div className={ styles['sign-Button'] }>
                                <button className={styles.signupButton} type='submit' >
                                    Signup
                                </button>   
                                <button onClick={ signInWithGithub() }>
                                    <GoMarkGithub className={styles.icons} />
                                </button>
                            </div>
                        </section>
                </section>
            </div>
        </div>
    );
}

export default signup;