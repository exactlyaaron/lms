'use strict';

var traceur = require('traceur');
var Teacher = traceur.require(__dirname + '/../models/teacher.js');
var Student = traceur.require(__dirname + '/../models/student.js');

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Node.js: Home'});
};

exports.register = (req, res)=>{

  if(req.body.type === 'teacher'){

    var teacher = new Teacher(req.body);
    teacher.login(t=>{
      if(t){
        req.session.teacherId = t._id;
      } else {
        req.session.teacherId = null;
      }
      res.send('TEACH REGISTERED IN!');
      //res.render('teachers/dashboard');
    });

  } else {

    var student = new Student(req.body);
    student.login(s=>{
      if(s){
        req.session.studentId = s._id;
      } else {
        req.session.studentId = null;
      }

      res.send('STUDENT REGISTERED IN!');
      //res.render('students/dashboard');
    });
  }

};
