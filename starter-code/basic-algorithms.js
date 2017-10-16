// Names and Input
var hacker1 = "Tom";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What is your name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length){
  console.log("The driver's has the longest name, it has " + hacker1.length + " characters" );
} else if (hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters" );
} else {
console.log("wow, you got equally long names, " + hacker1.length + " characters" );
}

var driverName = hacker1.split("").join(" ").toUpperCase();
console.log(driverName);

var driverName2 = hacker2.split('').reverse().join('');
console.log(driverName2);




var user1 = hacker1.toLowerCase();
var user2 = hacker2.toLowerCase();

if ( user1 > user2 ){
  console.log("The driver's name goes first");
} else if ( user1 < user2 ) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}


// Lorem ipsum generator
