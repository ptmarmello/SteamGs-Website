export default{
    title: 'Trilhas',
    name: 'Trilhas',
    type: 'document',
    fields: [
        {
            title: 'Nome',
            name: 'nome',
            type: 'string',
        },
        {
            title: 'slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'nome',
                maxLength: 96
            }
        },
        {
            title: 'mainImage',
            name: 'mainImage',
            type: 'object',
            fields:[
                {
                    title: 'image',
                    name: 'image',
                    type: 'image',
                },
                {
                    title: 'alt',
                    name: 'alt',
                    type: 'string',
                }
            ]
        },
        {
            title: 'Descrição',
            name: 'descricao',
            type: 'text',
        },
        {
            title: 'Motivação da Tilha',
            name: 'motivacao',
            type: 'text',
        },
        {
            title: 'Tags & Itens',
            name: 'tags',
            type: 'array',
            of: [
                {
                    type: 'string',
                }
            ]
        },
        {
            title: 'Etapas',
            name: 'etapas',
            type: 'array',
            of: [
                {type: 'Etapas'},
            ],
        },
    ]

}