// Iteration 1: Names and Input
const hacker1 = "Jonatan"
console.log(`The drivers name is ${hacker1}`);
const hacker2 = "Jon"
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}
// Iteration 3: Loops

// 3.1
let upperName = ""

for (let i = 0; i < hacker1.length; i += 1) {
    let char = hacker1[i];
    upperName += char.toUpperCase() + " ";
}
console.log(upperName);


// 3.2
let nameReversed = ""

for (let j = hacker2.length - 1; j >= 0; j -= 1) {
    let char = hacker2[j]
    nameReversed += char;
}
console.log(nameReversed);

// 3.3
if(hacker1.localeCompare(hacker2) === -1) {
       console.log("The driver's name goes first.");
     } else if (hacker1.localeCompare(hacker2) === 1) {
       console.log("Yo, the navigator goes first, definitely.")
     } else {
       console.log("What?! You both have the same name?");
     }

// Bonus 1
const longText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veritatis
aperiam necessitatibus dolorum quod sed dignissimos nisi molestiae ad eos
quo facilis, tempora, et excepturi vero! Modi ipsum magni ducimus! Totam
placeat doloremque, culpa maiores explicabo aliquid. Quae qui a dolorem
officia laborum commodi assumenda quibusdam accusantium minus ab eligendi
quos aut exercitationem ratione ea corporis illum, odio reprehenderit animi!
Accusantium eum repellendus maiores molestias nobis velit laboriosam dolorum
nam. Laborum minus, expedita soluta est consectetur maiores recusandae
eligendi labore repudiandae deserunt nam explicabo unde, modi libero
sapiente consequuntur exercitationem`

let words = longText.split(/\s/);

let wordCount = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
        wordCount++
    }
}
console.log(wordCount);

let etCount = 0;
let wordsEt = longText.split(" ");

for (let i = 0; i < wordsEt.length; i++) {
    if (wordsEt[i] === "et") {
        etCount++;
    }
}
console.log(etCount);

// Bonus 2
let phraseToCheck = "No 'x' in Nixon"

function palindrome(phrase) {
  let clean = /[\W_]/g;
  phraseToCheck = phraseToCheck.toLowerCase().replace(clean, "");
  
  for(let i = 0; i < phraseToCheck.length/2; i++) {
    if (phraseToCheck[i] !== phraseToCheck[phraseToCheck.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

let isPalindrome = palindrome(phraseToCheck);

if (isPalindrome) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}










