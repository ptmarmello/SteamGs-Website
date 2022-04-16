var fetch = require('node-fetch');

function octopusEmail(req, res) {
    var email = req.body.email;
    var name = req.body.name;
    var url = 'https://api.octopus.com/api/1.6/lists/' + process.env.OCTOPUS_LIST_ID + '/contacts?api_key=' + process.env.OCTOPUS_API_KEY;
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Octopus-ApiKey': process.env.OCTOPUS_API_KEY
        },
        body: JSON.stringify({
            "api_key": process.env.OCTOPUS_API_KEY,
            "email_address":email,
            "fields":{
                "FirstName":name , "LastName":""
            }
        })
    };

    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            if (json.Errors) {
                res.status(200).send(json);
            } else {
                res.status(200).send(json);
            }
        })
        .catch(function (err) {
            res.status(500).send(err);
        });
}

// fetch('https://emailoctopus.com/api/1.6/lists/00000000-0000-0000-0000-000000000000/contacts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({"api_key": process.env.OCTOPUS_MAIL_APIKEY ,"email_address":"joe@bloggs.com","fields":{"FirstName":"Joe","LastName":"Bloggs"},"tags":["vip"],"status":"SUBSCRIBED"})
// });