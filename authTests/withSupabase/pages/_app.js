import '../styles/globals.css'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../src/apis/client';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {

  const [ authenticated, setAuthenticated ] = useState('not-authenticated');
  const router = useRouter()
  useEffect(() => {
    const {data: authListener} = supabase.auth.onAuthStateChange((event, session) => {
      handleAuthChange(event, session)
      if(event === 'SIGNED_IN'){
        setAuthenticated('authenticated');
        router.push('/profile');
      }

      if(event === 'SIGNED_OUT'){
        setAuthenticated('not-authenticated');
        router.push('/');
      }

    })
    checkUser();
    return () => {
      authListener.unsubscribe();
    }
  }, [])
  
  async function checkUser(){
    const user = await supabase.auth.user();
    if(user){
      setAuthenticated('authenticated');
      router.push('/profile');
    }
  }
  
  async function handleAuthChange(event, session){
    await fetch('/api/auth', {
      method:'POST',
      headers: new Headers({'Content-Type':'application/json'}),
      credentials: 'same-origin',
      body: JSON.stringify({event, session}),
    })
  }



  return(
    <>
      <Component {...pageProps} />
    </>
  )
  
  
}

export default MyApp
