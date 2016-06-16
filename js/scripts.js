$(document).ready(function() {
  $("form").submit(function(event) {

    var foods = ["food1", "food2", "food3"];

    foods.forEach(function(food) {
      var userInput = $("input#" + food).val();
      $("ul#grocery-list").append(userInput);
      });

    event.preventDefault();

  });
});
