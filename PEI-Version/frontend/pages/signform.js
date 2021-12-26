import React from 'react';
import {useForm} from 'react-hook-form';

import styles from '../styles/SignForm.module.css';
import data from './data/webConfig.json';


function SignForm(props) {

    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // async function submitErrorFunction(){
    //     e.preventDefault();
    //     if(password !== confirmPassword){
    //         alert("Passwords do not match!");
    //     }
    // }

    return (        
        <div className={styles['register-container']}>
            <div className={styles['contain']}>
                <h1>Inscrição</h1>
                <form onSubmit={ handleSubmit() }  >
                    <section>
                        <input placeholder='Nome Completo' {...register("Name", { required: true } )} type="text" />
                        <input placeholder='Data de Nascimento' {...register("exampleRequired", { required: true })} type="date" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <select placeholder='Curso' {...register("courses", { required: true })}>
                            <option value="">Selecione o Curso</option>
                            { data.components.signForm.form.courses.map(course => (
                                <option value={course}>
                                    {course}
                                </option>
                            ) ) }
                        </select>
                        <input placeholder='Sua Universidade' {...register("universidade", { required: true })} type="text" />
                    </section>
                    <section>
                        <input placeholder='lalala1' {...register("lalala1", { required: true })} type="text" />
                        <input placeholder='lalala2' {...register("lalala2", { required: true })} type="text" />
                        {/* <input placeholder='lalala3' {...register("lalala3", { required: true })} type="text" /> */}
                        <input placeholder='lalala0' {...register("lalala0", { required: true })} type="file" />
                    </section>
                </form>
                <section style={{display:'flex', margin:'0 auto', justifyContent:'center'}}>
                    <div className={ styles['sign-Button'] }>
                        <button className={styles.signupButtonLarge} type='submit' >
                            Entrar
                        </button>
                        {/* <button>
                            <AiOutlineGoogle className={styles.icons} />
                        </button>
                        <button>
                            <GoMarkGithub className={styles.icons} />
                        </button> */}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SignForm;