// Names and Input
console.log("I'm Ready!");

var hacker1 = "Fareaha".split('').join(' ');
hacker1 = hacker1.toUpperCase();
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What is your name?");
var hacker2_1 = hacker2.split('').reverse().join('');
console.log("The navigator's name is " + hacker2_1);


//Conditionals
if (hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
  } else if (hacker1 < hacker2.length){
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  } else {
    console.log("wow, you both got equally long names," + hacker1.length + " characters!!");
  }
  
  if (hacker1[0] < hacker2[0]){
    console.log("The driver's name goes first")
  }else if (hacker2[0] > hacker1[0]){
    console.log("Yo, the navigator goes first definitely")
  } else {
    console.log("What?! You both got the same name?")
  }

// Lorem ipsum generator
