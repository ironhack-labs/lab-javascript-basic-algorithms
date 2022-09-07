// Iteration 1: Names and Input
const hacker1 = "Julian";
const hacker2 = "Mauro";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//3.1
let hacker1UpperCase = "";
for(let i = 0; i < hacker1.length; i++){
     hacker1UpperCase = hacker1UpperCase + hacker1.charAt(i).toUpperCase() + " ";
}

console.log(hacker1UpperCase);

//3.2
let reverseName = "";
for (let i = hacker2.length; i > 0; i--){
    reverseName += hacker2[i - 1];
}
console.log(reverseName);

//3.3 'str1'.localeCompare('str2');

if (hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first");

} else if (hacker1.localeCompare(hacker2) > 0){
    console.log("Yo, the navigator goes first definitely");

} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Donec congue ultricies risus, condimentum interdum enim feugiat in. Duis bibendum consequat leo, a viverra libero interdum ut. Nunc non magna condimentum lorem pellentesque dignissim sit amet eu metus. Praesent pulvinar eros dictum, viverra massa eu, convallis velit. Nunc luctus ex sit amet velit pellentesque interdum. Nam tempus nec ipsum eget lobortis. Maecenas in tellus vel nulla sodales efficitur vel ut nibh. Praesent sed enim a ex blandit egestas. Proin egestas nunc nec ipsum congue lobortis. Nam egestas volutpat bibendum. Aliquam dapibus pulvinar ipsum sit amet facilisis. Nunc consectetur nunc lorem, in vehicula urna condimentum quis. Nam sit amet libero vitae dui euismod viverra ut non sem. Nulla cursus dignissim purus, eget sollicitudin orci. Nullam id rutrum ex, in dapibus nisi. Nulla consequat vulputate leo, eu ullamcorper ante aliquet id. 
Mauris in est non sem vulputate laoreet. Morbi venenatis non urna a volutpat. In at porttitor purus. Suspendisse eget suscipit dui. Donec felis lorem, blandit non velit quis, imperdiet volutpat lacus. Quisque a magna risus. Suspendisse euismod tempus vehicula. Pellentesque consequat libero sed quam consequat laoreet. Etiam odio felis, volutpat vitae faucibus sit amet, sodales vel turpis. Sed vel luctus purus. Nulla viverra lorem lectus, ut facilisis urna eleifend et. Nunc sed diam id felis fermentum rutrum. Sed ac accumsan nisl. Integer at erat non enim tincidunt fermentum nec eu ipsum. Praesent gravida accumsan egestas. Nam iaculis, sapien eget aliquet pharetra, odio justo vulputate enim, at tempor dolor erat eu ante. Nullam eleifend efficitur tortor. Suspendisse pellentesque, turpis id dignissim faucibus, ipsum lorem lobortis nisi, ornare aliquet lectus lorem ultricies diam. Orci varius natoque et penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque scelerisque placerat mattis. Nam risus lorem, pulvinar ac tincidunt sed, lobortis rhoncus arcu. Sed id hendrerit urna.`

let counter = 0;

for (let i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum.charAt(i) === " ") {
        counter += 1;
    }
}

console.log(counter);

let counterEt = 0;

for (let i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum.substring(i,i+4) == " et ") {
        counterEt += 1;
    }
}

console.log(counterEt);

// Bonus 2 (by Mauro) , Julian's Version is beneath
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let phraseToCheck = 'A man, a plan, a canal, Panama!';
let check = '';
let checkReverse = '';
for (let i = 0; i < phraseToCheck.length; i++) {
  if (alphabet.includes(phraseToCheck.toUpperCase().charAt(i))) {
    check += phraseToCheck.charAt(i);
  } else {
    continue;
  }
}
for (let i = phraseToCheck.length; i >= 0; i--) {
  if (alphabet.includes(phraseToCheck.toUpperCase().charAt(i))) {
    checkReverse += phraseToCheck.charAt(i);
  } else {
    continue;
  }
}
if (check.toUpperCase() === checkReverse.toUpperCase()) {
    console.log('It is a Palindrome!!!');
  } else {
    console.log('Not a Palindrome.');
  }

// Bonus 2 (by Julian)
let phraseToCheck2 = "Was it a car or a cat I saw?";
const alphabet2 = "abcdefghijklmnopqrstuvwxyz";
let isPalindrom;

let phraseLetters = ""; // phrase to check without other characters than letters 

for (let i = 0; i < phraseToCheck2.length; i++) {
  if (alphabet2.includes(phraseToCheck2.charAt(i).toLowerCase())) {
    phraseLetters += (phraseToCheck2.charAt(i).toLowerCase());
  }
}

for(let i = 0; i < phraseLetters.length/2; i++){
   
  if(phraseLetters.charAt(i) === phraseLetters.charAt(phraseLetters.length-(1+i))){ //comparing from both ends
    isPalindrom = true; 
    continue;
   } else {
     isPalindrom = false;
     break;
   } 
}

if(isPalindrom){
  console.log("Yes it is a palindrom");
} else {
  console.log("No it is not a palindrom");
}