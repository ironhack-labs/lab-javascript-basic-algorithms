
//  1: Names and nput

// driver
let hacker1 = ("Johnny");
let length1 = hacker1.length;
console.log(hacker1);

// navigator
let hacker2 = ("Bobbbyjonnny");
let length2 = hacker2.length;
console.log(hacker2);


// Iteration 2: Conditionals
if ( length1 > length2 ){
  console.log(`The driver has the longest name, it has ${length1} characters`)
  
} else if ( length1 < length2 ) {
  console.log(`It seems that the navigator has the longest name, it has ${length2} characters.`)
  
} else {
  console.log (`Wow, you both have equally long names, ${length2} characters!`)
}


// Iteration 3: Loops

// to UpperCase
let capsHacker1 = "";
for (let amountOfLetters in hacker1){
  capsHacker1 += hacker1.toUpperCase()[amountOfLetters];
	// unless it is the last letter
	if (amountOfLetters < length1 - 1){
		capsHacker1 += " ";
	}
}
console.log (capsHacker1);

let backwardsHacker2 = "";
for (let amountOfLetters2 in hacker2){
  backwardsHacker2 += hacker2[length2 - 1 -amountOfLetters2];
}

console.log (backwardsHacker2 + "\n\n--------------\n\n");

// bonus 1
let lorem = "Ciao mamma ho fatto la pasta";

// console.log(lorem);

let wordsArray = [];
let lastSpace = 0;
for (let char = 0; char < lorem.length; char++){
  // if (lorem[char, char + 1] == "\n"){
  //   char++;
  //   continue;
  // }
  
  if (lorem[char] == " "){
	let thisSpace = Number(char);
	  
    console.log(`current char is ${char}`);
    console.log(`lastspace is ${lastSpace}`);
    console.log(`char - 1 is ${char - 1}`);
    console.log(`the new word is ${lorem.split(lastSpace, thisSpace)};`);
	  
    wordsArray[wordsArray.length] = lorem.split[lastSpace, thisSpace];
    console.log(`wordsArray is ${wordsArray}`);
    lastSpace = thisSpace;
  }
}





















console.log(wordsArray);