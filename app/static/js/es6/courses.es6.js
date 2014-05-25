/* global ajax */
/* jshint unused:false */
/* jshint undef:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#newcourse').click(showCourseForm);
    $('#create-course-form').hide();
  }

  function showCourseForm(){
    $('#create-course-form').slideToggle();
  }



})();
