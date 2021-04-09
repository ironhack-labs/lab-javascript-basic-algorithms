console.log("I'm ready");

//Itineration1: Names and Input
let hacker1='Jorge', hacker2='Ander';

console.log("The driver's name is: ",hacker1);
console.log("The navigator's name is: ",hacker2);

//Itineration2: Conditional
if(hacker1.length > hacker2.length){

  console.log("The driver's has the longest name, it has ",hacker1.length," characters");
}
if(hacker1.length < hacker2.length){
  
  console.log("It seems that the navigator has the longest name, it has ",hacker2.length, "characters");
}
else{
  console.log("Wow, you both have equally long names, ",hacker1.length," characters");
}

//Itineration3: Loops
newHacker1="";

hacker1 = hacker1.toUpperCase();

hacker1 = hacker1.split('');

console.log(hacker1);

for(i = hacker1.length -1; i >= 0; i--){
  newHacker1 += hacker1[i];
}
console.log(newHacker1);

newHacker2 ="";

hacker2 = hacker2.toUpperCase();
hacker2 = hacker2.split('');

console.log(hacker2);

for(i = hacker2.length -1; i >= 0; i--){
  newHacker2 += hacker2[i];
}
console.log(newHacker2);

alpha = newHacker1.localeCompare(newHacker2);


console.log(alpha);

switch(alpha){
  case 1:
  console.log("The driver's name goes first");
  break;
  case 0:
  console.log("What?! You both have the same name?");
  break;
  case -1:
  console.log("Yo, the navigator goes first definitely");
  break;
}

