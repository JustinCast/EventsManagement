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

// Create Reservation
function createReservation(req, res) {
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
            const query = `insert into reservation(id_activity,id_user,confirmation,reservation_date)
             values ('`+req.body.id_activity+`','`+req.body.id_user+`','`+req.body.confirmation+`','`+req.body.reservation_date+`')`;
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

// Delete Reservation
function deleteReservation(req, res) {
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
            const query = `delete from reservation where id = '`+req.body.id+`')`;
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

// Read Reservation
function readReservation(req, res) {
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
            const query = `select * from reservation`;
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
    createReservation,
    deleteReservation,
    readReservation
}
