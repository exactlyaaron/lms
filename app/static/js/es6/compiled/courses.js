(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#new-course').click(showCourseForm);
    $('#create-course-form').hide();
    $('#lessons').hide();
  }
  function showCourseForm() {
    $('#create-course-form').slideToggle();
  }
})();

//# sourceMappingURL=courses.map
