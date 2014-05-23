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
  console.log('MADE IT TO HEREEEEEEE');

  Teacher.findByEmail(req.body.email, teacher=>{

    console.log('******************');
    console.log(teacher);
    console.log('******************');

    teacher.login(t=>{
      if(t){
        req.session.teacherId = t._id;
        console.log('WE GOT A TEACHERRRRRRRRR');
        res.send('TEACHER LOGGED IN!');
      } else {
        console.log('NULLLLLLLLLLL');
        req.session.teacherId = null;
        res.send('TEACHER NOT LOGGED IN!');
      }
      //res.render('teachers/dashboard');
    });
  });
};
