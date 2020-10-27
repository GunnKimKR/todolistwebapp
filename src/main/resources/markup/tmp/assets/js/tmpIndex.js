const duration = 1;
const op_0 = { opacity: 0, ease: Linear.ease };
const op_1 = { opacity: 1 };

function fadeIn() {
   TweenLite.fromTo($el, duration, from, to);
}

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

});