// Iteration 1: Names and Input

let hacker1 = "Alicja"
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Philipp"
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

console.log(hacker1.length);
console.log(hacker2.length);

if (hacker1.length>hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} 
else if (hacker2.length>hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} 
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}


// Iteration 3: Loops

let resultString = "";

for (let i = 0; i < hacker1.length; i++) {
    resultString += " " + hacker1[i].toUpperCase();  
  }
  console.log(resultString.substring(1));


/* First solution was: 

for (let i = 0; i < hacker1.length; i++) {
  hackerName += hacker1[i];
}
console.log(hackerName.split('').join(' ').toUpperCase())
*/


function reverseString(str) {
  
    let anotherResultString = "";
    
    for (let i = 0; i < str.length; i++) {  
     anotherResultString = str[i] + anotherResultString;
    }
    return anotherResultString;
  }

  console.log(reverseString(hacker2));


  // another task 

  function compareLex(str1, str2) {
  
    if (str1 === str2) {
      return "What?! You both have the same name?";
    }
    else if (str1 < str2) {
      return "The driver's name goes first.";
    }
      return "Yo, the navigator goes first definitely.";
    
  }
  
  console.log(compareLex(hacker1, hacker2));