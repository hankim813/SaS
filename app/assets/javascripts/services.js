$(document).ready(function() {
  $("#corporate").click(function() {
    $("#1").show();
    $("#2").addClass("hide");
    $("#3").addClass("hide");
    $("#1a").addClass("active");
    $("#2a").removeClass("active");
    $("#3a").removeClass("active");
  });
  $("#business").click(function() {
    $("#2").removeClass("hide");
    $("#1").hide();
    $("#3").addClass("hide");
    $("#2a").addClass("active");
    $("#1a").removeClass("active");
    $("#3a").removeClass("active");
  });
  $("#startup").click(function() {
    $("#3").removeClass("hide");
    $("#1").hide();
    $("#2").addClass("hide");
    $("#3a").addClass("active");
    $("#1a").removeClass("active");
    $("#2a").removeClass("active");
  })
});

