'use strict';

// var traceur = require('traceur');
// var Student = traceur.require(__dirname + '/../models/student.js');

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Node.js: Home'});
};

exports.new = (req, res)=>{
  res.render('students/login', {title: 'StudyBuddy: Student Login'});
};

exports.login = (req, res)=>{

    // student.login(s=>{
    //   if(s){
    //     req.session.teacherId = s._id;
    //   } else {
    //     req.session.teacherId = null;
    //   }
    //   res.send('STUDENT LOGGED IN!');
    //   //res.render('teachers/dashboard');
    // });

};
