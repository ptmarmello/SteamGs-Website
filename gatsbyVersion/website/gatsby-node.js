/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path');
const _ = require("lodash");

const {
    createFilePath
} = require("gatsby-source-filesystem");


exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions;
    const ChTemplate = path.resolve("./src/templates/challengeTemplate.js");

    return new Promise((resolve, reject) => {

        resolve(
            graphql(
                `{
                    allMdx {
                        edges {
                          node {
                            frontmatter {
                              ads
                              category
                              date(formatString: "DD/MM/YYYY")
                              description
                              for
                              needs
                              slug
                              tags
                              title
                              type
                            }
                            body
                            timeToRead
                            wordCount {
                              words
                            }
                          }
                        }
                      }
                }`
            ).then(result => {
                if(result.errors){
                    console.log(result.erros);
                    reject(result.erros);
                }
                const items = result.data.allMdx.edges;
                /* Cria um lista de tags */
                // const tagSet = new Set();
                // items.forEach(edge => {
                // const {
                //     node: {
                //     frontmatter: { tags }
                //     }
                // } = edge;
        
                // if (tags && tags !== null) {
                //     tags.forEach(tag => tagSet.add(tag));
                // }
                // });
                
                /* Cria as páginas de tag */
                // const tagList = Array.from(tagSet);
                // tagList.forEach(tag => {
                // createPage({
                //     path: `/tags/${_.kebabCase(tag)}/`,
                //     component: tagTemplate,
                //     context: {
                //     tag
                //     }
                // });
                // });
                
                const posts = items.filter(item => item.node.frontmatter.type === "challenge");
                posts.forEach(({ node }) => {
                createPage({
                    path: `/challenge/${node.frontmatter.slug}`,
                    component: ChTemplate,
                    context: {
                    slug: node.frontmatter.slug,
                    }
                });
                });



            })
        )
    });


}