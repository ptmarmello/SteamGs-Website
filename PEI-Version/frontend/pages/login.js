import React from 'react';
import {useForm} from 'react-hook-form';
import { AiOutlineGoogle } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link';
import { Button } from '@mui/material';
import { supabase } from "../utils/supabaseClient";

import styles from '../styles/Signup.module.css';
import data from './data/webConfig.json';

function LoginPage(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [Loading, setLoading] = React.useState(true);

    // async function submitErrorFunction(e){
    //     e.preventDefault();
    //     if(password !== confirmPassword){
    //         alert("Passwords do not match!");
    //     }
    // }

    async function signInWithGithub() {    
        try {
            setLoading(true);
            const { error } = await supabase.auth.signIn({
            provider: 'github',
            });
            if (error) throw error;
        } catch (error) {
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
            props.router.push('/trilhas');
        }
        Router.push({
            pathname:'/trilhas',
        })
    }

    return (        
        <div className={styles['register-container']}>
            <div className={styles['contain']}>
                <section>
                    <h1>Login</h1>
                    <p>{data.components.login.paragraph}</p>
                </section>
                <form onSubmit={ handleSubmit() }>
                    <input placeholder='Seu email' {...register("example", { required: true } )} type="email" />
                    <input placeholder='Sua senha' {...register("exampleRequired", { required: true })} type="password" />
                    {errors.exampleRequired && <span>This field is required</span>}
                        <>
                            <Link href='/signup' passHref="/signup">
                                <Button>
                                    Quero criar uma conta
                                        <GoArrowRight />
                                </Button>
                            </Link>
                        </>
                    <section style={{display:'flex', paddingRight:'0'}}>
                        <div className={ styles['sign-Button'] }>
                            <button className={styles.signupButton} type='submit' >
                                Entrar
                            </button>
                            {/* <button>
                                <AiOutlineGoogle className={styles.icons} />
                            </button> */}
                            <button onClick={ () => { signInWithGithub() } }>
                                <GoMarkGithub className={styles.icons}  />
                            </button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;