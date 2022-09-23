import React from 'react'
import { supabase } from '../src/apis/client'


export default function Profile({ user }) {
//   const [profile, setProfile] = useState(null)
//   const router = useRouter()
//   useEffect(() => {
//     fetchProfile()
//   }, [])
//   async function update() {
//     const { user, error } = await supabase.auth.update({ 
//       data: {
//         city: "New York"
//       } 
//     })
//     console.log('user:', user);
//   }
//   async function fetchProfile() {
//     const profileData = await supabase.auth.user()
//     console.log("profileData: ", profileData)
//     if (!profileData) {
//       router.push('/sign-in')
//     } else {
//       setProfile(profileData)
//     }
//   }
//   async function signOut() {
//     await supabase.auth.signOut()
//     router.push('/sign-in')
//   }
//   if (!profile) return null

    console.log({ user })
  return (
    <>
        <div>Profile</div>
{/*         
      <button onClick={signOut}>Sign Out</button>
      <button onClick={update}>Set Attribute</button> */}
    </>

  )
}


export async function getServerSideProps({ req }) {
    const { user } = await supabase.auth.api.getUserByCookie(req)
  
    if (!user) {
      return {
        props: {},
        redirect: { 
          destination: '/' 
        } 
      }
    }
  
    return { props: { user } }
  }