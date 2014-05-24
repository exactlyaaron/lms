'use strict';

var traceur = require('traceur');
var Teacher = traceur.require(__dirname + '/../models/teacher.js');
// var Student = traceur.require(__dirname + '/../models/student.js');

exports.index = (req, res)=>{
  res.render('home/index', {title: 'StudyBuddy: Home'});
};

exports.new = (req, res)=>{
  res.render('teachers/teacher-login', {title: 'StudyBuddy: Teacher Login'});
};

exports.login = (req, res)=>{
    var teacher = new Teacher(req.body);
    teacher.login(t=>{
      if(t){
        req.session.teacherId = t._id;
        req.session.studentId = null;
        res.redirect('/teacher/dashboard');
        console.log(teacher);
        console.log(t);
      } else {
        res.send('TEACHER NOT LOGGED IN!');
      }
      //res.render('teachers/dashboard');
    });
};

exports.dashboard = (req, res)=>{
  Teacher.findById(req.session.teacherId, teacher=>{
    res.render('teachers/dashboard', {teacher: teacher});
  });

};
