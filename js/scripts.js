$(document).ready(function() {
  $("form").submit(function(event) {

    var foods = ["food1", "food2", "food3"];
    var userInput = [];

    foods.forEach(function(food) {
      userInput.push($("input#" + food).val());

      // userInput.sort();
      // var userList = userInput.toString();
      // userList.toUpperCase();
      // $("ul#grocery-list").append(userInput);
      });
    alert(userInput);
    event.preventDefault();

  });
});
