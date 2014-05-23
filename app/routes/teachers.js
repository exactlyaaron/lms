'use strict';

var traceur = require('traceur');
var Teacher = traceur.require(__dirname + '/../models/teacher.js');
// var Student = traceur.require(__dirname + '/../models/student.js');

exports.index = (req, res)=>{
  res.render('home/index', {title: 'StudyBuddy: Home'});
};

exports.new = (req, res)=>{
  res.render('teachers/login', {title: 'StudyBuddy: Teacher Login'});
};

exports.login = (req, res)=>{
  req.session = null;

    teacher = new Teacher(req.body);
    teacher.login(t=>{
      if(t){
        req.session.teacherId = t._id;
        res.send('TEACHER LOGGED IN!');
      } else {
        req.session.teacherId = null;
        res.send('TEACHER NOT LOGGED IN!');
      }
      //res.render('teachers/dashboard');
    });
};
