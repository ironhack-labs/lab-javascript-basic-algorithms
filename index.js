//Iteration 1

let hacker1 = "Angelo";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Michaelangelo";  
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  
} else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);}

//Iteration 3

let hacker1UpperCase = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1UpperCase += hacker1[i].toUpperCase() + " ";
}
  console.log(hacker1UpperCase);

let hacker2Reversed = "";

for (let i = hacker2.length -1; i >= 0; i--) {
  hacker2Reversed += hacker2[i] + " ";
}
  console.log(hacker2Reversed);


let whoIsFirst = hacker1.localeCompare(hacker2)
if (whoIsFirst === 0) {
  console.log("What?! You both have the same name?")
}
else if(whoIsFirst === -1){
  console.log("The driver's name goes first.")
}
else if(whoIsFirst === 1){
  console.log("Yo, the navigator goes first, definitely.")
}

//Bonus1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa urna, suscipit quis turpis a, imperdiet elementum tortor. Praesent accumsan dolor vel eros accumsan auctor. Nullam pulvinar justo magna, ac mollis leo varius sit amet. Duis sit amet sem nec est volutpat molestie quis nec quam. Sed facilisis nisi nunc, eget porttitor nibh tempus eu. In hac habitasse platea dictumst. Pellentesque vel porttitor mauris. Aenean quis pretium sem. Pellentesque quis luctus odio. Nunc dictum dui ac sapien varius, vel auctor velit congue.";

let spaces = 0;
for (let i = 0; i < longText.length -1; i++) {
  if (longText[i] === " ") {
    spaces++
  } };
  
let wordCount = spaces + 1;

console.log(wordCount);

console.log(longText.split("et").length -1);

//bonus2


let phraseToCheck = "Red roses run no risk, sir, on Nurse’s order.";
let secondPhraseToCheck = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  secondPhraseToCheck += phraseToCheck[i];
}

console.log(secondPhraseToCheck); 

let redRoses = phraseToCheck.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
console.log(redRoses);

let rosesRed = secondPhraseToCheck.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
console.log(rosesRed);

if (redRoses === rosesRed) {
  console.log("It is a palindrome!");
} else {
   console.log("It is not a palindrome");
}
