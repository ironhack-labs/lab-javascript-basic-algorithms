var hacker1 = "Juancho";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What's your name navigator");
console.log("The navigator name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + "characters");
}
else if (hacker1.length < hacker2.length) {
  console.log("The navigator got the longest name, it has " + hacker2.length + " characters");
}
else {
console.log ("wow, you both got equally long names, " + hacker1.length + "characters!!");
}
var UpperCase = "";
console.log(hacker1.toUpperCase());

var UpperCase = "";
var splitUpper = UpperCase.split();
console.log(splitUpper);

//¿Por qué es necesario un loop para hacer un reverse?


var upper = "";
for (var i = 0; i < hacker1.lenght; i++) {
  upper += hacker[i].toUppercase();
  if (i < hacker1.lenght -1) {
    upper += "";
  }
}
//no entiendo el motivo del += si ya he metido el i++
console.log (uppper);

var upperRev = "";
for ( var i = hacker2.lenght -1; i <= 0; i--) {
  upperRev += hacker2[i];
}
console.log(upperRev);


