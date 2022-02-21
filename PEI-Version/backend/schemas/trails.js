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
            title: 'Descrição',
            name: 'descricao',
            type: 'text',
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