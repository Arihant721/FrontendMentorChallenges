$("#testimonial2").fadeOut(0);
$(".next").click(function(event){  
  $("#testimonial1").css("display","none");
  $("#testimonial2").fadeIn(500);
  $(".next").css("background-color","#eee");
  $(".prev").css("background-color","white");
});
$(".prev").click(function(event){
  $("#testimonial2").css("display","none");
  $("#testimonial1").fadeIn(500);
  $(".prev").css("background-color","#eee");
  $(".next").css("background-color","white");
});