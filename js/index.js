// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` driver's name
let hacker1 = "Mohamed"

// 1.2 Print `"The driver's 
console.log(hacker1);

//1.3 Create a variable `hacker2` Navigator's name
let hacker2 = "Paul"

//1.4 Print `"The navigator's name 
console.log(hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {

    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters`)
  }else{
  
    console.log(`The ${hacker2} has the longest name, it has ${hacker2.length} characters`)}
   
 
// Iteration 3: Loops

NewName ='';
for (let letter=0; letter < hacker1.length; letter+=1){

  if (letter===0){

    NewName += `${hacker1[letter]}`;
  }else{

    NewName += ` ${hacker1[letter]}`;
  } 
  
}

//3.2 Print all the characters of the navigator's name

hacker2Split = "";
for (let letter=0; letter < hacker2.length; letter+=1){

  if (letter===0){

    hacker2Split += `${hacker2[letter]}`;
  }else{

    hacker2Split += ` ${hacker2[letter]}`;
  } 
  
}
console.log(hacker2Split.split(" "));

console.log(hacker2Split.split(" ").reverse().join(""));

//----alternative method -----

reverseName = [];

for (letter of hacker2) {

  reverseName.push(letter)
  
}
console.log(reverseName.reverse().join(''));

//3.3 Depending on the [lexicographic order]

if (hacker2.localeCompare(hacker1) == 1) {

    console.log(`The driver's name goes first.`);
    
  } else if (hacker2.localeCompare(hacker1) == -1) {
  
    console.log(`Yo, the navigator goes first definitely.`);
    
  } else {
  
    console.log(`What?! You both have the same name?`);
  }