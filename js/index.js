console.log("I'm ready!");
// Iteration 1: Names and Input
var hacker1 = 'Ricardo';
console.log(`The driver's name is ${hacker1}`);
var hacker2 = 'Rute';
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characteres.`)
}

// Iteration 3: Loops

var hacker1Up = '';
for(var i=0; i < hacker1.length; i++){
  hacker1Up = hacker1Up + hacker1[i] + ' ';
  if(hacker1Up.length === hacker1.length*2){
    console.log(hacker1Up.toUpperCase())
  }
}

var hacker2Rev = '';
for(var i=hacker2.length - 1; i >= 0; i--){
  hacker2Rev = hacker2Rev + hacker2[i];
  if(hacker2Rev.length === hacker2.length){
    console.log(hacker2Rev)
  }
}

if(hacker1.localeCompare(hacker2) < hacker2.localeCompare(hacker1)){
  console.log(`The driver's name goes first.`)
}else if(hacker1.localeCompare(hacker2) > hacker2.localeCompare(hacker1)){
  console.log(`Yo, the navigator goes first definitely.`)
}else{
  console.log(`What?! You both have the same name?`)
}