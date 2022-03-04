import React from 'react';

// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
import Link from 'next/link';
import styles from './Lista.module.css';

import data from '../data/webConfig.json';
import { Button, Card, CardContent, CardActions, Divider, Paper } from '@mui/material';
import { sanityClient } from '../../utils/sanity';


function Lista({tracks}) {
  // console.log(posts)
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
                            <img src={track.imgSource} alt={track.imgAlt} />
                          <div className={styles.listaCardHeaderDiv}>
                            <h2>{track.title}</h2>
                            <p>{track.description}</p>
                            <p>{track.motivation}</p>
                            <div>
                              <ul>
                                {track.items.map((item, index) => {
                                  return(
                                    <li key={index}>{item}</li>
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

// export async function getStaticProps() {
//     const files = fs.readdirSync(path.join('arqs/trilhas'));
  
//     const posts = files.map(filename => {
//       const markdownWithMeta = fs.readFileSync(path.join('arqs/trilhas', filename), 'utf-8');
//       const { data: frontMatter } = matter(markdownWithMeta);
  
//       return {
//         frontMatter,
//         slug: filename.split('.')[0]
//       }
//     })
  
//     return {
//       props: {
//         posts
//       }
//     }
// }

export async function getServerSideProps() {
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