import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import App from '../safe/layouts/AppLayout';
import Navbar from '../components/Navbar';
import ChallengeHero from '../components/ChallengeHero';

export default function ChTemplate({data, props}){
    const usingData = data.mdx.frontmatter;
    const bodyData = data.mdx.body;
    console.log(usingData);
    console.log(bodyData)
    return(
      <App>
        <Navbar/>
        <ChallengeHero usingData={usingData} />  
        <MDXRenderer key={0} children={bodyData}></MDXRenderer>
      </App>
    );
}

export const pageQuery = graphql`
query($slug: String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      body
      frontmatter {
        ads
        category
        description
        for
        needs
        slug
        tags
        title
        type
        date(formatString: "DD-MM-YYYY")
      }
      timeToRead
      slug
      wordCount {
        words
      }
    }
  }
`