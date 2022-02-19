export default{
    name : 'users',
    title : 'Users',
    type : 'document',
    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string',
            options:{
                isHighlighted: true,
                required: true,
            }
        },
        {
            name: 'birthday',
            title: 'Data de Nascimento',
            type: 'date',
        },
        {
            name:'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'escolaridade',
            title: 'Escolaridade',
            type: 'string',
            options: {
                list: [
                    {title: 'Ensino Fundamental', value: 'Ensino Fundamental'},
                    {title: 'Ensino Médio Completo', value: 'Ensino Médio Completo'},
                    {title: 'Ensino Médio Incompleto', value: 'Ensino Médio Incompleto'},
                    {title: 'Ensino Superior Completo', value: 'Ensino Superior Completo'},
                    {title: 'Ensino Superior Incompleto', value: 'Ensino Superior Incompleto'},
                    {title: 'Pós Graduação', value: 'Pós Graduação'},
                    {title: 'Mestrado', value: 'Mestrado'},
                    {title: 'Doutorado', value: 'Doutorado'},
                ],
                layout: 'dropdown'
            }
        },
        {
            name: 'instituicao',
            title: 'Instituição',
            type: 'string',
            options:{
                list: [
                    {title: 'Universidade Federal do Rio Grande do Sul', value: 'Universidade Federal do Rio Grande do Sul'},
                    {title: 'Universidade Federal de Santa Catarina', value: 'Universidade Federal de Santa Catarina'},
                    {title: 'Universidade Estadual de Santa Catarina', value: 'Universidade Estadual de Santa Catarina'},
                    {title: 'Universidade Estadual de São Paulo', value: 'Universidade Estadual de São Paulo'},
                    {title: 'Universidade Federal de São Carlos', value: 'Universidade Federal de São Carlos'},
                    {title: 'PUC-Rio', value: 'PUC-Rio'},
                    {title: 'PUC-SP', value: 'PUC-SP'},
                    {title: 'PUC-SC', value: 'PUC-SC'},
                    {title: 'PUC-RS', value: 'PUC-RS'}
                ],
                layout: 'dropdown'
            }
        },
        {
            name: 'curso',
            title: 'Curso',
            type: 'string',
            options:{
                list: [
                    {title: 'Engenharia da Computação', value: 'Engenharia da Computação'},
                    {title: 'Sistemas de Informação', value: 'Sistemas de Informação'},
                    {title: 'Ciência da Computação', value: 'Ciência da Computação'},
                    {title: 'Engenharia Elétrica', value: 'Engenharia Elétrica'},
                    {title: 'Engenharia Mecânica', value: 'Engenharia Mecânica'},
                    {title: 'Engenharia de Produção', value: 'Engenharia de Produção'},
                    {title: 'Engenharia de Controle e Automação', value: 'Engenharia de Controle e Automação'},
                    {title: 'Engenharia de Produção', value: 'Engenharia de Produção'},
                ],
            }
        },
        {
            name: 'state',
            title: 'Estado',
            type: 'string',
            options:{
                list: [
                    {title: 'São Paulo', value: 'São Paulo'},
                    {title: 'Rio de Janeiro', value: 'Rio de Janeiro'},
                    {title: 'Santa Catarina', value: 'Santa Catarina'},
                    {title: 'Paraná', value: 'Paraná'},
                    {title: 'Minas Gerais', value: 'Minas Gerais'},
                    {title: 'Espírito Santo', value: 'Espírito Santo'},
                    {title: 'Bahia', value: 'Bahia'},
                    {title: 'Rio Grande do Sul', value: 'Rio Grande do Sul'},
                    {title: 'Pará', value: 'Pará'},
                    {title: 'Ceará', value: 'Ceará'},
                ]
            }
        },
        {
            name: 'redesSociais',
            title: 'Redes Sociais',
            type: 'array',
            of: [
                {type: 'socialMedia'}
            ],
        },
        {
            name: 'projetosResolvidos',
            title: 'Projetos Resolvidos',
            type: 'array',
            of: [
                {
                    type:'projetosResolvidos',
                }
            ],
        },
        {
            name: 'desafiosResolvidos',
            title: 'Desafios Resolvidos',
            type: 'array',
            of: [{type: 'solvedChallenges'}],
        },
        {
            name: 'curriculoExterno',
            title: 'Curriculo Externo',
            type: 'file',
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'text',
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
                {
                    type: 'string',
                }
            ],
            layout: 'tags',
        }
    ]
}