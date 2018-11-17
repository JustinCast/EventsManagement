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

// Create Grade 
function createGrade(req, res) {
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
            const query = `insert into grade(name,institution,id_instructor)
             values ('`+req.body.name+`','`+req.body.institution+`','`+req.body.id_instructor+`')`;
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

// Update Grade 
function updateGrade(req, res) {
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
            const query = `update grade set name = '`+req.body.name+`',institution = '`+req.body.institution+`',id_instructor = '`+req.body.id_instructor+`' where id = '`+req.body.id+`'`;
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

// Delete Grade 
function deleteGrade(req, res) {
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
            const query = `delete from grade where id = '`+req.body.id+`'`;
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

// Delete Grade 
function readGrade(req, res) {
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
            const query = `select * from grade WHERE id_instructor = `+ req.params.id_instructor;
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
    createGrade,
    updateGrade,
    deleteGrade,
    readGrade
}
