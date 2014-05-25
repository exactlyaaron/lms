/* global ajax */
/* jshint unused:false */
/* jshint undef:false */

(function(){
  'use strict';

  $(document).ready(init);


  function init(){
    $('#lessons').hide();
    $('#add-lesson').click(showLesson);
    $('#save-lesson').click(saveLesson);
    loadEditor();

  }



  function saveLesson(){
    var title = $('input#title').val();
    var description = $('#description').val();
    var courseId = $('#course').attr('data-id');
    var content = fullEditor.getHTML();
    // console.log(course);
    console.log(title);
    console.log(description);
    ajax(`/course/${courseId}/addLesson`, 'post', {title:title, description: description, content: content}, html=>{
      console.log(html);
      // location.reload();

      $('input#title').val('');
      $('#description').val('');
      fullEditor.deleteText(0, 1000);
      // loadEditor();

    });

  }

  function showLesson(){
    $('#lessons').slideToggle();
  }


  var fullEditor;
  function loadEditor(){

    fullEditor = new Quill('#full-editor', {
      modules: {
        'multi-cursor': true,
        'toolbar': { container: '#full-toolbar' },
        'image-tooltip': true,
        'link-tooltip': true
      },
      theme: 'snow'
    });

  }

})();
