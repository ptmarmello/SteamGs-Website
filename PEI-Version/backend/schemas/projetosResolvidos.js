export default{
    name : 'projetosResolvidos',
    title : 'Projetos Resolvidos',
    type : 'object',
    fields:[
        {
            name: 'id',
            title: 'ID',
            type: 'number',
        },
        {
            name: 'dataEntrega',
            title: 'Data de Entrega',
            type: 'datetime',
        },
        {
            name: 'Projeto',
            title: 'Projeto',
            type: 'reference',
            to: {type: 'projetos'},
        },
        {
            name: 'nota',
            title: 'Nota',
            type: 'number',
        },
    ]
}