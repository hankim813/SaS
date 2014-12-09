$(document).ready(function() {
  $("#corporate").click(function() {
    $("#sec-corp").show();
    $("#sec-business").addClass("hide");
    $("#sec-corp").removeClass("hide");
    $("#sec-startup").addClass("hide");
    $("#1a a").addClass("active");
    $("#2a a").removeClass("active");
    $("#3a a").removeClass("active");
    $("#corporate").addClass("hovered");
    $("#business").removeClass("hovered");
    $("#startup").removeClass("hovered");
  });
  $("#business").click(function() {
    $("#sec-business").removeClass("hide");
    $("#sec-corp").hide();
    $("#sec-startup").addClass("hide");
    $("#2a a").addClass("active");
    $("#1a a").removeClass("active");
    $("#3a a").removeClass("active");
    $("#corporate").removeClass("hovered");
    $("#business").addClass("hovered");
    $("#startup").removeClass("hovered");
  });
  $("#startup").click(function() {
    $("#sec-startup").removeClass("hide");
    $("#sec-corp").hide();
    $("#sec-business").addClass("hide");
    $("#3a a").addClass("active");
    $("#1a a").removeClass("active");
    $("#2a a").removeClass("active");
    $("#corporate").removeClass("hovered");
    $("#business").removeClass("hovered");
    $("#startup").addClass("hovered");
  });
  $('#1a a').click(function() {
    $("#sec-corp").show();
    $("#sec-business").addClass("hide");
    $("#sec-corp").removeClass("hide");
    $("#sec-startup").addClass("hide");
    $("#1a a").addClass("active");
    $("#2a a").removeClass("active");
    $("#3a a").removeClass("active");
    $("#corporate").addClass("hovered");
    $("#business").removeClass("hovered");
    $("#startup").removeClass("hovered");
});
  $('#2a a').click(function() {
    $("#sec-business").removeClass("hide");
    $("#sec-corp").hide();
    $("#sec-startup").addClass("hide");
    $("#2a a").addClass("active");
    $("#1a a").removeClass("active");
    $("#3a a").removeClass("active");
    $("#corporate").removeClass("hovered");
    $("#business").addClass("hovered");
    $("#startup").removeClass("hovered");
  });
  $('#3a a').click(function() {
    $("#sec-startup").removeClass("hide");
    $("#sec-corp").hide();
    $("#sec-business").addClass("hide");
    $("#3a a").addClass("active");
    $("#1a a").removeClass("active");
    $("#2a a").removeClass("active");
    $("#corporate").removeClass("hovered");
    $("#business").removeClass("hovered");
    $("#startup").addClass("hovered");
  });
});

