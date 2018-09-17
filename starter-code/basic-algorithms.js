// Names and Input
var hacker1 = 'Eva';
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What's your name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}else if(hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}else{
  console.log("wow, you both got equally long names, " + hacker2.length + " characters!!");
}

// Lorem ipsum generator
var driversName="";
for(var i=0; i<hacker1.length; i++){
  if(i === hacker1.length-1){
    driversName += hacker1[i];
  }
  else{driversName += hacker1[i] + " "};
}
console.log(driversName.toUpperCase());

var navigatorsName="";
for(var i=hacker2.length-1; i > -1; i--){
  navigatorsName += hacker2[i];
}
console.log(navigatorsName);




/*The driver's name goes first
Yo, the navigator goes first definitely
What?! You both got the same name?*/