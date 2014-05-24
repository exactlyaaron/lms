'use strict';

var teachers = global.nss.db.collection('teachers');
//var Mongo = require('mongodb');
var bcrypt = require('bcrypt');
var Mongo = require('mongodb');
// var async = require('async');

class Teacher{
  constructor(obj){
    this.name= obj.name;
    this.email = obj.email;
    this.password = obj.password;
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


  static findById(teacherId, fn){
    teacherId = Mongo.ObjectID(teacherId);
    teachers.findOne({_id:teacherId}, (e,t)=>fn(t));
  }
}



module.exports = Teacher;
