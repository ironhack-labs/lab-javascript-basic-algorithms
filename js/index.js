// Iteration 1: Names and Input
// 
var hacker1 = "Fábio";
var hacker2 = "Greg";

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);



if(hacker1.length > hacker2.length){
    console.log(`The driver\'s name has ${hacker1.length} characters.`);
}else if(hacker2.length > hacker1.length){
    console.log( `The navigator's name has ${hacker2.length} characters`);

}else{
    console.log("What?! You both have the same name?");
}







// Iteration 3: Loops





let driverName = '';
for (i = 0; i < hacker1.length; i++){
  hacker1[i];
  driverName += hacker1[i].toUpperCase() + ' ';
    console.log (driverName);
}

let reversedNavigator = '';
for (i = hacker2.length - 1; i >= 0; i--){
  hacker2[i];
  reversedNavigator += hacker2[i].toUpperCase() + ' ';
  console.log (reversedNavigator);
}