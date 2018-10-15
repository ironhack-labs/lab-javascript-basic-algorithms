// Names and Input
var hacker1 = "Chloe";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("Insert the navigator's name");
console.log("The navigator's name is " + hacker2);

//Conditionals

if (hacker1.length>hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}
else if (hacker1.length<hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}
else {
  console.log("wow, you got equally long names, " + hacker1.length + " characters");
}

//Loops
var myString = "";
for (var letter = 0; letter < hacker1.length; letter++) {
    myString += hacker1[letter].toUpperCase();
    if (letter < hacker1.length - 1) {
    myString += " ";
  }
}
console.log(myString);

var myString2 = hacker2.split("").reverse().join("");
console.log(myString2);


var namesArray = [hacker1, hacker2];
namesArray.sort();
console.log(namesArray);

if (namesArray[0] === hacker1){
  console.log("The driver's name goes first");
}
else if (namesArray[0] === hacker2){
  console.log("Yo, the nav goes first definitely");
}
else {
  console.log("What? You both got the same name?");
}



// Lorem ipsum generator
