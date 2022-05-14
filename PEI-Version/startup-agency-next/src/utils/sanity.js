// import sanityClient from '@sanity/client';
import { createClient, createImageUrlBuilder } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';


const config ={
    dataset: process.env.next_public_sanity_dataset,
    projectId: process.env.next_public_sanity_project_id,
    apiVersion: '2021-08-31',
    token: 'sanity-auth-token',
    useCdn: process.env.NODE_ENV === 'production',
};

// export const urlFor = source => createImageUrlBuilder(config).image(source);
export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source) {
    return builder.image(source)
}