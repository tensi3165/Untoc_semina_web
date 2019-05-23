$('document').ready(function(){
  $('#navigation').load('navigation.html');

  $(function() {
    var url = window.location.href;

    $('.nav a').each(function() {
      if (url == (this.href)) {
        $(this).closest("li").addClass('active');
      }
    })
  })
});
