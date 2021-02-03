// Iteration 1: Names and Input
let hacker = "Hadson";
console.log(`the driver's name is ${hacker}`);

let hacker2 = "Edwin";
console.log(`the navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker.length > hacker2.length){

  console.log(`The driver has the longest name,it has ${hacker.length}characters`);
} else if (hacker2.length > hacker.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}character.`);
} else if (hacker.length ===hacker2.length){console.log("wow, you both have equally long names, ");}



// Iteration 3: Loops

hacker = hacker.toUpperCase();
let space = ' ';

console.log(hacker.split('').join(space));

function reverseString(str) {

  var splitString = str.split(""); 
  console.log(splitString);
 
  var reverseArray = splitString.reverse();  
  console.log(reverseArray);

  var joinArray = reverseArray.join(""); 
  console.log(joinArray);

  return joinArray; 
}

reverseString(hacker2);


let nameArray = [hacker,hacker2]

nameArray.sort( (a,b)=> {
if( a < b ) return -1;
if( a > b ) return 1;
return 0;

})
console.log(nameArray);

let result = nameArray;

if (hacker === nameArray[0]){
  console.log("The driver's name goes first.");
} else if(hacker2 === nameArray[0]){
  console.log("Yo, the navigator goes first definitely.");
} else  {
  console.log("What?! You both have the same name?");
}

