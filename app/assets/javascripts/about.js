$(document).ready(function() {
  $("#understanding").click(function(){
    $("#passion").removeClass("green");
    $("#expertise").removeClass("green");
    $("#understanding").addClass("green");
    $("#arrowbox1").addClass("hide");
    $("#arrowbox3").addClass("hide");
    $("#arrowbox2").removeClass("hide");
  });
  $("#expertise").click(function(){
    $("#passion").removeClass("green");
    $("#understanding").removeClass("green");
    $("#expertise").addClass("green");
    $("#arrowbox1").addClass("hide");
    $("#arrowbox2").addClass("hide");
    $("#arrowbox3").removeClass("hide");
  });
  $("#passion").click(function(){
    $("#understanding").removeClass("green");
    $("#expertise").removeClass("green");
    $("#passion").addClass("green");
    $("#arrowbox2").addClass("hide");
    $("#arrowbox3").addClass("hide");
    $("#arrowbox1").removeClass("hide");
  });
});
