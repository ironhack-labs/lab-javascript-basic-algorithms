// Iteration 1: Names and Input
const hacker1= "John";
console.log(`The driver's name is ${hacker1}`)
const hacker2= "Peter";
console.log(`The navigator's name is ${hacker2}`)
const nameL1= hacker1.length;
const nameL2= hacker2.length;
// Iteration 2: Conditionals
if (nameL1 > nameL2) {
    console.log(`The driver has the longest name, it has ${nameL1} characters.`)
} else if (nameL2 > nameL1) {
    console.log(`It seems that the navigator has the longest name, it has  ${nameL2} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${nameL1} characters!`)
}

// Iteration 3: Loops
// 3.1
CapitalHacker1= hacker1.toUpperCase();
let sepHacker1= "";
for (let i=0; i< nameL1; i++) {
    sepHacker1 += CapitalHacker1[i]+ " ";
}
console.log(sepHacker1)

// 3.2
let revHacker2= "";
for (i=nameL2-1; i >= 0; i--) {
    revHacker2 += hacker2[i];
}
console.log(revHacker2)

// 3.3
if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`)
} else if (hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first, definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

//Bonus 1

const longText= `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`


let wordCount = 0;

for (let i = 0; i < longText.length; i++) {
  if (/^[a-zA-Z]+$/.test(longText[i])) {
    // If it's alphanumeric, increment the word count
    wordCount++;
  }
}
console.log(wordCount)

//bonus 2

const newtext= "step on no pets";

let j=0;
for (i=0; i<newtext.length; i++) {
    
    if ( newtext[i] === " ") {
        break;
    }
    j++
}
console.log(j)
let count = 0;
for (i =0; i <= j; i++) {
    if ( newtext[i] !== newtext[newtext.length-i-1]){
        console.log("not palindromes")
        break;
        
    }
}

