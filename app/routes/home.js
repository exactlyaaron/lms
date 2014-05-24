'use strict';

var traceur = require('traceur');
var Teacher = traceur.require(__dirname + '/../models/teacher.js');
var Student = traceur.require(__dirname + '/../models/student.js');

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Node.js: Home'});
};

exports.showStudentLogin = (req, res)=>{
  res.render('home/student-login');
};

exports.showTeacherLogin = (req, res)=>{
  res.render('home/teacher-login');
};

exports.showRegister = (req, res)=>{
  res.render('home/register');
};

exports.register = (req, res)=>{
  console.log(req.body.name);
if(req.body.type === 'teacher'){
  var teacher = new Teacher (req.body);
    teacher.register(t=>{
      if(t){
        req.session.teacherId = t._id;
      }else{
        req.session.userId = null;
      }
        res.send('registered teacher');
    });
  }else {
  var student = new Student (req.body);
    student.register(s=>{
      if(s){
        req.session.studentId = s._id;
      }else{
        req.session.studentId = null;
      }
        res.send('registered student');
    });
  }
};

// exports.login = (req, res)=>{
//   console.log(req.body.name);
// if(req.body.type === 'teacher'){
//   var teacher = new Teacher (req.body);
//     teacher.register(t=>{
//       if(t){
//         req.session.teacherId = t._id;
//       }else{
//         req.session.userId = null;
//       }
//         res.send('logged in');
//     });
//   }else {
//   var student = new Student (req.body);
//     student.register(s=>{
//       if(s){
//         req.session.studentId = s._id;
//       }else{
//         req.session.studentId = null;
//       }
//         res.send('logged in student');
//     });
//   }
// };
