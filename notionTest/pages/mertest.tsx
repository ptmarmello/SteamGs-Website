// import mermaid from 'mermaid';
import React from 'react';

export default function Mertest() {
    return (
        <>
            <h1>
                How you like me now?
            </h1>

            <div style={{ width:"100%"}} dangerouslySetInnerHTML={{
                __html:`
                <pre class="mermaid">
                    flowchart TD
                        Start(Start) --> Stop
                        click Stop "https://google.com"
                        A --> B & C -.-> Stop
                        Stop>Stop]
                        A((A))
                        C[/C/]
                        B(((B)))
                </pre>
                `
            }} >
            </div>

            {/* <pre className="mermaid" style={{
                width:'100%', paddingLeft:'2rem'
            }}>
                {`
                    flowchart TD
                        Start(Start) --> Stop
                        click Stop "https://google.com"
                        click Start call callAttention()
                        A --> B & C -.-> Stop
                        Stop>Stop]
                        A((A))
                        C[/C/]
                        B(((B)))
                `}
            </pre> */}
        </>
    );
}
