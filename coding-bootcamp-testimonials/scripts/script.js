$("#testimonial2").fadeOut(0);
$(".prev").click(function(event){  
  $("#testimonial1").fadeToggle(500);
  $("#testimonial2").fadeToggle(500);
  $(".prev").css("background-color","black");
  $(".next").css("background-color","white");
});
$(".next").click(function(event){
  $("#testimonial1").fadeToggle(500);
  $("#testimonial2").fadeToggle(500);
  $(".next").css("background-color","black");
  $(".prev").css("background-color","white");
});