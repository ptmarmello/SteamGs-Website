import React from 'react'
import { supabase } from '../src/apis/client'


export default function Profile({ user }) {
  console.log({ user })
  return (
    <>
      <div>
        Profile
      </div>
    </>
  )
}


// export async function getServerSideProps({ req }) {
//   const { user } = await supabase.auth.api.getUserByCookie(req)

//   if (!user) {
//     return {
//       props: {},
//       redirect: { 
//         destination: '/login' 
//       } 
//     }
//   }

//   return { props: { user } }
// }