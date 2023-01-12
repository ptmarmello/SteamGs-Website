export default {
    name:'projects',
    title:'Projects',
    type:'document',
    fields:[
        {
            name: 'id',
            title: 'ID',
            type: 'number',
            options: {
                unique:'true'
            },
        },
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'difficulty',
            title:'Difficulty',
            type:'string',
            options:{
                list:[
                    {title:'Easy',value:'easy'},
                    {title:'Medium',value:'medium'},
                    {title:'Hard',value:'hard'}
                ],
                layout:'radio'
            }
        },
        {
            name:'description',
            title: 'Description',
            type:'text'
        },
        {
            name: 'companyOffering',
            title: 'Empresa Oferecedora',
            type: 'string',
        },
        {
            name: 'companyOfferingLogo',
            title: 'Logo da Empresa Oferecedora',
            type: 'image',
        },
        {
            name: 'companyOfferingDescription',
            title: 'Descrição da Empresa Oferecedora',
            type: 'text',
        },
        {
            name: 'companyOfferingWebsite',
            title: 'Website da Empresa Oferecedora',
            type: 'url',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'object',
            fields:[
                {
                    name: 'theImage',
                    title: 'Image', 
                    type: 'image',
                },
                {
                    name: 'theAlt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
        },
        {
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [
                {
                    type: 'string',
                }
            ],
            layout: 'tags'
        },
        {
            name:'theproject',
            title:'The Project',
            type:'array',
            of:[
                {
                    type:'block'
                }
            ],
            options:{
                spellCheck: true
            }
        },
        {
            name: 'youMust',
            title: 'Você deve',
            type: 'array',
            of: [
                {
                    type: 'string',
                }
            ],
            layout: 'block'
        },
        {
            name: 'idealFlux',
            title: 'Fluxo Ideal',
            type: 'array',
            of: [
                {
                    type: 'string',
                }
            ],
            layout: 'list'
        },
        {
            name: 'essentialOps',
            title: 'Operações Essenciais',
            type: 'array',
            of: [
                {
                    type: 'string',
                }
            ],
            layout: 'list'
        },
        {
            name: 'evaluation',
            title: 'Critérios de Avaliação',
            type: 'array',
            of: [
                {
                    type: 'string',
                }
            ],
            layout: 'list',
            options:{
                icon: 'check'
            }
        },
        {
            name: 'todoSummup',
            title: 'Sumário To-do',
            type: 'array',
            of: [
                {
                    type: 'block',
                }
            ]
        },
        {
            name:'finished',
            title:'Finished',
            type:'boolean',
        },
    ]
}