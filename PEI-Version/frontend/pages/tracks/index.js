import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './Lista.module.css';

import { urlFor } from '../../utils/sanity';
import { Button, Card, CardContent, CardActions, Divider, Paper } from '@mui/material';
import { sanityClient } from '../../utils/sanity';
import Router from 'next/router';
import { supabase } from '../../utils/supabaseClient';

function Lista({tracks}) {

  console.log(tracks);
    return (
        <div className={styles.container}>
          <nav>
            vai ter um Navbar aqui
          </nav>
          <main className={styles['mainDiv']}>
            <div className={styles.divHeader}>
              <h1 className={styles.headerText}>Trilhas</h1>
              <Divider sx={{width: '80%', margin:'0 auto', marginBottom: '1rem'}}
               color='grey' variant='middle' />
            </div>
            <section className={styles.mainSection}>
              { tracks &&
                tracks.map((track, index) => {
                  return(
                    <div className={styles.listaCard} key={index}>

                      <Link href={`/tracks/${encodeURIComponent(track.slug.current)}`}
                        as={`/tracks/${encodeURIComponent(track.slug.current)}`}
                      >
                        <Card key={index}
                          sx={{backgroundColor: '#ccd1', color: '#000', borderRadius: '10px', width: '80%', margin: '0 auto', marginBottom: '20px',
                          cursor: 'pointer', '&:hover': {backgroundColor: '#fff9', color: 'black'}, transition: 'background-color 0.4s ease-in-out'
                        }}>
                          <CardContent>
                            <div className={styles.listaCardDiv}>
                              <img src={ urlFor(track.mainImage.image).width(100).url() } alt={track.mainImage.alt} />
                              <div className={styles.listaCardHeaderDiv}>
                                <h2>{track.nome}</h2>
                                <p>{track.descricao}</p>
                                <p>{track.motivacao}</p>
                                <div>
                                  <ul>
                                    {track.tags.map((item, index) => {
                                      return(
                                        <li key={index} style={{ textTransform:'capitalize',paddingRight:'10px' }}>{item}</li>
                                        )
                                      })}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  )
                })
              }
            </section>
          </main>
          {/* <Card 
            sx={{width: '90%', margin:'0 auto'}}
            color='#fff669'
            >
              <CardContent>
                Não sabe por onde começar? Faça nosso teste
                <Button>Entre aqui</Button>
              </CardContent>
            
          </Card> */}
          <footer>
            footer  
          </footer>
      </div>
    );
}

export async function getServerSideProps() {

  // let user = await supabase.auth.api.getUser();
  // if (user.user === null) {
  //   return{
  //     redirect: {
  //       permanent:false,
  //       destination: '/',
  //     },
  //     props:{

  //     }
  //   };
  // }


  const query = '*[_type == "Trilhas"]';
  const tracks = await sanityClient.fetch(query);

  if(!tracks.length) {
      // throw new Error('Failed to fetch sanity data');
      return{
          props:{
            tracks: []
          }
      }
    } else{
      return{
          props:{
              tracks
          }
      }
  }
}
    
export default Lista;