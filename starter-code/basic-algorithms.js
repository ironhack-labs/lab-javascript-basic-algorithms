// Names and Input
var hacker1 = "pedro";

console.log("The driver's name is", hacker1);

var hacker2 = prompt("Navigator's name?");

console.log("The navigator's name is", hacker2);

//Conditionals
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has", hacker1.length, "characters");
} else if (hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has", hacker2.length, "characters");
} else {
  console.log("wow, you both got equally long names,", hacker1.length, "characters");
}

//Loops
var nameSpaceCaps = "";

for (var i = 0; i < hacker1.length; i++){
  nameSpaceCaps += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1){
    nameSpaceCaps += " ";
  }
}

console.log(nameSpaceCaps);

var reversedName = "";

for (var j = hacker2.length; j > 0; j--){
  reversedName += hacker2[j-1];
}

console.log(reversedName);

var whoFirst="b";

for (var k = 0, m = 0; k < hacker1.length || m < hacker2.length; k++, m++){  
  //same letter?
  if (hacker1[k] == hacker2[m]){
    continue;
  } else if (hacker1[k] < hacker2[m]){
    whoFirst = "d";
    break;
  } else if (hacker1[k] > hacker2[m]){
    whoFirst = "n";
    break;
  }
}

if (whoFirst == "d"){
  console.log("The driver's name goes first");
} else if (whoFirst == "n"){
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

// Lorem ipsum generator
