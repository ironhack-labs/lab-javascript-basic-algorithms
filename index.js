// Iteration 1: Names and Input
const hacker1 = "John";
const hacker2 = "Boby";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.timeLog(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//3.1 Print the characters of the driver's name, separated by space, and in capital letters
let fullName="";
for (let i = 0; i < hacker1.length; i++) {
  fullName += hacker1[i].toUpperCase()+ " ";
}
console.log(fullName);

//3.2 Print all the characters of the navigator's name in reverse order
let nameReversed="";

for (let i=hacker2.length-1; i >= 0; i--) {
  nameReversed += hacker2[i];
}
  console.log(nameReversed); 

//3.3 lexicographic order 
 if (hacker1.localeCompare(hacker2)===1) {
   console.log("The driver's name goes first.");
 } else if (hacker1.localeCompare(hacker2)===-1){
   console.log("Yo, the navigator goes first, definitely.")
 } else {
   console.log("What?! You both have the same name?")
 }

 //Bonus1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue urna quis scelerisque venenatis. Aenean a ligula consequat, efficitur elit sit amet, scelerisque urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus, nisl dapibus sagittis interdum, ligula nunc consectetur justo, sit amet varius nulla quam ut quam. Vivamus porttitor massa vel laoreet feugiat. Suspendisse venenatis risus ac mollis volutpat. Proin sed lacus erat. Nunc imperdiet purus ante, placerat placerat odio malesuada in. Aliquam erat volutpat. Maecenas semper mi quis magna suscipit, quis posuere ante cursus. Ut pretium dui vel mauris dignissim, ac congue lacus consectetur. Donec a accumsan mauris. Pellentesque ac bibendum enim, quis tempor est. Donec quis metus eu lacus consequat aliquam. Donec mattis ac dolor ac imperdiet. Donec at purus a nulla pretium aliquam. Nam malesuada bibendum lectus in accumsan. Aenean nisi sapien, tincidunt ut augue a, vehicula dignissim metus. Proin mattis nulla at venenatis porttitor. Duis ac ultrices nunc. Phasellus et tempor velit. Sed vulputate eleifend elit, ut blandit odio venenatis non. Nullam lobortis, neque non imperdiet iaculis, arcu nunc dictum nibh, faucibus pharetra ipsum leo at erat. Nullam eleifend metus sit amet laoreet volutpat. In convallis dolor quis tellus fringilla cursus. Vivamus a sapien nec nisi pulvinar accumsan in vitae tellus. Curabitur venenatis quam auctor, egestas arcu eu, varius libero. Nunc eleifend sodales eros ac faucibus. Etiam semper viverra ipsum eu aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum malesuada nulla et metus sagittis auctor. Vestibulum tempor tortor nec molestie vulputate.";

//Make your program count the number of words in the string.
let wordCount = 1; // to account for the missing space at the end of text
for (i=0; i< longText.length; i++) {
  if (longText[i] === " "){
    wordCount++;
  }
}
console.log(wordCount);
//Make your program count the number of times the Latin word et appears
let etCount=0;
for (i=0; i< longText.length; i++) {
  let fourChar= longText[i]+longText[i+1]+longText[i+2]+longText[i+3];
  if (fourChar === ` et `) {
    etCount++;
  }
};
console.log(etCount);

//Bonus2
let phraseToCheck ="Was it a car or a cat I saw?";
let noSpacesPhrase ="";
let phraseReversed="";

for (let i=0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i].toUpperCase() !== phraseToCheck[i].toLowerCase()){
  noSpacesPhrase += phraseToCheck[i].toLowerCase();
  }
}
for (let i=noSpacesPhrase.length-1; i >= 0; i--) {
  phraseReversed += noSpacesPhrase[i];
  }
  if (noSpacesPhrase=== phraseReversed) {
    console.log(`Word is Palindrome.`)
  } else {
    console.log(`Word is not Palindrome.`)
  }



