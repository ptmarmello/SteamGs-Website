export default {
    name: 'trail',
    type: 'document',
    title: 'Trail',
    fields:[
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'description',
            type:'text',
            title: 'Description'
        },
        {
            name: 'slug',
            type:'slug',
            title: 'Slug',
            options:{
                source:'name',
                maxLength: 96,
                unique: true,
            }
            
        },
        {
            name: 'kind',
            type: 'string',
            title: 'Kind',
            options: {
                list: [
                    {title: 'Career Trail', value: 'Career Trail'},
                    {title: 'Professional Trail', value: 'Professional Trail'},
                    {title: 'Company Trail', value: 'Company Trail'},
                ],
                layout: 'radio'
            },
        },
        {
            name: 'tags',
            title:'Tags',
            type: 'array',
            of:[
                {
                    type:'string'
                }
            ]
        },
        {
            name: 'seniority',
            title:'Seniority',
            type:'array',
            of: [{ type:'seniority' }]

        },
        {
            name:'Completed',
            title:'Completed',
            type:'boolean',
            initialValue:'false'
        }
    ]
}