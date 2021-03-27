import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';


export default function ChTemplate({data, props}){
    const usingData = data.mdx.frontmatter;
    const bodyData = data.mdx.body;
    console.log(usingData);
    console.log(bodyData)
    return(
        <div>
            Página funcionando
            <MDXRenderer key={0} children={bodyData}>
          </MDXRenderer>
        </div>
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