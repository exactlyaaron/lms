(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#new-course').click(showCourseForm);
    $('#create-course-form').hide();
    $('#lessons').hide();
    $('#add-lesson').click(showLesson);
    $('#save-lesson').click(saveLesson);
    loadEditor();
  }
  function showCourseForm() {
    $('#create-course-form').slideToggle();
  }
  function showLesson() {
    $('#lessons').slideToggle();
  }
  function saveLesson() {
    var title = $('input#title').val();
    var description = $('#description').val();
    var courseId = $('#course').attr('data-id');
    var content = fullEditor.getHTML();
    console.log(title);
    console.log(description);
    ajax(("/course/" + courseId + "/addLesson"), 'post', {
      title: title,
      description: description,
      content: content
    }, (function(html) {
      console.log(html);
    }));
  }
  var fullEditor;
  function loadEditor() {
    fullEditor = new Quill('#full-editor', {
      modules: {
        'authorship': {enabled: true},
        'multi-cursor': true,
        'toolbar': {container: '#full-toolbar'},
        'image-tooltip': true,
        'link-tooltip': true
      },
      theme: 'snow'
    });
  }
})();

//# sourceMappingURL=courses.map
