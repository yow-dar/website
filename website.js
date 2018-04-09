$(document).ready(function(){
  $("#background1").delay(2000).fadeIn(2000);
  $(".content").delay(4000).fadeIn(2000);
  $("#background1").delay(18000).fadeOut(1000);
  //$(".content").delay(18000).fadeOut(1000);
  $(".background2").delay(19000).show(0);
  $(".content2").delay(19000).fadeIn(2000);
  $(".background2").delay(31500).fadeOut(3000);
  //$(".content2").delay(35000).fadeOut(3000);
  $(".background3").delay(38000).show(0);
  var boatdown = document.getElementsByClassName("boat_down");
  var boatup = document.getElementsByClassName("boat_up");
  $(boatdown).hover(function(){
    //$(boatdown).css('opacity',0.5);
    //$(boatup).css('opacity',1);
    //$(boatup).css('right','+5%');
  });
  //left mouse onclick
  $(boatdown).click(function(){
      $(boatdown).animate({ left: "+500px"},5000);  
  })
});
