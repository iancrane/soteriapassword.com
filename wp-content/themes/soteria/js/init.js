  $('a').filter(function() {
     return this.hostname && this.hostname !== location.hostname;
  }).addClass("external");
  $('a.big-button, a.small-button').removeClass('external');
  $('a.external').attr('target', '_blank');
  
  $(document).ready(function() {
  $('input[type="text"],input[type="email"],textarea').each(function() {
    var default_value = this.value;
    $(this).css('color', '#666'); // this could be in the style sheet instead
    $(this).focus(function() {
      if(this.value == default_value) {
        this.value = '';
        $(this).css('color', '#333');
      }
    });
    $(this).blur(function() {
      if(this.value == '') {
        $(this).css('color', '#666');
        this.value = default_value;
      }
    });
  });
});