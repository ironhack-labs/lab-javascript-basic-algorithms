// Names and Input
var conductor = "Diego";
console.log("El nombre del conductor es?" + conductor);
var conductor2 = prompt("Cuál es el nombre del conductor?");
console.log("El nombre del navegador lo tiene " + conductor2);

//Conditionals
if (conductor.length > conductor2.length) {
  console.log( "El nombre de conductor lo tiene " + conductor.length + " characters." );
} else if (conductor.length < conductor2.length) {
  console.log( "La persona con el nombre mas largo lo tuene " + Teresa.length + " characters." );
} else {
  console.log( "Los dos tuvieron el mismo nombre largo,  " + Diego.length + " characters." );
}

// Loops
function concat(word) {
  var result = "";
  for (var i = 0; i < word.length; i++) {
    result += (word.charAt(i) + " ");
  }
  return result;
}

function upper() {
  var up = Diego.toUpperCase();
  console.log(concat(up));
}
upper();

function reverse(string) {
  var result = "";
  for (var i = string.length - 1; i >= 0; i--)
    result += string[i];
  console.log(result);
}
reverse(Teresa);


function compare(a, b) {
  return a.localeCompare(b);
}
var driverFirst = "El nombre del conductor va primero";
var navFirst = "el nombre del navegador va primero definitivamente";
console.log((compare(Diego, Teresa) == -1) ? driverFirst : navFirst);

