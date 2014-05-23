(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('form').hide();
    $('#show-register').click(showRegisterForm);
    $('#show-login').click(showLoginForm);
    $('.back').click(goBack);
  }
  function showRegisterForm() {
    $('#show-register, #show-login').fadeOut();
    $('#form-register').fadeIn();
  }
  function showLoginForm() {
    $('#show-register, #show-login').fadeOut();
    $('#form-login').fadeIn();
  }
  function goBack() {
    $('#show-register, #show-login').fadeIn();
    $('form').fadeOut();
  }
})();

//# sourceMappingURL=main.map
