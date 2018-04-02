// Names and Input
var hacker1 = "Stephen";
var hacker2 = "Jason";

console.log("The driver\'s name is" + " " + hacker1);
console.log("The navigator\'s name is" + " " + hacker2);
//Conditionals
if (hacker1.length === hacker2.length){
  console.log("Wow, you both equally have long names, " + hacker1.length + " characters");
}
else if (hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}
else{
  console.log("Yo, the navigator got the longest name, it has " + hacker2.length + " characters" );
}

var result = "";

for (var i = 0; i < hacker1.length; i++){
  result = result + hacker1[i] + " ";

}
 console.log(result.toUpperCase());

// Lorem ipsum generator
