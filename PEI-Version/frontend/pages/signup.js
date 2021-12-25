import React from 'react';
import { AiOutlineGoogle } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";

import styles from '../styles/Signup.module.css';

function signup(props) {

    async function handleSubmit(e){
        e.preventDefault();
        alert('Sorry bro');
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
                <form onSubmit={props.handleSubmit}>
                    
                        {/* <label>Email:</label> */}
                        <input
                            type="text"
                            name="email"
                            placeholder="Seu email"
                            onChange={props.handleChange}
                        />
                    
                    
                        {/* <label>Password:</label> */}
                        <input
                            type="password"
                            name="password"
                            placeholder="Sua senha"
                            onChange={props.handleChange}
                        />
                    
                    
                        {/* <label>Confirm Password:</label> */}
                        <input
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirme sua senha"
                            onChange={props.handleChange}
                        />
                    
                    
                    <section style={{display:'flex', paddingRight:'0'}}>
                        {/* <div>
                            or signup with:
                        </div> */}
                        <div className={ styles['sign-Button'] }>
                            <button className={styles.signupButton}>
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