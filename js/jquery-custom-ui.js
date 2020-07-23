function init(){
  $( "select" ).selectmenu({
    width: 240,
    fontSize: 18
  });
  $( "input[type='radio']").checkboxradio().buttonset().parent().css({'fontSize': 25.4,'fontFamily': 'nanumpen'})
  $(".btn").button();
  $(".btn").button().css('fontFamily', 'nanumpen');
}


$(document).ready(function(){
  init();
})