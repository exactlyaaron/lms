'use strict';

var students = global.nss.db.collection('students');
var bcrypt = require('bcrypt');
var Mongo = require('mongodb');

class Student{
  constructor(obj){
    this.name = obj.name;
    this.email = obj.email;
    this.password = obj.password;

  }

  register(fn){
    students.findOne({email:this.email}, (e, student)=>{
      if(student){
        var isMatch = bcrypt.compareSync(this.password, student.password);
        if(isMatch){
          fn(student);
        }else{
          fn(null);
        }
      }else{
        this.password = bcrypt.hashSync(this.password, 8);
        students.save(this, (e,t)=>{
          fn(t);
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

  static findById(studentId, fn){
    studentId = Mongo.ObjectID(studentId);
    students.findOne({_id:studentId}, (e,s)=>fn(s));
  }
}



module.exports = Student;
