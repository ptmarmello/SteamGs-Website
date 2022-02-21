export default {
    name: 'projetos',
    title: 'Projetos',
    type:  'document',
    fields:[
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name:'Slug',
            title:'Slug',
            type:'slug',
            options:{
                source: 'title',
                maxLength: 100
            }
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number',
            options: {
                isHighlighted: true,
            },
        },
        {
            name: 'projectType',
            title: 'Tipo de Projeto',
            type: 'string',
            options: {
                list: [
                    {title: 'Projeto Patrocinado', value: 'Projeto patrocinado'},
                    {title: 'Projeto de Contratação', value: 'Projeto para Vaga de Trabalho'},
                    {title: 'Projeto Normal', value: 'Projeto Normal'},
                ],
                layout: 'radio'
            },
        },
        {
            name: 'projectTags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    type: 'string',
                }
            ],
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
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    type: 'block',
                    // styles: [
                    //     {title: 'Normal', value: 'normal'},
                    //     {title: 'H1', value: 'h1'},
                    // ],
                }
            ],
            options:{
                // collapsible: true,
                spellCheck: true
            }
        },
        {
            name: 'context',
            title: 'Context',
            type: 'array',
            of: [
                {
                    type: 'block',
                }
            ]
        },
        {
            name: 'theProject',
            title: 'O Projeto',
            type: 'array',
            of: [
                {
                    type: 'block',
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
            name: 'todoSummup',
            title: 'Sumário To-do',
            type: 'array',
            of: [
                {
                    type: 'string',
                }
            ]
        },
    ]
}