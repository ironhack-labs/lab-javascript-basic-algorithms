// Iteration 1: Names and Input
let hacker1 = "Christian";
console.log(`"The driver's name is ${hacker1}"`)
let hacker2 = "Jesus";
console.log(`"The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

let solution = ""
for (let i = 0; i < hacker1.length; i++) {
  
  solution = solution + hacker1[i].toUpperCase() + " "
}
console.log(solution.slice(0, 17))

let reverseName = "";

 for (let i= hacker2.length-1; i>= 0; i--){
   reverseName += hacker2[i];
 }
console.log(reverseName);

if(hacker1.localeCompare(hacker2) === -1){
    console.log(`The driver's name goes first.`);
  } else if(hacker1.localeCompare(hacker2) === 1){
    console.log(`Yo, the navigator goes first definitely`);
  } else(console.log(`What?! You both have the same name?`));


  // Bonus 1: 

  let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    let res = paragraphs.split(" ");

    console.log(res.length);

    let counter = 0

for (let i = 0; i < res.length; i++) {
  if (res[i] === "et") {
    counter++    
  }
}
console.log(counter)

let phraseToCheck = "taco cat";

let reversePhraseToCheck = "";

for (let i= phraseToCheck.length-1; i>= 0; i--){
   reversePhraseToCheck += phraseToCheck[i];
 }
if (phraseToCheck.localeCompare(reversePhraseToCheck) === 0 ){
  
  console.log(`Yes, it's a Palindrome!`);
} else (console.log(`Sorry, it's not a Palindrome :( `));