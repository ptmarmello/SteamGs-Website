// import sanityClient from '@sanity/client';
import { createClient, createImageUrlBuilder } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';


const config ={
    dataset: "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
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