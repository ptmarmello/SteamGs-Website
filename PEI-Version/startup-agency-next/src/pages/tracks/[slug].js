import React from 'react';
import { sanityClient } from '../../utils/sanity';
// import { Router } from 'next/router';
import { supabase } from '../../utils/supabaseClient';
import { urlFor } from '../../utils/sanity';
import { Divider } from '@mui/material';

export default function Tracks({
  Nome,
  descricao,
  motivacao,
  tags,
  mainImage,
  etapas,
}) {
    console.log(tags,'Tags');
    console.log(etapas,'Etapas');

  return (
    <>
      <img src={ urlFor(mainImage.image).width(100).url() } alt={mainImage.alt} />
      <h1>{Nome}</h1>
      <p>{descricao}</p>
      <p>{motivacao}</p>
      <p>{tags}</p>
      <Divider color='grey' variant='middle' sx={{margin: '1rem'}} />

      {/* {
        etapas.map((etapa, index) => {
          return(
            <div key={index}>
              <h2>{etapa.nome}</h2>
              <Divider sx={{width: '50%', margin:'0 auto', marginBottom: '1rem'}}
               color='grey' variant='middle' />
            </div>
          )
        })
      } */}
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  
  const pageSlug = pageContext.query.slug
  const query = `*[_type == "Trilhas" && slug.current == "${pageSlug}"][0]{
    nome,
    mainImage,
    descricao,
    motivacao,
    tags[]{
      ...,
    },
    etapas[]{
      ...,
      processos->{
        _ref,
        _type,
        _id,
      },
    },
  }`
  const response = await sanityClient.fetch(query);
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

    if(!response) {
        return{
            props:{
              response: []
            }
        }
      } else{
        return{
            props:{
              nome: response.nome,
              mainImage: response.mainImage,
              descricao: response.descricao,
              motivacao: response.motivacao,
              tags: response.tags,
              etapas: response.etapas,
            }
        }
    }

}