// Names and Input


//Conditionals


// Lorem ipsum generator


var hacker1 = "martin"
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("what is your name");
console.log("The navigator's name is " + hacker2);
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + "characters");
}
else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + "characters");
}
else {
  console.log ("wow, you both got equally long names, " + hacker1.length + "characters!!");
}

var capitalJohn = ""
for (var i=0; i < hacker1.length; i++){
  capitalJohn += hacker1[i].toUpperCase() +" ";
  
}

console.log (capitalJohn);



  var navigator = "";
  var back = "";
 
for (var k=0; k < hacker2.length; k++){
  navigator += hacker2[k];
 
  
  
}

console.log (navigator);






