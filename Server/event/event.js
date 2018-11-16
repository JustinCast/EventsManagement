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

// Create Event 
function createEvent(req, res) {
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
            const query = `insert into event(name,country,phone,website,email,description,year,start_date,finish_date)
             values ('`+req.body.name+`','`+req.body.country+`','`+req.body.phone+`','`+req.body.website+`','`+req.body.email+`',
             '`+req.body.description+`','`+req.body.start_date+`','`+req.body.finish_date+`')`;
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

// Update Event 
function updateEvent(req, res) {
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
            const query = `update event set name= '`+req.body.name+`',country = '`+req.body.country+`',phone = '`+req.body.phone+`',website = '`+req.body.website+`', email = '`+req.body.email+`',
            description = '`+req.body.description+`', start_date = '`+req.body.start_date+`', finish_date = '`+req.body.finish_date+`' where id = '`+req.body.id+`'`;
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

// Delete Event 
function deleteEvent(req, res) {
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
            const query = `delete from event where id = '`+req.body.id+`'`;
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

// Delete Event 
function readEvent(req, res) {
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
            const query = `select * from event`;
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
    createEvent,
    updateEvent,
    deleteEvent,
    readEvent
}
