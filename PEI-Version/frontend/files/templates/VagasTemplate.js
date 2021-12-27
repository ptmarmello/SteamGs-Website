import { MDXRemote } from "next-mdx-remote";

function Vagas({title, content}) {
    return (
        <div>
            <h1>{title}</h1>
            <MDXRemote {...content}/>
        </div>
    );
}

export default Vagas;
