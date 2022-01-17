import React from 'react';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from './Lista.module.css';

import data from '../data/webConfig.json';

function Lista() {
    return (
        <div className={styles.container}>
          <nav>
            vai ter um Navbar aqui
          </nav>
          <main className={styles['mainDiv']}>
            <div className={styles.divHeader}>
              <h1 className={styles.headerText}>Trilhas</h1>
            </div>
            <section className={styles.mainSection}>
              {
                data.trails.map((trail, index) => {
                  return(
                    <div className={styles.listaCard} key={index}>
                      <div className={styles.listaCardDiv}>
                        <img src={trail.imgSource} alt={trail.imgAlt} />
                        <div className={styles.listaCardHeaderDiv}>
                          <h2>{trail.title}</h2>
                          <p>{trail.description}</p>
                          <p>{trail.motivation}</p>
                          <div>
                            <ul>
                              {trail.items.map((item, index) => {
                                return(
                                  <li key={index}>{item}</li>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Link href={`/trilhas/${trail.slug}`}>
                          Acessar Trilha
                        </Link>
                      </div>
                    </div>
                  )
                })

              }
            </section>
          </main>
          <div>
            Não sabe por onde começar? Faça nosso teste
            <span>
              lala
            </span>
            <button>Entre aqui</button>
          </div>
          <section>
            
          </section>
      </div>
    );
}

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('arqs/trilhas'));
  
    const posts = files.map(filename => {
      const markdownWithMeta = fs.readFileSync(path.join('arqs/trilhas', filename), 'utf-8');
      const { data: frontMatter } = matter(markdownWithMeta);
  
      return {
        frontMatter,
        slug: filename.split('.')[0]
      }
    })
  
    return {
      props: {
        posts
      }
    }
  }

export default Lista;