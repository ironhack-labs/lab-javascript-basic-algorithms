// Iteration 1: Names and Input

const hacker1 = "Marc";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Pauline";
console.log(`The navigator's name is ${hacker2}`); 

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let driversName = ""; 
for (let i = 0; i < hacker1.length; i++) {
  driversName += `${hacker1[i].toUpperCase()} `;
}
console.log(driversName); 

let navigatorsName = "";
for (let i = hacker2.length -1; i >= 0; i--) {
  navigatorsName += hacker2[i].toLowerCase(); 
}
console.log(navigatorsName);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first"); 
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis mattis lectus, accumsan faucibus tellus gravida a. Integer eu lorem quis diam pretium pretium. Aenean elit ante, sollicitudin et euismod quis, fermentum id ipsum. Quisque interdum nunc consectetur massa lacinia fringilla. Pellentesque a aliquam sem. Nam eget urna sed nisl facilisis convallis. In justo libero, bibendum ac ex vel, imperdiet consectetur est. Maecenas ultrices urna est, ut rhoncus justo imperdiet sit amet. Phasellus id pretium augue. Donec aliquet elit risus, sed cursus ex euismod vel. Fusce dapibus fringilla tincidunt. Mauris in sem a erat mollis iaculis. Nullam lorem magna, elementum ut eros sed, convallis cursus purus. Aenean urna massa, ultricies eu aliquam vel, lacinia eget enim. Ut facilisis risus eget vulputate blandit. Vivamus id nisi sit amet purus egestas dapibus nec ut sem. Aenean at tempus magna. Vivamus eget hendrerit lorem, ac rhoncus ex. Vestibulum pellentesque neque in augue tristique, et consequat lorem faucibus. Donec rhoncus imperdiet nunc, in dignissim turpis dictum eget. Etiam lectus neque, accumsan ut bibendum ut, porta vitae mauris. Pellentesque id fringilla est. Ut eget ipsum nec velit ullamcorper convallis. Pellentesque feugiat bibendum quam ut viverra. Aliquam tristique aliquam gravida. Suspendisse et ligula non nibh cursus semper. Sed in eleifend magna, vitae efficitur nisi. Curabitur purus tortor, vestibulum quis dolor nec, sagittis rhoncus tortor. In sagittis consectetur urna, non molestie sapien sollicitudin nec. Nunc nibh tortor, egestas in efficitur quis, volutpat sit amet ante. Nullam commodo libero id justo pretium, id dignissim erat fringilla.";

let count=1;
for (let i=0;i<paragraph.length;i++){
  if(paragraph[i]===' '){
  count++;
  }
}
console.log(`The number of words is ${count}`);

let latinCount = 0;
for (let i=0;i<paragraph.length;i++){
  if(paragraph[i] ==='e' && paragraph[i+1] === 't' && paragraph[i+2] === ' ' && paragraph[i-1] === ' '){
  latinCount++;
  }
}
console.log(`The number of times 'et' appears is ${latinCount}`);

// Bonus 2 

const phraseToCheck = "Taco cat"; 

let phraseForward = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] !== " ") {
    phraseForward += phraseToCheck[i].toLowerCase(); 
  }
}

let phraseBackward = "";
for (let i = phraseToCheck.length-1; i >= 0; i--) {
  if (phraseToCheck[i] !== " ") {
    phraseBackward += phraseToCheck[i].toLowerCase(); 
  }
}

if (phraseForward === phraseBackward) {
  console.log(`${phraseToCheck} is a palindrome`); 
} else {
  console.log(`${phraseToCheck} is not a palindrome`); 
}
