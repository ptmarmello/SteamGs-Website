import React from 'react';
import { sanityClient } from '../../utils/sanity';

export default function Challenge({response}) {
//   console.log(response[0].todoSummup[0].children[0].text);
  return (
    <>
        {response[0].todoSummup.map((item, index) => (
            <div key={index}>
                {/* {console.log(item)} */}
                {item.children.map((item, index) => (
                    <li key={index}>
                        {item.text}
                    </li>
                ))}
            </div>
        ))}
    </>
  );
}


export const getServerSideProps = async () => {
    const query = '*[_type == "challenges"]';
    const response = await sanityClient.fetch(query);

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