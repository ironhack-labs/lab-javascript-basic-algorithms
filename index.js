// Iteration 1: Names and Input
let hacker1 = "Julia";
let hacker2 = "Jihan";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
//3.1
let finalName = "";

for (let i = 0; i < hacker1.length; i++) {
  finalName += hacker1[i].toUpperCase() + " ";
}

console.log(finalName);

//3.2
let reverseName = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseName += hacker1[i];
}

console.log(reverseName);

//3.3
if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What? You both have the same name?");
}

// Bonus 1

let longText = `Lorem Ipsum is simply dummy text of the printing and typesetting et industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s et with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Contrary to popular belief, Lorem Ipsum is not simply random text. 
It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word 
in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
This book is a treatise on the theory of ethics, very popular during the Renaissance.
The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`

let textArray = longText.split(" " || ".")
let countWords = textArray.length;
console.log(countWords);

let count = 0
for(let i = 0; i < countWords; i++) {
  if(textArray[i] == "et"){
    count++
  }
}

console.log(count);


//Bonus 2 - Too complicated
