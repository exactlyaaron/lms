'use strict';

var students = global.nss.db.collection('students');
var Mongo = require('mongodb');
var bcrypt = require('bcrypt');
// var async = require('async');

class Student{
  constructor(obj){
    this.name= obj.name;
    this.email = obj.email;
    this.password = obj.password;
  }

  static findById(id, fn){
    id = Mongo.ObjectID(id);
    students.findOne({_id: id}, (err, student)=>{
      console.log('==================');
      console.log(student);
      fn(student);
    });
  }

  register(fn){

    students.findOne({email: this.email}, (err, student)=>{
      if(student){
        var isMatch = bcrypt.compareSync(this.password, student.password);
        if(isMatch){
          fn(student);
        } else {
          fn(null);
        }
      } else {
        this.password = bcrypt.hashSync(this.password, 8);
        students.save(this, (err, student)=>{
          fn(student);
        });
      }
    });
  }


  login(fn){
    students.findOne({email: this.email}, (err, student)=>{
      var isMatch = bcrypt.compareSync(this.password, student.password);

      if(isMatch){
        fn(student);
      } else {
        fn(null);
      }
    });
  }



}

module.exports = Student;
