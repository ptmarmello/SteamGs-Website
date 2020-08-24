const express = require("express");
const crypto = require('crypto');

const connection = require("./connections");
const { response } = require("express");
const { isNull } = require("util");
const knexfile = require("./knexfile");

const routes = express.Router();

//Inicial
routes.get('/', (request,response) =>{
    return response.send('tente ir para /Users/nome do usuario, ou /put/badges')
});

// Cria um novo usuário
routes.post('/create/user',async (request, response) =>{
    const params = request.body;
    console.log(params);
    const { name, date_born,email, university, login, password, points, account } = params;
    let owners_id = crypto.randomBytes(5).toString('hex');
    let secret_id = crypto.randomBytes(4).toString('hex');
    let tempId = owners_id;

    await connection('accounts').insert({
        secret_id,
        owners_id,
        account
    });
    tempId = secret_id;
    secret_id = owners_id;

    const account_Id = tempId;

    await connection('users').insert({
        secret_id,
        name,
        date_born,
        email,
        university,
        login,
        password,
        points,
        account_Id
    });

    return response.json({secret_id});
});

// Encontra todos os usuários ou um usuário específico
routes.get('/users', async (request,response) =>{
    const queries = request.query;
    const params = request.params;
    console.log(queries);
    console.log(params);

    if({queries} !== isNull){
        console.log('linha 55');
        const answer = await connection('users').select('*');
        console.log('linha 57');
        return response.json({answer});
    }else{
        return response.send('foi não');
    }
})

// Vai para a página do User
routes.get('/user/:name', (request,response) =>{
    const name = request.params;
    console.log(name);
});





// Cria um novo Badge
routes.post('/create/badge',async (request,response) =>{
    const params = request.body;
    console.log(params);

    return response.send("funcionou");
});

// Vai para a descrição do badge
routes.get('/badge/:title',(request,response) =>{
    const title = request.params;
    console.log(title);

});

routes.get('/badgeList/:name',(request,response) =>{
    const userBadgeList = request.params;
    console.log(userBadgeList);

});

//Inserir um badge na carteira de badges do usuário

//Add Account
routes.post('/addAccount/:owners_Id', async (request,response) =>{
    
    const {secret_id, account} = request.body;

    let oldOne = await connection('accounts').select('account').where({secret_id: secret_id});

    console.log(oldOne);
    
    await connection('accounts').update({
        account: ('array_append(account, ?)', [ oldOne , account])
    }).where('secret_id', secret_id);
    
    // console.log(account);

    return response.send('foi');
});

//Deletar Account

//Modificar Account

//Listar Account
routes.get('/accounts/:owners_Id', async (request,response) =>{
    const {owners_Id} = request.params;
    console.log(owners_Id);
    const account_Id = await connection('accounts').select('secret_id').where({owners_id: owners_Id});

    

    return response.json({account_Id});
});


module.exports = routes;