function searchPostcode(){
  $("input[name='address']").click(function(){

    new daum.Postcode({
      oncomplete: function(data) {
        $("input[name='address']").val(data.address);
      }
    }).open();
  });
}

  
