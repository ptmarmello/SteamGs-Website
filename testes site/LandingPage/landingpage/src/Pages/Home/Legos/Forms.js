import React from 'react';
import styled from 'styled-components';


const Forms = styled.form`
    width: 100%;
    height: 100%;

    display: block;
    outline: none;
    padding: 1.5rem;

`;

const InputForms = styled.input`

    width: 88%;
    height: 3rem;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    outline: none;

    margin-bottom: 0.25rem;
    margin-top: 0.25rem;

    ${props => props.check &&`
        width: 3rem;
        margin: 0;
        padding: 0;
        float: right;
        right: 0;

        border-radius: 50%;

        
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    `}
`;

const ButtonForms = styled.button`

    width: 100%;
    height: 3rem;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    background: #e32;

    font-size: 500;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    text-align: center;
    font-size: 1.25em;
`;

export default function Fullforms(){
    return(
        <div className="App-forms">
            <Forms onSubmit={()=>{}}>
                <InputForms type="text" name="Name" id="name_input" placeholder="Name"/>
                <InputForms type="email" name="email" id="email_input" placeholder="Email"/>
                <InputGroup>                    
                    <label for="authorization" >Sim, desejo me candidatar</label>
                    <InputForms type="checkbox" name="auth" id="authorization" value="Yes" check/>
                </InputGroup>
                
                <ButtonForms type="submit">Enviar</ButtonForms>
            </Forms>
        </div>
    );
}