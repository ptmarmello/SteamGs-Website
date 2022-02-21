import React from 'react';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import LinearStepper from '../components/Stepper';

const components = { LinearStepper }

function Trilha({info, content, children}) {
    return (
        <>
            <Head>
                <title>{info.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 >
                    {info.title}
                </h1>    
                <p>
                    {info.description}
                </p>
            </main>
            <section>
                <MDXRemote {...content} components={components}/>
            </section >
            <footer >
                {/* {children} */}
                {/* <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a> */}
            </footer>
        </>
    );
}

export default Trilha;