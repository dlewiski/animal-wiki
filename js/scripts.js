$(document).ready(function() {
  var stomach = prompt("can you handle the madness?");
  var stomach = stomach.toLowerCase();
      if(stomach === "yes") {
        $(".dragon").show();
      } else if(stomach === "no") {
        $(".unicorn").show();
      } else {
        alert("choose yes or no or meet your untimely demise");
      }
      $("#dragonPic").click(function(){
        $("#dragoninfo").toggle();
      });
      $("#unicornPic").click(function(){
        $("#unicorninfo").toggle();
      });
});
