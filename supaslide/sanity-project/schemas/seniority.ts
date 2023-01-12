export default {
    name: 'seniority',
    title: 'Seniority',
    type:'object',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'level',
            title:'Level',
            type:'array',
            of:[
                {type:'levels'}
            ]
        },
        {
            name:'projects',
            title: 'Final Project',
            type:'reference',
            to:[
                {
                    type:'projects'
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