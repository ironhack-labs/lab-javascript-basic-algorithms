/*Iteration 1: Names and Input
1.1 Create a variable `hacker1` with the driver's name.
1.2 Print `"The driver's name is XXXX"`.
1.3 Create a variable `hacker2` with the navigator's name.
1.4 Print `"The navigator's name is YYYY"`.*/

var hacker1 = `Rom`;
console.log(`The driver's name is:  ${hacker1} `); 


var hacker2 = `Yuri`;
console.log(`The navigator's name is:  ${hacker2} `); 
/* Iteration 2: Conditionals

2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

let strlen1 = hacker1.length;
let strlen2 = hacker2.length; 

if (strlen1 > strlen2) { 
  console.log(`The driver has the longest name, it has ${strlen1} characters.`)

} else if (strlen2 > strlen1) {
  console.log(`The navigator has the longest name, it has ${strlen2} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${strlen1} characters!.`)
}


/*Iteration 3: Loops

3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

*/ 

var upperCase = hacker1.toUpperCase(); 
console.log(upperCase);

let newName = ``; 

for (let i =0; i < strlen1; i++) {
  newName += upperCase[i] + ' '
}

console.log(newName.trim());

/*

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
*/

var newName2 = ``; 

for (let i = strlen2-1 ; i >= 0 ; i--) {
  newName2 += hacker2[i] 
}

console.log(newName2);

/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

lowerCase1 = hacker1.toLowerCase();
lowerCase2 = hacker2.toLowerCase();

arrayNames = [lowerCase1, lowerCase2];
sortedArray = arrayNames.sort();

if (sortedArray[0] === sortedArray[1]) {
  console.log('What?! You both have the same name?')
} else if (sortedArray[0] === lowerCase1) {
  console.log(`The driver's name goes first.`)
} else {
  console.log(`Yo, the navigator goes first definitely`)
}

// Solution 2: Need help - haven't figured it out
if (lowerCase1 === lowerCase2){
    console.log(`What?! You both have the same name?`)
  } else if (strlen1 === strlen2 || strlen1 < strlen2){
    shorterLen = strlen1
  } else {
    shorterLen = strlen2
  }
  
for (let i = 0; i < shorterLen; i++) {
    if (lowerCase1[i] < lowerCase2[i]) {
        console.log(`The driver's name goes first.`);
        break;
    } else {
        console.log(`Yo, the navigator goes first definitely`)
        break;
    }
}
  
