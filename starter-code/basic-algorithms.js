// Names and Input
// 1
var hacker1 = 'Eva';
// 2
console.log("The driver's name is " + hacker1);
// 3
var hacker2 = prompt("What's your name?");
// 4
console.log("The navigator's name is " + hacker2);

//Conditionals
// 5
if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}else if(hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}else{
  console.log("wow, you both got equally long names, " + hacker2.length + " characters!!");
}

// Lorem ipsum generator
// 6
var driversName="";
for(var i=0; i<hacker1.length; i++){
  if(i === hacker1.length-1){
    driversName += hacker1[i];
  }
  else{driversName += hacker1[i] + " "};
}
console.log(driversName.toUpperCase());

// 7
var navigatorsName="";
for(var i=hacker2.length-1; i > -1; i--){
  navigatorsName += hacker2[i];
}
console.log(navigatorsName);

// 8
if (hacker1.toLowerCase() < hacker2.toLowerCase()){
  console.log("The driver's name goes first");
}else if(hacker1.toLowerCase() > hacker2.toLowerCase()){
  console.log("Yo, the navigator goes first definitely");
}else{
  console.log("What?! You both got the same name?");
}