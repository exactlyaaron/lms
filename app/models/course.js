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
    this.test = [];
  }

  save(fn){
    courses.save(this, ()=>fn());
  }

  addTest(data, fn){
    var problems = [];
    var wrongAnswersArray = [];

    for(var j = 0; j< data.wronganswer.length; j+=3){
      var wrongAnswers = [];
      wrongAnswers = data.wronganswer.slice(j, j+3);
      wrongAnswersArray.push(wrongAnswers);
    }


    for(var i = 0; i<data.question.length; i++){

      var problem = {};
      problem.question = data.question[i];
      problem.solution = data.solution[i];
      problem.wronganswers = [];

      problem.wronganswers = wrongAnswersArray[i];

      problems.push(problem);

    }

    this.test = problems;

    console.log('course test***********');
    console.log(this.test);
    fn();
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
