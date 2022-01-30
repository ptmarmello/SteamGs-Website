import styled, { css } from 'styled-components';
import formStyle from './Form.module.css';
import { supabase } from "../../../utils/supabaseClient";
import { useState } from 'react';
const MainButton = styled.button`
  width: 200px;
  height: 56px;
  border-radius: 20px;
  margin: 10px 10px;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  ${props => props.right && css`
    background-color: #5658DD;
    &:hover{
      background-color: #151719;
      color: white;
      transform: scale(1.05);
    }
    &:active{
      background-color: #fff;
      color: black;
      transform: scale(1);
    }
  `};

  ${props => props.left && css`
    /* background-color: #5658DD; */
    &:hover{
      background-color: #5658DD;
      transform: scale(1.05);
    }
    &:active{
      background-color: #151719;
      color: white;
      transform: scale(1);
    }
  `};

  ${props => props.submit && css`
    height: 40px;
    width: 120px;
    border-radius: 5px;
    /* position: absolute; */
  `}

`;

export default function Forms(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    if(name === '' || email === ''){
      alert("Por Favor complete os campos corretamente!");
      return;
    }
    if(!agreed){
      alert("Por Favor aceite os termos de uso!");
      return;
    }
    
    if (email.length < 10){
      alert("E-mail não é válido");
      return;
    }
    const { error } = await supabase
      .from("pre-register")
      .insert([{ name, email, agreed: true }]);
    if (error) {
      console.log(error.message);
      alert("Erro ao enviar formulário");
    } else {
      alert("Cadastro realizado com sucesso!");
    }
  };

  return (
    <section className={formStyle.formSection}>
        {/* <img alt="Alguma imagem boa" src="https://via.placeholder.com/1080"/> */}
      <form className={formStyle.form} onSubmit={(e) => handleSubmit(e)} >
        <div className={formStyle.formRow} >
          <label htmlFor="name-input-field" className={formStyle.inputLabel} >
            <input
              className={formStyle.input}
              autoComplete="on"
              type="text"
              id="name-input-field"
              placeholder="Seu nome"
              aria-label="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="email-input-field" className={formStyle.inputLabel} >
            <input
              className={formStyle.input}
              autoComplete="on"
              type="email"
              id="email-input-field"
              placeholder="Se registre com seu email"
              aria-label="Your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <MainButton submit type={"submit"}>
                Enviar
            </MainButton>
          </label>
        </div>
      </form>
    </section>
  )
}
