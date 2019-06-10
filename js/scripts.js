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
