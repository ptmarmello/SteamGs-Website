import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState } from 'react';

import {useRouter} from 'next/router';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        SteamGroups
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

// export async function getServerSideProps(){
//   const {
//     data: { user },
//   } = await supabase.auth.getUser()

//   if(!user){
//     return{
//       redirect: {
//         destination: "/wiki", permanent: false
//       },
//     };
//   }

//   return{ props: {  } };
// }

export default function SignInSide() {

  const router = useRouter();
  const [Auth, setAuth] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // const logindata = {
    //   email: data.get('email'),
    //   password: data.get('password'),
    // }

    console.log('email', data.get('email').toString() );
    const formEmail = data.get('email').toString();
    const formPass = data.get('password').toString();
    
    // signInWithEmail(formEmail, formPass);

    Loglog();
    setAuth(true);
  };
  
  async function Signup(){

    // const { data, error } = await supabase.auth.signIn({
    //   email: 'pedro.thiago@v4company.com',
    //   password: 
    // })

    console.log({ data })

    if(data){
      router.push('/')
    }
    else{
      router.push('/login')
    }

  }

  return (
    <>
    { !Auth && 
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className='mx-auto' >
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                    />
                    <h1 className="mt-6 text-center text-4xl font-bold tracking-tight text-white">
                    Ainda não tem uma conta?
                    </h1>
                    {/* <p className="mt-2 text-center text-sm text-gray-600">
                    Or{' '}
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        start your 14-day free trial
                    </a>
                    </p> */}
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                    <div className='min-w-full'>
                        <label htmlFor="email-address" className="sr-only">
                        Email
                        </label>
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block h-16 w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                        Senha
                        </label>
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative block w-full h-16 appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmpassword" className="sr-only">
                        Confirme sua senha
                        </label>
                        <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="relative block w-full h-16 appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Confirm your password"
                        />
                    </div>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center">
                        <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                        Concordo com os termos.
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="/login" className="font-medium text-violet-600 hover:text-violet-500 block">
                        Já tem uma conta?
                        </a>
                    </div>
                    </div>

                    <div className='w-full justify-center grid grid-cols-2 gap-3' >
                        <button className="w-full text-white px-4 py-2 px-md-4 rounded-lg border border-gray-300 bg-[#121214]">
                            Github
                        </button>
                        <button className="w-full px-4 py-2 px-md-4 rounded-lg border border-gray-300 bg-white">
                            Google
                        </button>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="group relative h-14 flex w-full justify-center items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span> */}
                        SignUp
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        
      </Grid>
    </ThemeProvider>
    }
    </>
  );
}





