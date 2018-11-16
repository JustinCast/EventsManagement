// ===================================
// HTTP verbs
// ===================================
const activity = require('./activity/activity');
const event = require('./event/event');
const instructor = require('./instructor/instructor');
const reservation = require('./reservation/reservation');
const grade = require('./grade/grade');
const user = require('./user/user');
module.exports.set = app => {

   // User

   app.post('/registerUser',user.createUser);
   app.post('/loginUser',user.loginUser);

   // Activity

   app.post('/createActivity',activity.createActivity);
   app.put('/updateActivity',activity.updateActivity);
   app.delete('/deleteActivity',activity.deleteActivity);
   app.get('/readActivity',activity.readActivity);

   // Event

   app.post('/createEvent',event.createEvent);
   app.put('/updateEvent',event.updateEvent);
   app.delete('/deleteEvent',event.deleteEvent);
   app.get('/createEvent',event.readEvent);

   // Grade
   app.post('/createGrade',grade.createGrade);
   app.put('/updateGrade',grade.updateGrade);
   app.delete('/deleteGrade',grade.deleteGrade);
   app.get('/createGrade',grade.readGrade);

   // Instructor
   app.post('/createInstructor',instructor.createInstructor);
   app.put('/updateInstructor',instructor.updateInstructor);
   app.delete('/deleteInstructor',instructor.deleteInstructor);
   app.get('/createInstructor',instructor.readInstructor);
   
   // Reservation
   app.post('/createReservation',reservation.createReservation);
   app.delete('/deleteReservation',reservation.deleteReservation);
   app.get('/createReservation',reservation.readReservation);
}