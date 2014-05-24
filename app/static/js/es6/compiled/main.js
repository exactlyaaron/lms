(function() {
  'use strict';
  alert('bkyug');
  $('body').on('click', '#add-lesson', addLesson);
  function addLesson() {
    alert('kygyl');
    var item = $('#content-container > .lesson:last-child');
    $('#content-container').append(item.clone());
  }
})();

//# sourceMappingURL=main.map
