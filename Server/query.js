const config = require('../config');
const pg = require('pg');

// Set data to config default connection
function setConfigDefault(){
    config.host = 'objectsaccessdb.cwvcjn59heq2.us-east-2.rds.amazonaws.com';
    config.user = 'testUser';
    config.password = 'user1234';
    config.database = 'ObjectsAccessDB';
    config.port = 5432;
}

// Set data to config connection
function setConfig(conn){
    config.host = conn.host;
    config.user = conn.user;
    config.password = conn.password;
    config.database = conn.database;
    config.port = conn.port;
}

// Post to register User 
function register(req, res) {
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
            const query = `SELECT * FROM addUser('`+req.body.userName+`','`+req.body.password+`')`;
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

// Post to login User 
function login(req, res) {
    setConfig({host: req.body.host, user: req.body.user, password: req.body.password,database: req.body.database,port: req.body.port});
    
    // Set Connect
    var client = new pg.Client(config);
    client.connect(err => {
        if (err){client.end(); res.status(400).json(err.message);}
        else {
            const query = `SELECT idUser FROM users WHERE userName = '`+req.body.user+`' AND userPassword = '`+req.body.password+`'`;
            client
            .query(query)
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

// Get capa
function getCapa(req,res){
    setConfig({host: req.body.host, user: req.body.user, password: req.body.password,database: req.body.database,port: req.body.port});
    var client = new pg.Client(config);
    var colums_desc;
    var colums_geom;
    var query;
    client.connect(err => {
        if (err){
            client.end();
            console.log(err.message);
            res.status(400).json(err.message);
            }
        else {
            const query1 = `select string_agg(column_name,',') from information_schema.columns 
            where table_schema='`+req.body.schema+`' and table_name='`+req.body.geotabla+`' and not(udt_name='geometry')`;
            const query2 = `select string_agg('st_asgeojson('||column_name||')::json as geom',',') from information_schema.columns 
            where table_schema='`+req.body.schema+`' and table_name='`+req.body.geotabla+`' and udt_name='geometry'`;
            client
            .query(query1)
            .then(data => {
                this.colums_desc = data.rows;
            });
            client.query(query2)
            .then(data2 => {
                this.colums_geom = data2.rows;
                query = `select `+this.colums_desc[0].string_agg+`,st_xmin(geom) xmin,st_xmax(geom) xmax,st_ymin(geom) ymin,st_ymax(geom) ymax,`+this.colums_geom[0].string_agg+` from `+req.body.schema+`.`+req.body.geotabla;               
                
                client.query(query)
                    .then(data3 =>{
                    res.status(200).json(
                        data3.rows
                    )
                    client.end();
                }).catch(e => console.error(e.stack));
            });
            
            
        }
    })

}

function saveWS(req,res){
    setConfig({host: req.body.host, user: req.body.user, password: req.body.password,database: req.body.database,port: req.body.port});
    
    // Set Connect
    var client = new pg.Client(config);
    client.connect(err => {
        if (err){client.end(); res.status(400).json(err.message);}
        else {
            const query = `Insert into workspace(wsName,json,idUser) values ('`+req.body.nameWS+`','`+req.body.json+`','`+req.body.idUser+`')`;
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
}

module.exports = {
    login,
    register,
    getCapa,
    saveWS
}
