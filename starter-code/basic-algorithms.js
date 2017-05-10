
//Super Random message

// Names and Input

var hacker1 = Manu;
console.log(hacker1);
var hacker2 = promt("Please, tell me your name:");
console.log("The navigator's name is "+ hacker2);

//Conditionals


if ((hacker1.length) > (hacker2.length)) {
  console.log("The Driver has the longest name, it has " + hacker1.length + "characters");
}
if  ((hacker1.length) < (hacker2.length)) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + "characters");
}
if ((hacker1.length) === (hacker2.length)) {
  console.log("wow, you both got equally long names, " + hacker1.length + "characters!!");
}

var hacker3 = "";
for (var i = 0; i < hacker1.length; i++){
      hacker3 = hacker3 + hacker1[i] + " ";
}
console.log(hacker3.toUpperCase());

var hacker4 = "";
for (var i = hacker2.length - 1; i >= 0; i--){
      hacker4 = hacker4 + hacker2[i];
}
console.log(hacker4);

if (hacker1[0] < hacker2[0]) {
  console.log("The Driver's name goes first");
}
if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely");
}
if (hacker1[0] === hacker2[0]) {
  console.log("What?! You got the same name");
}


// Lorem ipsum generator


//some changes coming.
