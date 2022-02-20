import React from 'react';
import { sanityClient } from '../../sanity';

export default function Challenge({response}) {
  console.log(response);
  return (
    <>
        page
    </>
  );
}


export const getServerSideProps = async () => {
    const query = `*[_type == "challenges"]`;
    const response = await sanityClient.fetch(query)

    if(!response.length) {
        // throw new Error('Failed to fetch sanity data');
        return{
            props:{
                response: []
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