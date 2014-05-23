'use strict';

var teachers = global.nss.db.collection('teachers');
//var Mongo = require('mongodb');
var bcrypt = require('bcrypt');
var _ = require('lodash');
// var async = require('async');

class Teacher{
  constructor(obj){
    this.name= obj.name;
    this.email = obj.email;
    this.password = obj.password;
  }

  static findByEmail(email, fn){
    teachers.findOne({email: email}, (err, teacher)=>{
      teacher = _.create(Teacher.prototype, teacher);
      fn(teacher);
    });
  }

  register(fn){
    teachers.findOne({email: this.email}, (err, teacher)=>{
      if(teacher){
        var isMatch = bcrypt.compareSync(this.password, teacher.password);
        if(isMatch){
          fn(teacher);
        } else {
          fn(null);
        }
      } else {
        this.password = bcrypt.hashSync(this.password, 8);
        teachers.save(this, (err, teacher)=>{
          fn(teacher);
        });
      }
    });
  }

  login(fn){
    teachers.findOne({email: this.email}, (err, teacher)=>{

      var isMatch = bcrypt.compareSync(this.password, teacher.password);

      if(isMatch){
        fn(teacher);
      } else {
        fn(null);
      }
    });
  }

}

module.exports = Teacher;
