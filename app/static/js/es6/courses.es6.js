/* global ajax */
/* jshint unused:false */
/* jshint undef:false */

(function(){
  'use strict';

  $(document).ready(init);


  function init(){
    $('#new-course').click(showCourseForm);
    $('#create-course-form').hide();
    $('#lessons').hide();

  }

  // function getQuill(){
  //   var length = $('#full-editor').getText(0, 10);
  //   console.log(length);
  // }

  function showCourseForm(){
    $('#create-course-form').slideToggle();

  }




})();
