// Iteration 1: Names and Input
const hacker1 = 'Joao';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Rojda';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
const driverNameCapital = hacker1.toUpperCase();
let driverNameWithSpaces = '';
for (let i=0; i < driverNameCapital.length; i++) {
    driverNameWithSpaces += driverNameCapital[i] + ' ';
}
driverNameWithSpaces = driverNameWithSpaces.slice(0, driverNameWithSpaces.length - 1);
console.log(driverNameWithSpaces);



let hacker2reversed = "";

for (let i=hacker2.length-1; i >= 0; i--) {
    hacker2reversed += hacker2[i];
}
console.log(hacker2reversed);



firstLetter = hacker1[0];
secondLetter = hacker2[0];

if (firstLetter < secondLetter) {
    console.log("The driver's name goes first.");
}
else if (firstLetter > secondLetter) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}


// Bonus 1

const firstParagraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const secondParagraph = "It et et is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
const thirdParagraph = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.";
const longText = firstParagraph + " " + secondParagraph + " " + thirdParagraph;

let count = 0;
for (let i=0; i < longText.length; i++) {
    if (longText[i] === " ") {
        count++;
    }
}
console.log(count);





let countEt = 0;

for (let i = 0; i < longText.length; i++) {
  if (
    longText[i - 1] === " " &&
    longText[i] === "e" &&
    longText[i + 1] === "t" &&
    longText[i + 2] === " "
  ) 

  /* or this version:
    if (longText[i - 1] + longText[i] + longText[i + 1] + longText[i + 2] === " et ") {
    countEt++;
    } */ 

    countEt++;
  
}
console.log(countEt);




// Bonus 2                    // made with chatgpt help    
const phrasesToCheck = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "was it a car or a cat I saw",
    "No 'x' in Nixon"
  ];
  
  // Function to clean string (remove non-letters and convert to lowercase)
  function cleanString(str) {
    let cleaned = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[a-zA-Z]/)) {
        cleaned += str[i].toLowerCase();
      }
    }
    return cleaned;
  }
  
  // Check each phrase
  