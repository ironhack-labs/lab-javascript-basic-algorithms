var hacker1 = "Clément"

console.log("The driver's name is "+  hacker1);

var hacker2 = prompt("What is your navigator?")

console.log("The navigator's name is " + hacker2);

if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length +  " characters");
}
else if(hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length +  " characters");
}
else{
  console.log("wow, you both got equally long names, " +  hacker1.length + " characters!!");

}

var espace = ""

for (i = 0; i < hacker1.length; i++) {
  espace += hacker1[i].toUpperCase() + " ";

  
}
console.log(espace);

var reverse = ""

for (i = hacker2.length-1; i >= 0; i--) {
  reverse += hacker2[i];
}

console.log(reverse);

if (hacker1[0] < hacker2[0]){
  console.log("The driver's name goes first");
}

else if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely");
}

else {
  console.log("what?! You both got the same name?");
}