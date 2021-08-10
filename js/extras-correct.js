// ---- Ismael Lo ----
// -- !0 aug 2021 ----


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



// ------ bonus 1 & 2

// only problem: double spaces fool this in adding more than a word
const lorem = "et Ciao mamma et hoet fatto la pasta et "

let lengthOf = function(text){
  
  const textLen = text.length;
  let wordsArray = [];
  let lastSpace = 0;
	let numberOfEts = 0;
  
  for (let char = 1; char <= textLen; char++){
    
    if (text[char] === ' ' || char === textLen){     
      newWord = text.slice(lastSpace, char);
      wordsArray.push(newWord);
      
      if (newWord === 'et' || newWord === " et" || newWord === "et "){
        numberOfEts++;
      }
      
      lastSpace = char;
    }
    
  }
  
  // console.log(wordsArray);
  return (`the text is ${wordsArray.length} words long,\nthe text contains \"et\" ${numberOfEts} times`);
}

console.log(lengthOf(lorem));