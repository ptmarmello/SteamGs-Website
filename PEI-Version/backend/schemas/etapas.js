export default{
    title: 'Etapas',
    name: 'Etapas',
    type: 'object',
    fields: [
        {
            title: 'Nome',
            name: 'nome',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'slug',
            name: 'slug',
            type: 'slug',
            options: {
                isHighlighted: true,
                source: 'nome',
                maxLength: 100,
            },
            validation: Rule => Rule.required()
        },
        {
            title: 'Descrição',
            name: 'descricao',
            type: 'text',
        },
        {
            name: 'processos',
            title: 'Processos',
            type: 'array',
            of: [
                {
                    title: 'Projetos',
                    name: 'projetos',
                    type: 'reference',
                    to: {type: 'projetos'},
                },
                {
                    title: 'Desafios',
                    name: 'desafios',
                    type: 'reference',
                    to: {type: 'challenges'},
                },
            ],
            validation: Rule => Rule.required()
        }
    ]

}