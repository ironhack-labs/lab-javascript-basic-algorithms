// Iteration 1: Names and Input
let hacker1 = "Gerardo Lopez";
console.log (`The driver´s name is ` + hacker1);
let hacker2 = "Adriana Lopez";
console.log (`The navigater name is `+ hacker2);

// Iteration 2: Conditionals
let hacker1 = "Gerardo Lopez";
let hacker2 = "Adriana Lopez";
if (hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has "+ hacker1.length +" characters")
}
else 
  if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has "+ hacker2.length +" characters")
                }
  else
    console.log ("Wow, you both have equally long names, "+ hacker1.length +" characters")
// Iteration 3: Loops
let hacker1 = "Gerardo Lopez";
let hacker2 = "Adriana Lopez";
let i = 0;
let driverCapital= "";
while(i<hacker1.length){
  driverCapital += hacker1[i].toUpperCase() +" ";
  i++;
  if(i>hacker1.length){
    break;
  }
}
console.log(driverCapital);

let hacker1 = "Gerardo Lopez";
let hacker2 = "Adriana Lopez";
let i = hacker1.length-1;
let driverCapital= "";
while(i>=0){
  driverCapital += hacker1[i]
  i--;
  if(i<0){
    break;
  }
}
console.log(driverCapital);

let hacker1 = "Gerardo Lopez";
let hacker2 = "Adriana Lopez";
if (hacker1<hacker2){
  console.log("The driver´s name goes first")
}
else 
  if(hacker1>hacker2){
    console.log("Yo, the navigator goes first, definitely")
  }
  else
    console.log("What?! You both have the same name?")
