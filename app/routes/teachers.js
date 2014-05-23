'use strict';

var traceur = require('traceur');
var Teacher = traceur.require(__dirname + '/../models/teacher.js');
// var Student = traceur.require(__dirname + '/../models/student.js');

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Node.js: Home'});
};

exports.new = (req, res)=>{
  res.render('teachers/login', {title: 'StudyBuddy: Teacher Login'});
};

exports.login = (req, res)=>{
  //req.session = null;

    var teacher = new Teacher(req.body);
    teacher.login(t=>{
      if(t){
        req.session.teacherId = t._id;
        req.session.studentId = null;
        res.redirect('/teacher/dashboard');
      } else {
        req.session.teacherId = null;
        res.send('TEACHER NOT LOGGED IN!');
      }
      //res.render('teachers/dashboard');
    });
};

exports.dashboard = (req, res)=>{
  Teacher.findById(req.session.teacherId, teacher=>{
    res.render('teachers/dashboard', {teacher:teacher, title: 'StudyBuddy: Teacher Dashboard'});
  });

};
