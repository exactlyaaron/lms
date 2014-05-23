'use strict';

var traceur = require('traceur');
var Student = traceur.require(__dirname + '/../models/student.js');

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Node.js: Home'});
};

exports.new = (req, res)=>{
  res.render('students/login', {title: 'StudyBuddy: Student Login'});
};

exports.login = (req, res)=>{
  req.session = null;

  Student.findByEmail(req.body.email, student=>{
    student.login(req.body.password, s=>{
      if(s){
        req.session.studentId = s._id;
        res.send('STUDENT LOGGED IN!');
      } else {
        req.session.studentId = null;
        res.send('STUDENT NOT LOGGED IN!');
      }
      //res.render('teachers/dashboard');
    });
  });
};
