$(document).ready(function(){
  $("#background1").delay(2000).fadeIn(2000);
  $(".content").delay(4000).fadeIn(2000);
  $("#background1").delay(18000).fadeOut(1000);
  $(".content").delay(18000).fadeOut(1000);
  $(".background2")delay(19000).show();
  $(".content2").delay(19000).fadeIn(2000);
  $(".background2").delay(21500).fadeOut(3000);
  $(".content2").delay(25000).fadeOut(3000);
  $(".background3").delay(28000).show();
  var boatdown = document.getElementById("boat_down");
  var boatup = document.getElementById("boat_up");
  $(boatdown).hover(function(){
    $(boatdown).css('opacity',0.5);
    $(boatup).css('opacity',1);
    $(boatup).css('right','+5%');
  });
  //left mouse onclick
  $("Left_House").click(function(){
    $(boatup).animate({opacity: 0.5, left: "100px"},1000);  
  })
});
