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
  //req.session = null;

    var student = new Student(req.body);
    student.login(t=>{
      if(t){
        req.session.studentId = t._id;
        req.session.teacherId = null;
        res.redirect('/student/dashboard');
      } else {
        req.session.studentId = null;
        res.send('student NOT LOGGED IN!');
      }
      //res.render('students/dashboard');
    });
};

exports.dashboard = (req, res)=>{
  Student.findById(req.session.studentId, student=>{
    res.render('students/dashboard', {student:student, title: 'StudyBuddy: Student Dashboard'});
  });

};
