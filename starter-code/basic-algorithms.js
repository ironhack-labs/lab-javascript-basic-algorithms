// Names and Input
const hacker1 = "Alex";
console.log("The driver's name is " + hacker1);

const hacker2 = prompt("What's your name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("Wox, you both got equaly long names, " + hacker1.length + " characters !!");
}

var printVar = ""

for (let i = 0 ; i < hacker1.length ; i++){
  printVar += hacker1[i]+ " ";
}

console.log(printVar.toUpperCase());

var printVar2 = ""

for (let i = hacker2.length -1 ; i >= 0; i--){
    printVar2 += hacker2[i];
}

console.log(printVar2);

if( hacker1.localeCompare(hacker2) === -1){
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1){
  console.log("The navigator goes first definitively.");
} else {
  console.log("What you both got the same name.");
}

let palindrome = prompt("enter a word");
console.log(palindrome);

var printVar3 = ""

for (let i = palindrome.length -1 ; i >= 0; i--){
    printVar3 += palindrome[i];
}

console.log(printVar3);

if (palindrome === printVar3){
  console.log("it's a palindrome!");
} else {
  console.log("it is not a palindrome.");
}


// Lorem ipsum generator

let lorem = "Lorem Ipsum is et simply dummy et text of the printing";

let wordCount = 1;

for(let i = 0 ; i < lorem.length ; i++){
  if(lorem[i] === " "){
    wordCount += 1;
  }
}

console.log("This paragraph has " + wordCount + " words");

let etCount = 0;

for(let i = 0 ; i < lorem.length ; i++){
  if(lorem[i] + lorem[i+1] === "et"){
    etCount += 1;
  }
}

console.log(etCount);
