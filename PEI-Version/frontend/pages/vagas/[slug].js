// import React from 'react';
import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Vagas from '../../files/templates/VagasTemplate.js';
// import SyntaxHighlighter from 'react-syntax-highlighter'

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('arqs/vagas'));
    
    const paths = files.map(filename => ({
      params: {
        slug: filename.replace('.mdx', '')
      }
    }));
  
    return {
      paths,
      fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('arqs/vagas', slug + '.mdx'), 'utf-8');
    const { data: frontMatter, content } = matter(markdownWithMeta);
    const mdxSource = await serialize(content);
  
    slug = slug.replace(slug, frontMatter.slug);
    return {
      props: {
        frontMatter,
        slug,
        mdxSource
      }
    }
}

const PostPage = ({ frontMatter, mdxSource }) => {
    return (
      <Vagas info={frontMatter} content={mdxSource} />
    )
  }

export default PostPage;