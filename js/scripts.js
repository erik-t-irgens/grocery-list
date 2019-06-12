$(document).ready(function() {

var groceryArrays = [];
  $("#groceryList").submit(function(event) {
    var listItem = $("#listItem1").val();
      groceryArrays.push(listItem);
      document.getElementById("listEdit").innerHTML = "";

      toUpper = function(x){
        return x.toUpperCase();
      };
      array2 = groceryArrays.map(toUpper);

      array2.sort();
      array2.forEach(function(arraytwo){
        $("#listEdit").append("<li>" + arraytwo + "</li>");
      })
      event.preventDefault();

  });
});

//  USE THIS INSTEAD. IT'S MUCH BETTER. IT HAS BETTER UNDERSTANDING FOR WHAT YOU'RE DOING
// var groceryList = [];
    //
    // $("#addItem").onClick(function() {
    //     var listItem = $("#groceryList").val();
    //     groceryList.push(groceryList)
    // });
    //
    // ("#submitList").onclick(function() {
    //     // var upperList = groceryList.map(function(item){ return item.toUpperCase() });
    //     var upperList = [];
    //     groceryList.forEach(function(item){
    //         upperList.push(item.toUpperCase());
    //     });
    //     groceryList.toUppercase();
    //     groceryList.sort();
    //
    // });

//Word play program- input into console
// var string = prompt("enter sentence");
// var sentArray = string.split('');
// for (var index = 0; index < sentArray.length; index += 1) {
//     if (sentArray[index] === "a" || sentArray[index] === "e" || sentArray[index] === "i" || sentArray[index] === "o" || sentArray[index] === "u" || sentArray[index] === "A" || sentArray[index] === "E" || sentArray[index] === "I" || sentArray[index] === "O" || sentArray[index] === "U") {
//         sentArray[index] = "-";
//     }
// };
// console.log(sentArray.join(' '));


// count to function
// var userNum = parseInt(prompt("Enter a number to count to"));
// var userCount = parseInt(prompt("Enter a number to count by"));
// for (var current = 0; current <= userNum; current += userCount) {
// 	console.log(current);
// }
//
//card deck generator
// var suits = ["spade", "club", "heart", "diamond"];
// var cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
// suits.forEach(function(suit){
//     cards.forEach(function(card){
// 		console.log(card + " of " + suit);
//     });
// });
