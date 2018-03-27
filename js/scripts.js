$(function() {
  $("#fortune").submit(function(event) {
    var unluckyArray = []
    var luckyArray = []
    $("input:checkbox[name=unlucky]:checked").each(function(){
      var unlucky = $(this).val();
      unluckyArray.push(unlucky);
      return unluckyArray;
    });
    $("input:checkbox[name=lucky]:checked").each(function(){
      var lucky = $(this).val();
      luckyArray.push(lucky);
      return luckyArray;
    });
    if (unluckyArray.length > luckyArray.length) {
      $("#badFortune").show();
    } else if (luckyArray.length > unluckyArray.length) {
      $("#goodFortune").show();
    } else {
      $("#noFortune").show();
    }
    var name = $("#name").val();
    $(".name").text(name);
    $("#fortune").hide();
  event.preventDefault();
  });
});
