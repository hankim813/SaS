$(document).ready(function() {
  $("#corporate").click(function() {
    $("#sec-corp").show();
    $("#sec-business").addClass("hide");
    $("#sec-corp").removeClass("hide");
    $("#sec-startup").addClass("hide");
    $("#1a").addClass("active");
    $("#2a").removeClass("active");
    $("#3a").removeClass("active");
  });
  $("#business").click(function() {
    $("#sec-business").removeClass("hide");
    $("#sec-corp").hide();
    $("#sec-startup").addClass("hide");
    $("#2a").addClass("active");
    $("#1a").removeClass("active");
    $("#3a").removeClass("active");
  });
  $("#startup").click(function() {
    $("#sec-startup").removeClass("hide");
    $("#sec-corp").hide();
    $("#sec-business").addClass("hide");
    $("#3a").addClass("active");
    $("#1a").removeClass("active");
    $("#2a").removeClass("active");
  });
  $("#1a").click(function() {
    $("#1a").addClass("active");
    $("#2a").removeClass("active");
    $("#3a").removeClass("active");
    $("#sec-corp").removeClass("hide");
    $("#sec-business").addClass("hide");
    $("#sec-startup").addClass("hide");
  });
  $("#2a").click(function() {
    $("#2a").addClass("active");
    $("#1a").removeClass("active");
    $("#3a").removeClass("active");
    $("#sec-business").removeClass("hide");
    $("#sec-corp").addClass("hide");
    $("#sec-startup").addClass("hide");
  });
  $("#3a").click(function() {
    $("#3a").addClass("active");
    $("#2a").removeClass("active");
    $("#1a").removeClass("active");
    $("#sec-startup").removeClass("hide");
    $("#sec-business").addClass("hide");
    $("#sec-corp").addClass("hide");
  });
});

