import React from 'react';
import { sanityClient } from '../../utils/sanity';

export default function Tracks({response}) {
    console.log(response)
  return (
    <>
        {response.nome}
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug
    const query = `*[_type == "Trilhas" && slug.current == "${pageSlug}"][0]`
    const response = await sanityClient.fetch(query);

    if(!response) {
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