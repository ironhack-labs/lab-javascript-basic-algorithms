// Names and Input
var hacker1 = "Juancho";
console.log ("The drivers name is " + hacker1);

var hacker2 = prompt ("What's the navigator's name?");
console.log ("The navigator's name is " + hacker2);


//Conditionals
var hacker1Length = hacker1.length;
var hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length){
  console.log ("The Driver has the longest name, it has " + hacker1Length + " characters");
}
else if (hacker1Length < hacker2Length){
  console.log ("Navigator got the longest name, it has " + hacker2Length + " characters");
}
else{
  console.log ("wow, you both got equally long names, " + hacker1Length + " characters!!!!!!");
}


//Loops
console.log ("\n Driver's name in capital letters, separeted by space:")
for (i=0; i<hacker1Length; i++) {
  console.log (hacker1[i].toUpperCase())
}

console.log ("\n Driver's name in reverse order:")
var reverseName ="";
for (i=hacker1Length; i>0; i--) {
  reverseName += hacker1[i];
}
console log(reverseName);



// Lorem ipsum generator
