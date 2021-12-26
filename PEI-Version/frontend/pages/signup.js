import React from 'react';
import { AiOutlineGoogle } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";

import styles from '../styles/Signup.module.css';

function signup(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    async function handleSubmit(e){
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords do not match!");
        }

        
    }

    function handlePasswordChange(e){
        if(confirmPassword !== password){
            console.log('passwords do not match');
        }
    }

    return (        
        <div className={styles['register-container']}>
            <div className={styles['contain']}>
                <section>
                {/* <button className={styles['signupButton']}>
                    Retornar
                </button> */}
                    {/* <img src="#" className="logo" alt="Welcome. We've been expecting you"/> */}
                    <h1>Cadastro</h1>
                    <p>Estamos procurando pessoas que se envolvam, sejam dedicadas e tenham o espírito de mudança assim como a gente!
                        Se deseja saber mais sobre nossa visão e sobre nosso espírito de mudança: 
                        {/* <Link className="aboutme-link" to="/">Veja aqui!</Link> */}
                    </p>
                </section>
                <form onSubmit={() => {handleSubmit()}}>
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
                    <section style={{display:'flex', paddingRight:'0'}}>
                        <div className={ styles['sign-Button'] }>
                            <button className={styles.signupButton} type='submit' >
                                Signup
                            </button>
                            <button>
                                <AiOutlineGoogle className={styles.icons} />
                            </button>
                            <button>
                                <GoMarkGithub className={styles.icons} />
                            </button>
                                
                        </div>
                    </section>
                </form>
            </div>
        </div>
    );
}

export default signup;