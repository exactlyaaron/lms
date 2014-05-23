'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var students = traceur.require(__dirname + '/../routes/students.js');
  var teachers = traceur.require(__dirname + '/../routes/teachers.js');

  app.get('/', dbg, home.index);

  app.get('/register', dbg, home.showRegister);
  app.post('/register', dbg, home.register);

  app.get('/student/login', dbg, students.new);
  app.post('/student/login', dbg, students.login);

  app.get('/teacher/login', dbg, teachers.new);
  app.post('/teacher/login', dbg, teachers.login);

  app.get('/teacher/dashboard', dbg, teachers.dashboard);
  app.get('/student/dashboard', dbg, students.dashboard);

  app.get('/logout', dbg, home.logout);

  console.log('Routes Loaded');
  fn();
}
