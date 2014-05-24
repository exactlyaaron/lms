(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    alert('bkyug');
    $('body').on('click', '#add-lesson', addLesson);
  }
  function addLesson() {
    var item = $('#content-container > #editor-wrapper > #formatting-container:last-child');
    $('#content-container').append(item.clone());
  }
})();

//# sourceMappingURL=main.map
