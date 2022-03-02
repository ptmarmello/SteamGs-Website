export default{
    name : 'solvedChallenges',
    title : 'Desafios Resolvidos',
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
            name: 'Desafios',
            title: 'desafios',
            type: 'reference',
            to: {type: 'challenges'},
        },
        {
            name: 'nota',
            title: 'Nota',
            type: 'number',
        },
    ]
}