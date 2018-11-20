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

// Create Instructor
function createInstructor(req, res) {
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
            var query;
            if(res.body.passport !== undefined){
                query = `insert into instructor(dni,name,lastname,gender,country,state,phone,passport,
                    mail,description, id_actividad) values ('`+req.body.dni+`','`+req.body.name+`','`+req.body.lastname+`','`+req.body.gender+`'
                    ,'`+req.body.country+`','`+req.body.state+`','`+req.body.phone+`','`+req.body.passport+`','`+req.body.mail+`'
                    ,'`+req.body.description+`','`+req.body.id_actividad`')`;
            }else{
                query = `insert into instructor(dni,name,lastname,gender,country,state,phone,
                    mail,description) values ('`+req.body.dni+`','`+req.body.name+`','`+req.body.lastname+`','`+req.body.gender+`'
                    ,'`+req.body.country+`','`+req.body.state+`','`+req.body.phone+`','`+req.body.mail+`','`+req.body.description+`')`;
            }
            client
            .query(query)
            .then(() => {
                query = "SELECT id FROM instructor WHERE dni = $1"
                let result = client.query(query, [req.body.dni])
                res.status(200).json(result.rows[0]);
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

// Update Instructor
function updateInstructor(req, res) {
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
            var query;
            if(res.body.passport !== undefined){
                query = `update instructor set dni='`+req.body.dni+`',name = '`+req.body.name+`',lastname = '`+req.body.lastname+`',gender = '`+req.body.gender+`'
                    ,country = '`+req.body.country+`',state = '`+req.body.state+`',phone = '`+req.body.phone+`',passport = '`+req.body.passport+`',mail = '`+req.body.mail+`'
                    ,description = '`+req.body.description+`' where id = '`+req.body.id+`'`;
            }else{
                query = `update instructor set dni='`+req.body.dni+`',name = '`+req.body.name+`',lastname = '`+req.body.lastname+`',gender = '`+req.body.gender+`'
                ,country = '`+req.body.country+`',state = '`+req.body.state+`',phone = '`+req.body.phone+`',mail = '`+req.body.mail+`'
                ,description = '`+req.body.description+`' where id = '`+req.body.id+`'`;
            }
            client
            .query(query)
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

// Delete Instructor
function deleteInstructor(req, res) {
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
            const query =  `delete from instructor where id = '`+req.body.id+`'`;
           
            client
            .query(query)
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

    // Delete Instructor
function readInstructor(req, res) {
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
            const query =  `select * from instructor`;
           
            client
            .query(query)
            .then(data => {
                res.status(200).json(
                    data.rows);
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
    createInstructor,
    updateInstructor,
    deleteInstructor,
    readInstructor
}
