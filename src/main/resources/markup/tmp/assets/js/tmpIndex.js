const duration = 1;
const op_0 = { opacity: 0, ease: Linear.ease };
const op_1 = { opacity: 1 };

$(function(){

  $('.add-item a').click(function(){
    TweenMax.to($('.add-item-form'), 0.5, {right:'3%',ease:Quint.easeOut});

    TweenLite.fromTo($('.add-item'), duration, op_1, op_0);
    $('.add-item').css('visibility', 'hidden');
    TweenLite.fromTo($('.add-item-enter'), duration, op_0, op_1);
    $('.add-item-enter').css('visibility', 'visible');
  });

  $('.add-item-form .right-arrow').click(function(){
    TweenMax.to($('.add-item-form'), 0.5, {right:'-100%',ease:Quint.easeOut});

    TweenLite.fromTo($('.add-item'), duration, op_0, op_1);
    $('.add-item').css('visibility', 'visible');
    TweenLite.fromTo($('.add-item-enter'), duration, op_1, op_0);
    $('.add-item-enter').css('visibility', 'hidden');
  });

  $('.input-clip-icon').click(function(){
    $(this).toggleClass('input-clip-icon-active');
  });

  $('#colorPicker').tinycolorpicker();
  $('#colorPicker canvas').bind('touchend', function(){
    $('#colorPicker').hide();
    $('.input-label-icon').css({
      'background': 'none ' + $('.colorInput').val(),
      'border': $('.colorInput').val() == '#FFFFFF' ? '1px solid lightgray' : 'none'
    });
  });

  $('.input-label-icon').click(function(){
    $('#colorPicker').show();
    $('#colorPicker .color').trigger('touchstart');
  });

});