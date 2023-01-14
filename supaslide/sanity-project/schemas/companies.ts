export default {
    name: 'company',
    title:'Company',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type: 'string'
        },
        {
            name:'description',
            title:'Description',
            type: 'array',
            of:[
                {type:'block'}
            ]
        }
    ]
}