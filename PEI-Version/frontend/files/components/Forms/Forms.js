// import styled, { css } from 'styled-components';
import formStyle from './Form.module.css';
import { supabase } from "../../../utils/supabaseClient";
import { useState } from 'react';

var fetch = require('node-fetch');

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormGroup, Typography, FormControlLabel } from '@mui/material';


const CustomTextField = styled(TextField)({
  backgroundColor: 'whitesmoke',
  color: 'white',
  width: '60%',
  margin: '0 auto',
  borderRadius: '8px',
  borderLeft:'1.5px solid #5658DD',
  borderRight:'1.5px solid #5658DD',
  borderBottom:'1.5px solid #5658DD',
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    backgroundColor: '#ffdc',
  },
  ':focus': {
    backgroundColor: '#ffdc',
    color: "#151719"
  },
  ':active': {
    backgroundColor: '#ffdc'
  },
  ':invalid': {
    borderColor: 'red',
  },
  ':valid': {
    borderColor: 'green',
  },
  '& input:valid + fieldset': {
    borderColor: 'transparent',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'transparent',
    borderWidth: 2,
  },
  '& input:invalid:focus + fieldset': {
    borderColor: 'transparent',
    color: 'black'
  },
  '& input:valid:focus + fieldset': {
    borderColor: 'transparent',
  },
  '& input:valid:hover + fieldset': {
    borderColor:'transparent'
  },
  '& input:invalid:hover + fieldset': {
    borderColor:'transparent'
  },
  '& input active + fieldset': {
    borderColor:'transparent'
  },
  "& .MuiFormLabel-root": {
    color: '#5658DD',
  }

})

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
    
    // var url = "https://emailoctopus.com/api/1.6/lists/3e4a35bc-7abf-11ec-96e5-06b4694bee2a/contacts?api_key=7a0fd690-f8ce-40f7-a33a-34d26e236e87";
    // var options = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': 'https://localhost:3000',
    //     },
    //     body: JSON.stringify({
    //         "api_key": process.env.OCTOPUS_API_KEY,
    //         "email_address":email,
    //         "fields":{
    //             "FirstName":name , "LastName":""
    //         }
    //     })
    // };
    // fetch(url, options)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  };

  return (
    <section className={formStyle.formSection}>
        {/* <img alt="Alguma imagem boa" src="https://via.placeholder.com/1080"/> */}
      <Box component="form" autoComplete='on' validate
        sx={{
          '& .MuiTextField-root': { m: 0.5, width: '98%' },
          margin: '0 auto',
          paddingBottom: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Card
          sx={{
            // backgroundColor: '#000d1a',
            backgroundColor: '#151719',
            borderRadius: '16px',
            color: 'white',
            width: '100%',
            // display: 'flex',
            flex: '0 auto',
            // minWidth:'80vw',
          }}
        >
          <CardHeader title="Inscreva-se" subheader="E receba nossas atualizações!" subheaderTypographyProps={{
            color: 'white',
          }} />
          <CardContent>
            <CustomTextField required id="name-input-field"
              label="Nome"
              variant="outlined"
              placeholder='Seu nome'
              type="text"
              InputLabelProps={{
                
              }}
              security='on'
              onChange={(e) => setName(e.target.value)}
            />
            <CustomTextField required id="email-input-field"
              label="Email"
              variant="outlined"
              placeholder='Seu email'
              type="email"
              // helperText="E-mail não é válido"
              
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreed}
                    color="success"
                    onChange={(e) => setAgreed(e.target.checked)}
                    sx={{
                      color: 'white',
                    }}
                  />
                }
                label="Li e aceito os termos de uso"
              />
            </FormGroup>


            <CardActions>
              <Button onClick={(e) => handleSubmit(e) }
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: '40px',
                  alignSelf: 'center',
                  justifySelf: 'center',
                  borderRadius: '8px',
                  color:'#5658DD',
                }}
              >
                Enviar
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
      {/* <form className={formStyle.form} onSubmit={(e) => handleSubmit(e)} >
        <div className={formStyle.formRow} >
          
        </div>
      </form> */}
      

    </section>
  )
}
