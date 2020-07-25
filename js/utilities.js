function checkUserId(id) {

  var idRegExp = /^[a-zA-z0-9]{4,12}$/; 
  if (!idRegExp.test(id)) {
      console.log("아이디는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!");
      return false;
  }
  return true;
}

function checkPassword(password1, password2) {

var password1RegExp = /^[a-zA-z0-9]{4,12}$/; //비밀번호 유효성 검사
if (!password1RegExp.test(password1)) {
    console.log("비밀번호는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!");
    return false;
}
//비밀번호와 비밀번호 확인이 맞지 않다면..
if (password1 != password2) {
    console.log("두 비밀번호가 맞지 않습니다.");
    return false;
}

return true; //확인이 완료되었을 때
}   

function checkMail(mail) {

var emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
if (!emailRegExp.test(mail)) {
    console.log("이메일 형식이 올바르지 않습니다!");
    return false;
}
return true; //확인이 완료되었을 때
}

function checkAll() {
if (!checkUserId($('form')[0].id.value)) {
    return false;
} else if (!checkPassword($('form')[0].pw.value, $('form')[0].confirmpw.value)) {
    return false;
} else if (!checkMail($('form')[0].email.value)) {
    return false;
} 

handleData();
return true;
}

function searchPostcode(){
  $("input[name='addr']").click(function(){

    new daum.Postcode({
      oncomplete: function(data) {
        $("input[name='addr']").val(data.address);
      }
    }).open();
  });
}

  
