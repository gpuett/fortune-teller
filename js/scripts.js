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
    console.log(unluckyArray);
    console.log(luckyArray);
  event.preventDefault();
  });
});
