(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#newcourse').click(showCourseForm);
    $('#addlesson').click(showLessonForm);
    $('#create-course-form').hide();
    $('#lessons').hide();
  }

  function showLessonForm(){
    $('#lessons').slideToggle();
  }

  function showCourseForm(){
    $('#create-course-form').slideToggle();
  }


})();
