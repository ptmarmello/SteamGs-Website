export default {
    name: 'challenges',
    title: 'Challenges',
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
        }
    ]
}