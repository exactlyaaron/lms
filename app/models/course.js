'use strict';

var courses = global.nss.db.collection('courses');
var Mongo = require('mongodb');
var _ = require('lodash');
// var async = require('async');

class Course{
  constructor(obj){
    this.title= obj.title;
    this.description = obj.description;
    this.material = [];
  }

  save(fn){
    courses.save(this, ()=>fn());
  }

  addLesson(data, fn){
    var lesson = {};
    lesson.title = data.title;
    lesson.description = data.description;
    lesson.content = data.content;

    this.material.push(lesson);
    fn();
  }

  static findById(courseId, fn){
    courseId = Mongo.ObjectID(courseId);
    courses.findOne({_id: courseId}, (err, course)=>{
      course = _.create(Course.prototype, course);
      fn(course);
    });
  }

  static findAll(fn){
    courses.find().toArray((err, courses)=>{
      fn(courses);
    });
  }



}

module.exports = Course;
