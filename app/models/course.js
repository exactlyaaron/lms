'use strict';

var courses = global.nss.db.collection('courses');
var Mongo = require('mongodb');
// var bcrypt = require('bcrypt');
var _ = require('lodash');
// var async = require('async');

class Course{
  constructor(obj){
    this.title = obj.title;
    this.description = obj.description;
  }

  save(fn){
  courses.save(this, ()=>fn());

  }

  addLesson(course){
    console.log(course);
    console.log('made it!!!!!');
  }


  static findById(courseId, fn){
    courseId = Mongo.ObjectID(courseId);
    courses.findOne({_id: courseId}, (err, course)=>{
      course = _.create(Course.prototype, course);
      fn(course);
    });
  }

}


module.exports = Course;
