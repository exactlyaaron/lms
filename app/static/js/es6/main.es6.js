(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#addlesson').click(addLesson);
  }

  function addLesson(){
    var newLesson = $('#lessons > .lesson-builder:first-child').clone();
    console.log(newLesson);

    //newLesson.children().first().val(1);
    //newItem.find('.item-cost p').text('$0.00');
    $('#container').append(newLesson);
  }


})();
