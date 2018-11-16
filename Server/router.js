// ===================================
// HTTP verbs
// ===================================
const activity = require('./activity/activity');
const event = require('./event/event');
const instructor = require('./instructor/instructor');
const reservation = require('./reservation/reservation');
const user = require('./user/user');
module.exports.set = app => {

   // User
   app.post('/registerUser',user.registerUser);
   app.post('/loginUser',user.loginUser);
}