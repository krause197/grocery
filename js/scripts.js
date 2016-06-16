$(document).ready(function() {
  $("form").submit(function(event) {

    var foods = ["food1", "food2", "food3"];
    var userInput = [];

    foods.forEach(function(food) {
      userInput.push($("input#" + food).val());
      });

    userInput.sort();
    var userList = userInput.toString();
    var finalList = userList.toUpperCase();
    $("ul#grocery-list").append(finalList);

    event.preventDefault();

  });
});
