const config = require('../config');
const pg = require('pg');

// Set data to config default connection
function setConfigDefault(){
    config.host = 'adearisdb.cwvcjn59heq2.us-east-2.rds.amazonaws.com';
    config.user = 'adearis';
    config.password = 'adearis1234';
    config.database = 'adearisDB';
    config.port = 5432;
}

// Register User 
function createUser(req, res) {
    // Set Connect
    setConfigDefault();

    var client = new pg.Client(config);
    console.log(req.body);
    client.connect(err => {
        if (err){
            client.end();
            console.log(err.message);
            res.status(400).json(err.message);
            }
        else {
            var query
            if(req.body.passport !== undefined){
                query = `insert into _user(dni,name,lastname,password,gender,country,state,phone,
                    passport,email,expectatives,allergies,emergency_contact) 
                    values('`+req.body.dni+`','`+req.body.name+`','`+req.body.lastname+`',crypt('`+req.body.password+`',gen_salt('bf')),
                    '`+req.body.gender+`','`+req.body.country+`','`+req.body.state+`','`+req.body.phone+`',
                    '`+req.body.passport+`','`+req.body.email+`','`+req.body.expectatives+`','`+req.body.allergies+`',
                    '`+req.body.emergency_contact+`');`;
            }else{
                query = `insert into _user(dni,name,lastname,password,gender,country,state,phone,
                    email,expectatives,allergies,emergency_contact) 
                    values('`+req.body.dni+`','`+req.body.name+`','`+req.body.lastname+`',crypt('`+req.body.password+`',gen_salt('bf')),
                    '`+req.body.gender+`','`+req.body.country+`','`+req.body.state+`','`+req.body.phone+`',
                    '`+req.body.email+`','`+req.body.expectatives+`','`+req.body.allergies+`',
                    '`+req.body.emergency_contact+`');`;
            }
            
            client.query(query)
            .then(data => {
                res.status(200).json(
                    true);
                client.end();
            })
            .catch(err => {
                console.log(err.message); 
                client.end();
                res.status(400).json(err.message);
            })
        }
    });

};

// login of User
function loginUser(req, res) {
    // Set Connect
    setConfigDefault();

    var client = new pg.Client(config);
    client.connect(err => {
        if (err){
            client.end();
            console.log(err.message);
            res.status(400).json(err.message);
            }
        else {
            
            const query =`select id from _user where dni ='`+req.body.dni+`' and password = crypt('`+req.body.password+`',password);`;
            client.query(query)
            .then(data => {
                res.status(200).json(
                    data.rows[0]);
                client.end();
            })
            .catch(err => {
                console.log(err.message); 
                client.end();
                res.status(400).json(err.message);
            })
        }
    });

};


module.exports = {
    createUser,
    loginUser
}
