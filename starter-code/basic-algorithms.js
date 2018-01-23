// Names and Input
var hacker1 = "Bob";

console.log("The drivers name is " + hacker1);
var hacker2 = prompt("What is the navigators name?");
console.log("The navigators name is " + hacker2);


//Conditionals

function longestName(){
  var driverLength = hacker1.length;
  var navigatorLength = hacker2.length;
  if (driverLength > navigatorLength){
    console.log("The Driver has the longest name, it has " + driverLength + " characters");
  } else if (driverLength < navigatorLength) {
    console.log("Yo, navigator got the longest name, it has " +  navigatorLength  + "  characters");
  } else {
    console.log("wow, you both got equally long names, " + navigatorLength +  "characters!!");
  }
}

function driverLettersCaps(){
  var result = "";
  for (var i = 0; hacker1.length > i  ;i++ ){
    result += hacker1[i].toUpperCase();
    result += " ";
  }
  console.log(capSize);
}

function printReverse(){
  result = hacker2.split('').reverse().join("");
  console.log(result);
}

function lexicographicOrder(){
  if (hacker1 < hacker2) {
    console.log("The driver's name goes first");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely");
  } else {
    console.log("What?! You both got the same name?");
  }
}



longestName();
driverLettersCaps();
printReverse();
lexicographicOrder();
