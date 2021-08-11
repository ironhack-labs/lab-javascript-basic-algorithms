// Iteration 1: Names and Input

let hacker1 = "Chai";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Carl";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
    }
  
  else if (hacker2.length > hacker1.length){
    
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} character`)
  }
  
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

let driverName = [];

for (let i= 0; i < hacker1.length; i++){
   driverName.push(hacker1[i].toUpperCase());
   
}
let newString = "";
for (var m in driverName) {
 newString=newString.concat(driverName[m])
 
  if (m < driverName.length-1 ){
    newString=newString.concat(" ")
  }
  
  else
  newString=newString.concat("")
  
}

  console.log(newString)

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reverseNavigator = [];
for (let k= 0; k < hacker2.length; k++){
  reverseNavigator.unshift(hacker2[k]);
}

let reverseString = "";
for (var n in reverseNavigator) {
 reverseString=reverseString.concat(reverseNavigator[n])}
console.log(reverseString)

//3.3 Depending on the lexicographic order of the strings

let alphabet = [];

alphabet.push(hacker1);
alphabet.push(hacker2);

alphabet.sort();



if(hacker1==hacker2){
  console.log("What?! You both have the same name?")}
  
else if (alphabet[0]==hacker1) {
  console.log("The driver's name goes first.")
}
else  {
  console.log("Yo, the navigator goes first definitely.")
}

