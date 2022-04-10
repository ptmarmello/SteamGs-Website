import React from 'react';
import {useForm} from 'react-hook-form';
// import { AiOutlineGoogle } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link';
import { Button } from '@mui/material';
import { supabase } from "../utils/supabaseClient";

import styles from '../styles/Signup.module.css';
import data from './data/webConfig.json';

import { signInWithGithub, signInWithEmail } from '../utils/login';

function LoginPage(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [Loading, setLoading] = React.useState(true);

    return (        
        <div className={styles['register-container']}>
            <div className={styles['contain']}>
                <section>
                    <h1>Login</h1>
                    <p>{data.components.login.paragraph}</p>
                </section>
                <form>
                    <input placeholder='Seu email' {...register("example", { required: true } )} type="email" />
                    <input placeholder='Sua senha' {...register("exampleRequired", { required: true })} type="password" />
                    {errors.exampleRequired && <span>This field is required</span>}
                        <>
                            <Link href='/signup'>
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
                            <button onClick={ signInWithGithub() }>
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

export async function getServerSideProps() {

    let user = await supabase.auth.api.getUser();
    if (user.user !== null) {
      return{
        redirect: {
          permanent: true,
          destination: '/tracks',
        },
        props:{
  
        }
      };
    }
    return{
        props:{
        
        }
    }
}