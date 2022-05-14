import React from 'react';
import { sanityClient } from '../../utils/sanity';
// import { Router } from 'next/router';
import { supabase } from '../../utils/supabaseClient';
import { urlFor } from '../../utils/sanity';
import { Divider } from '@mui/material';

export default function Tracks({response}) {
    console.log(response,'response');
    let Nome = response.nome
    let descricao = response.descricao
    let motivacao = response.motivacao
    let tags = response.tags
    let mainImage = response.mainImage
    let etapas = response.etapas

  return (
    <>
      <img src={ urlFor(mainImage.image).width(100).url() } alt={mainImage.alt} />
      <h1>{Nome}</h1>
      <p>{descricao}</p>
      <p>{motivacao}</p>
      {
        tags.map((tag, index) => {
          return(
            <div key={index}>
              <h2>{tag.nome}</h2>
              {/* <Divider sx={{width: '50%', margin:'0 auto', marginBottom: '1rem'}}
               color='grey' variant='middle' /> */}
            </div>
          )
        })
      }
      <Divider color='grey' variant='middle' sx={{margin: '1rem'}} />

      {
        etapas.map((etapa, index) => {
          return(
            <div key={index}>
              <h2>{etapa.nome}</h2>
              {/* { etapa.processos &&
                etapa.processos.map((processo, index) => {
                  return(
                    <div key={index}>
                      {console.log(processo)}
                    </div>
                  )
                })

              } */}
              <Divider sx={{width: '50%', margin:'0 auto', marginBottom: '1rem'}}
               color='grey' variant='middle' />
            </div>
          )
        })
      }
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
      processos->[]{
        ...
      },
    },
  }`

  const response = await sanityClient.fetch(query);
  // let user = await supabase.auth.api.getUser();
  // if (user.user !== null) {
  //   return{
  //     redirect: {
  //       permanent: true,
  //       destination: '/tracks',
  //     },
  //     props:{

  //     }
  //   };
  // }

    if(!response) {
        return{
            props:{
              response : []
            }
        }
      } else{
        return{
            props:{
              response
            }
        }
    }

}