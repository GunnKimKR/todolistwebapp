
$(function(){

  //전체 조회
  $('#btn1').click(function(){
    $.ajax({
        url : '/api/todo',
        type : 'get',
        success : function(response) {
          todoList = response.data.todoList;
          appendStr = todoListAppendStr(todoList);
          showTodoData(appendStr);
        }
    });
  });

  //Todo번호로 조회
  $('#btn2').click(function(){
    todoId = $('#todoId').val() == ''? 0 : $('#todoId').val();
    $.ajax({
        url : '/api/todo/' + todoId,
        type : 'get',
        success : function(response) {
          todo = response.data.todo;
          appendStr = todoAppendStr(todo);
          showTodoData(appendStr);
        },
        error : function(response) {
          showErrorMessage(response);
        }
    });
  });

  //회원번호로 조회
  $('#btn3').click(function(){
    userId = $('#userId').val() == ''? 0 : $('#userId').val();
    $.ajax({
        url : '/api/todo/user/' + userId,
        type : 'get',
        success : function(response) {
          todoList = response.data.todoList;
          appendStr = todoListAppendStr(todoList);
          showTodoData(appendStr);
        },
        error : function(response) {
          showErrorMessage(response);
        }
    });
  });

  //등록
  $('#btn4').click(function(){
    $.ajax({
        url : '/api/todo',
        type : 'post',
        data : $('#insertForm').serialize(),
        success : function(response) {
          hideAll();
          $('#message').html('등록되었습니다.').show();
        },
        error : function(response) {
          showErrorMessage(response);
        }
    });
  });

  //수정
  $('#editBtn').click(function(){
    checkedYn = $('#completedYnCheck').is(':checked') ? 'Y' : 'N';
    $('#editForm input[name=completedYn]').val(checkedYn);

    todoId = $('#editForm input[name=todoId]').val() == ''? 0
      : $('#editForm input[name=todoId]').val();

    $.ajax({
        url : '/api/todo/' + todoId,
        type : 'put',
        data : $('#editForm').serialize(),
        success : function(response) {
          hideAll();
          $('#message').html('수정되었습니다.').show();
        },
        error : function(response) {
          alertErrorMessage(response);
        }
    });
  });


  //삭제
  $('#deleteBtn').click(function(){
    todoId = $('#editForm input[name=todoId]').val() == ''? 0
      : $('#editForm input[name=todoId]').val();

    $.ajax({
        url : '/api/todo/' + todoId,
        type : 'delete',
        data : $('#editForm').serialize(),
        success : function(response) {
          hideAll();
          $('#message').html('삭제되었습니다.').show();
        },
        error : function(response) {
          alertErrorMessage(response);
        }
    });
  });

  //취소
  $('#cancelBtn').click(function(){
    $('#edit').hide();
  });

});

//상세보기
$(document).on('click', 'tr.data', function(){

  isChecked = $(this).attr('completedYn') == 'Y';

  $('#editForm input[name=title]').val($(this).attr('title'));
  $('#editForm #completedYnCheck').prop('checked', isChecked);
  $('#editForm input[name=todoId]').val($(this).attr('todoId'));
  $('#edit').show();
});

function hideAll(){
  $('#testTable').hide();
  $('#edit').hide();
}

function alertErrorMessage(response){
  message = response.responseJSON.error.errorMessage;
  if(message != null){
    alert(message);
    return;
  }
  alert('에러가 발생했습니다.');
}

function showErrorMessage(response){
  hideAll();
  message = response.responseJSON.error.errorMessage;
  if(message != null){
    $('#message').html(response.responseJSON.error.errorMessage).show();
    return;
  }
  $('#message').html('에러가 발생했습니다.').show();

}

function showTodoData(str){
  $('.data').remove();
  $('#testTable').append(str).show();
  $('#message').html('');
}

function todoListAppendStr(todoList){
  appendStr = '';
  for(i = 0; i < todoList.length; i ++){
      todo = todoList[i];
      appendStr += todoAppendStr(todo);
  }
  return appendStr;
}

function todoAppendStr(todo){
  if(todo != null){
    title = todo.title.length >= 15 ? todo.title.substring(0, 14) + "..." : todo.title;

    appendStr = '';
    appendStr += '<tr class="data" todoId="' + todo.todoId + '" title="' + todo.title + '" completedYn="' + todo.completedYn + '">';
    appendStr += '<td>' + todo.nickname + '</td>';
    if(todo.completedYn == 'Y'){
      appendStr += '<td style="text-decoration:line-through;">' + title + '</td>';
    }else{
      appendStr += '<td>' + title + '</td>';
    }
    appendStr += '</tr>';
  }
  return appendStr;
}
