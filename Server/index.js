// ===================================
// Start Page
// ===================================

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');

function config() {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:4200");
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
      );
      res.header("Access-Control-Allow-Credentials", "true");
      next();
    });
  }
config();
app.use("/api/v1", express.static('client'));
router.set(app);

app.listen(3000, () => console.log('App listening on port ' + 3000)); //Listener
