'use strict';

var traceur = require('traceur');
var Course = traceur.require(__dirname + '/../models/course.js');

exports.new = (req, res)=>{
  var course = new Course(req.body);
  course.save(()=>{
    res.render('courses/new', {course: course});
  });
};
