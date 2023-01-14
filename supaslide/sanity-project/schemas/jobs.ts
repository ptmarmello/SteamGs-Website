export default {
    name: 'job',
    title:'Job',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type: 'string'
        },
        {
            name:'id',
            title:'ID',
            type:'number',
            options:{
                isHighlighted:true,
            }
        },
        {
            name:'diversity',
            title:'Part of diversity Program?',
            type: 'boolean'
        },
        {
            name:'company',
            title:'Company Name',
            type: 'reference',
            to:{type:'company'}
        },
        {
            
            name:'postDate',
            title:'Post Date',
            type:'date'
        },
        {
            name:'deadline',
            title:'Deadline',
            type:'datetime'
        },
        {
            name:'seniority',
            title:'Seniority Level',
            type: 'string',
            options:{
                list:[
                    {
                        title:'Entry Level',
                        value:'entrylevel'
                    },
                    {
                        title:'Junior',
                        value:'Junior'
                    },
                    {
                        title:'Pleno/Midlevel',
                        value:'midlevel'
                    },
                    {
                        title:'Senior',
                        value:'Senior'
                    }
                ],
                layout:'dropdown'
            },
            
        },
        {
            name:'validTrails',
            title:'Valid Trails',
            type:'array',
            of:[
                {
                    type:'reference',
                    to:[
                        {
                            type:'trail'
                        }
                    ]
                }
            ]
                
        },
        {
            name:'description',
            title:'Description',
            type: 'array',
            of:[
                {
                    type:'block'
                }
            ]
        },
        {
            name:'context',
            title:'Context',
            type: 'array',
            of:[
                {
                    type:'block'
                }
            ]
        },
        {
            name:'theChallenge',
            title:'The Challenge',
            type: 'array',
            of:[
                {
                    type:'block'
                }
            ]
        },
        {
            name:'requirements',
            title:'Requirements',
            type: 'array',
            of:[
                {
                    type:'string'
                }
            ]
        },
        {
            name:'youMust',
            title:'You Must',
            type: 'array',
            of:[
                {
                    type:'string'
                }
            ]
            
        },
        {
            name:'idealFlux',
            title:'IdealFlux',
            type: 'array',
            of:[
                {
                    type:'string'
                }
            ]
        },
        {
            name:'essentialOp',
            title:'Essential Operations',
            type: 'array',
            of:[
                {
                    type:'string'
                }
            ]
        },
        {
            name:'finalobs',
            title:'Final Observations',
            type: 'array',
            of:[
                {
                    type:'block'
                }
            ]
        },
        {
            name:'delivered',
            title:'File Deliver',
            type: 'array',
            of:[
                {
                    type:'file',
                    fields:[
                        {
                            name:'author',
                            title:'Author',
                            type:'string'
                            // trocar pelo type user
                        },
                        {
                            name:'authorID',
                            title:'Author ID',
                            type:'number'
                        },
                        {
                            name:'deliverTime',
                            title:'Deliver Time',
                            type:'datetime'
                            // data
                        },
                    ]
                }
            ]
        }
    ]
}