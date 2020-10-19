$(function(){

//  alert('td의 개수 : ' + $('td').length + '개');

  $('#testButton').click(function(){

    $.ajax({
      url : '/test/ajaxTest',
      success : function(result) {
        $('#testSpan').append(result);
      }
    });

  });

});