// Iteration 1: Names and Input

console.log("I'm ready!");

const hacker1 = prompt("The driver's name is");
const hacker2 = prompt("The navigator's name is");

 
// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`);}
  else if (hacker1.length < hacker2.length) {
    console.log (`The navigator has the longest name, it has ${hacker2.length} characters`);}
  else {console.log (`Wow, you both have equally longn names,${hacker2.length} characters!`);}


// Iteration 3: Loops

for(let i = hacker2.length -1 ; i >= 0  ; i-- ){
    console.log(hacker2[i].toUpperCase());
  }
  console.log(hacker1.toUpperCase().split(" "));
  for(let i = hacker2.length -1 ; i >= 0  ; i-- ){
    hackeraux2+=hacker2[i];
  }
  console.log(hackeraux2.split(" "));


if(hacker1<hacker2){
    console.log ("The driver's name goes first.");
}
else if(hacker1>hacker2){
    console.log ("Yo, the navigator goes first definitely.");
}
else {
    console.log ("What?! You both have the same name?");
}