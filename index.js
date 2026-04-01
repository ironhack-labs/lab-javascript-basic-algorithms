// Iteration 1: Names and Input
const hacker1 = "ella";
console.log("the driver name is " +hacker1 );
const hacker2= "gps"
console.log("the navigator name is " +hacker2 );
// Iteration 2: Conditionals
// The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
let result;
if (hacker1.length > hacker2.length){
result = "The driver has the longest name , it has "+ hacker1.length +" characters."
}
else if (hacker1.length < hacker2.length){
    result = "It seems that the navigator has the longest name, it has XX characters"
}
else {
    result = "Wow, you both have equally long names, "+ hacker2.length +" characters!"
}
console.log(result);

// Iteration 3: Loops
let capitalName = " ";
for ( let i=0; i< hacker1.length ; i++){
    capitalName += hacker1[i].toUpperCase() +" ";
}
console.log(capitalName);

let navigatorReverse = " ";
for ( let i= hacker2.length-1; i >= 0; i--){
    navigatorReverse += hacker2[i] ;
}
console.log(navigatorReverse);
