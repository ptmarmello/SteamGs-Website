export default{
    name : 'socialMedia',
    title : 'Social Media',
    type : 'object',
    fields:[
        {
            name: 'email',
            title: 'Email',
            type: 'email',
        },
        {
            name: 'facebook',
            title: 'Facebook',
            type: 'url',
        },
        {
            name: 'instagram',
            title: 'Instagram',
            type: 'url',
        },
        {
            name: 'twitter',
            title: 'Twitter',
            type: 'url',
        },
        {
            name: 'linkedin',
            title: 'Linkedin',
            type: 'url',
        },
        {
            name: 'github',
            title: 'Github',
            type: 'url',
        },
        {
            name:'website',
            title: 'Website',
            type: 'url',
        },
        {
            name:  'outros',
            title: 'Outros',
            type: 'array',
            of: [
                {
                    type:'object',
                    fields:[
                        {
                            name: 'nome',
                            title: 'Nome',
                            type: 'url',
                        }
                    ]
                }
        ],
        }
    ]
}