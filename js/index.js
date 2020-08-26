
// Iteration 1: Names and Input

var hacker1 = "salim";
console.log("The driver's name is " + hacker1);

var hacker2 = "laurent";
console.log("The Navigator name is "+hacker2);

//Iteration 2: Conditionals

if(hacker1 === hacker2){
  console.log("Wow, you both have equally long names, "  + hacker1.length + "characters!");
} else {
  if(hacker1.length > hacker2.length) {
    console.log(hacker1 + " is the longer name than "+ hacker2 +" he have: " + hacker1.length + "characters");
    
  } else {
    console.log(hacker2 + " is the longer name than "+ hacker1 +" he have: " + hacker2.length + " characters");
  }   
}


//Iteration 3: Loops

//3.1

let nom = "";
for (let i = 0; i < hacker1.length; i++) {
    nom += hacker1[i].toUpperCase() + ' ';
}
console.log(nom);

//3.2

var res=hacker2
console.log(res.split('').reverse().join(''));

//3.3

var names = [hacker1, hacker2];
// console.log(names.sort() );
var resTab = names.sort();
// console.log(resTab[0]);

if(resTab[0] === resTab[1]) {
  console.log('What?! You both have the same name?');
} else {
  if(resTab[0] === hacker1) {
    console.log("The driver's name goes first.");
  }
  else {
    console.log("Yo, the navigator goes first definitely.");
  }
}
