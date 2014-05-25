'use strict';

var courses = global.nss.db.collection('courses');
//var Mongo = require('mongodb');
//var _ = require('lodash');
// var async = require('async');

class Course{
  constructor(obj){
    this.title= obj.title;
    this.description = obj.description;
    this.lessons = [];
  }

  save(fn){
    courses.save(this, ()=>fn());
  }



}

module.exports = Course;
