(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#addlesson').click(addLesson);
  }
  function addLesson() {
    var newLesson = $('#lessons > .lesson-builder:first-child').clone();
    console.log(newLesson);
    $('#container').append(newLesson);
  }
})();

//# sourceMappingURL=main.map
