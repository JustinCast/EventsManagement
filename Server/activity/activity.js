const config = require("../config");
const pg = require("pg");

// Set data to config default connection
function setConfigDefault() {
  config.host = "adearisdb.cwvcjn59heq2.us-east-2.rds.amazonaws.com";
  config.user = "adearis";
  config.password = "adearis1234";
  config.database = "adearisDB";
  config.port = 5432;
}

// Create Activity
function createActivity(req, res) {
  // Set Connect
  setConfigDefault();

  var client = new pg.Client(config);
  client.connect(err => {
    if (err) {
      client.end();
      console.log(err.message);
      res.status(400).json(err.message);
    } else {
      var query;
      if (req.body.requirements !== undefined) {
        query =
          `insert into activity(name,id_event,duration,activity_date,place,saloon,entry,requirements)
                values ('` +
          req.body.name +
          `','` +
          req.body.id_event +
          `','` +
          req.body.duration +
          `','` +
          req.body.activity_date +
          `'
                ,'` +
          req.body.place +
          `','` +
          req.body.saloon +
          `','` +
          req.body.entry +
          `','` +
          req.body.requirements +
          `')`;
      } else {
        query =
          `insert into activity(name,id_event,duration,activity_date,place,saloon,entry)
                values ('` +
          req.body.name +
          `','` +
          req.body.id_event +
          `','` +
          req.body.duration +
          `','` +
          req.body.activity_date +
          `'
                ,'` +
          req.body.place +
          `','` +
          req.body.saloon +
          `','` +
          req.body.entry +
          `')`;
      }

      client
        .query(query)
        .then(data => {
          res.status(200).json(true);
          client.end();
        })
        .catch(err => {
          console.log(err.message);
          client.end();
          res.status(400).json(err.message);
        });
    }
  });
}

// Update Activity
function updateActivity(req, res) {
  // Set Connect
  setConfigDefault();

  var client = new pg.Client(config);
  client.connect(err => {
    if (err) {
      client.end();
      console.log(err.message);
      res.status(400).json(err.message);
    } else {
      var query;
      if (req.body.requirements !== undefined) {
        query =
          `update activity set name = '` +
          req.body.name +
          `',id_event = '` +
          req.body.id_event +
          `',
                duration = '` +
          req.body.duration +
          `',activity_date =  '` +
          req.body.activity_date +
          `',
                place = '` +
          req.body.place +
          `',saloon = '` +
          req.body.saloon +
          `',entry = '` +
          req.body.entry +
          `',
                requirements = '` +
          req.body.requirements +
          `' where id = ` +
          req.body.id;
      } else {
        query =
          `update activity set name = '` +
          req.body.name +
          `',id_event = '` +
          req.body.id_event +
          `',
                duration = '` +
          req.body.duration +
          `',activity_date =  '` +
          req.body.activity_date +
          `',
                place = '` +
          req.body.place +
          `',saloon = '` +
          req.body.saloon +
          `',entry = '` +
          req.body.entry +
          `'
                 where id = ` +
          req.body.id;
      }

      client
        .query(query)
        .then(data => {
          res.status(200).json(true);
          client.end();
        })
        .catch(err => {
          console.log(err.message);
          client.end();
          res.status(400).json(err.message);
        });
    }
  });
}

// Delete Activity
function deleteActivity(req, res) {
  // Set Connect
  setConfigDefault();

  var client = new pg.Client(config);
  client.connect(err => {
    if (err) {
      client.end();
      console.log(err.message);
      res.status(400).json(err.message);
    } else {
      const query = `delete from activity where id = ` + req.body.id;

      client
        .query(query)
        .then(data => {
          res.status(200).json(true);
          client.end();
        })
        .catch(err => {
          console.log(err.message);
          client.end();
          res.status(400).json(err.message);
        });
    }
  });
}

// Read Activity
function readActivity(req, res) {
  // Set Connect
  setConfigDefault();

  var client = new pg.Client(config);
  client.connect(err => {
    if (err) {
      client.end();
      console.log(err.message);
      res.status(400).json(err.message);
    } else {
      const query = `select * from activity`;
      client
        .query(query)
        .then(data => {
          res.status(200).json(data.rows);
          client.end();
        })
        .catch(err => {
          console.log(err.message);
          client.end();
          res.status(400).json(err.message);
        });
    }
  });
}

module.exports = {
  createActivity,
  updateActivity,
  deleteActivity,
  readActivity
};
