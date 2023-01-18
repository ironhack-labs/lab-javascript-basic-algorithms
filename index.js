// Iteration 1: Names and Input

let hacker1 = "Aba";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Aba";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

// Iteration 3: Loops

hacker1Modified = hacker1.toUpperCase();

let hacker1Separated = hacker1Modified[0];
for (let i = 1 ; i < hacker1.length ; i++) {
  hacker1Separated += " " + hacker1[i];
}
console.log(hacker1Separated);

let hacker2Modified = "";
for (let i = hacker2.length-1 ; i>=0 ; i--) {
  hacker2Modified += hacker2[i];
}
console.log(hacker2Modified);

let FirstPerson;
for (let i = 0 ; hacker1[i] !== undefined || hacker2[i] !== undefined ; i++) {
  if (hacker1[i] === hacker2[i]) {
    FirstPerson = "What?! You both have the same name?";
  }
  if (hacker1[i] < hacker2[i]) {
    FirstPerson = "The driver's name goes first.";
    break;
  }
  else if (hacker1[i] > hacker2[i]) {
    FirstPerson = "Yo, the navigator goes first definitely.";
    break;
  }
}
console.log(FirstPerson);

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere faucibus ante eu convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sed ligula sodales, dapibus metus in, accumsan nulla. Pellentesque scelerisque ipsum vitae nibh luctus pharetra. Nulla ut quam eu est volutpat bibendum nec vel sem. Pellentesque fringilla facilisis posuere. Etiam ac elit facilisis, congue orci eu, molestie arcu. Sed eu hendrerit nisi. Mauris blandit nec est in ultricies. Quisque pulvinar semper justo.

Aliquam iaculis laoreet nisi, et dictum ipsum gravida ac. Nam placerat in tortor at lobortis. Nullam vitae turpis quis libero vulputate vulputate. Vivamus ac ex elit. Nulla consequat pellentesque arcu, in tincidunt nibh bibendum vel. Nam viverra mauris vitae mauris imperdiet, ac volutpat augue sagittis. Fusce nisl ipsum, aliquam quis varius in, malesuada et neque.

Vivamus dignissim id tellus vel commodo. Donec non risus non leo imperdiet eleifend. Sed fermentum aliquam nisl ut eleifend. Suspendisse nisl nulla, ornare id libero id, convallis egestas risus. Sed rutrum urna non posuere porta. Suspendisse maximus vulputate purus at rhoncus. Donec mollis dolor dolor, non viverra libero lacinia vitae. Nulla volutpat eros nisl, a tincidunt nulla egestas quis.`

let numberTotalWords = longText.split(' ').length
console.log(numberTotalWords);

let counter = 0;
let indexResult = 0;
let i = 0;
while (i < numberTotalWords) {
  indexResult = longText.indexOf(" et ", indexResult);
  if (indexResult != -1) {
    counter++;
    indexResult += 2;
  }
  else {
    break;
  }
  i++;
}
console.log(counter);

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere faucibus ante eu convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sed ligula sodales, dapibus metus in, accumsan nulla. Pellentesque scelerisque ipsum vitae nibh luctus pharetra. Nulla ut quam eu est volutpat bibendum nec vel sem. Pellentesque fringilla facilisis posuere. Etiam ac elit facilisis, congue orci eu, molestie arcu. Sed eu hendrerit nisi. Mauris blandit nec est in ultricies. Quisque pulvinar semper justo.

Aliquam iaculis laoreet nisi, et dictum ipsum gravida ac. Nam placerat in tortor at lobortis. Nullam vitae turpis quis libero vulputate vulputate. Vivamus ac ex elit. Nulla consequat pellentesque arcu, in tincidunt nibh bibendum vel. Nam viverra mauris vitae mauris imperdiet, ac volutpat augue sagittis. Fusce nisl ipsum, aliquam quis varius in, malesuada et neque.

Vivamus dignissim id tellus vel commodo. Donec non risus non leo imperdiet eleifend. Sed fermentum aliquam nisl ut eleifend. Suspendisse nisl nulla, ornare id libero id, convallis egestas risus. Sed rutrum urna non posuere porta. Suspendisse maximus vulputate purus at rhoncus. Donec mollis dolor dolor, non viverra libero lacinia vitae. Nulla volutpat eros nisl, a tincidunt nulla egestas quis.`

let numberTotalWords = longText.split(' ').length
console.log(numberTotalWords);

let counter = 0;
let indexResult = 0;
let i = 0;
while (i < numberTotalWords) {
  indexResult = longText.indexOf(" et ", indexResult);
  if (indexResult != -1) {
    counter++;
    indexResult += 2;
  }
  else {
    break;
  }
  i++;
}
console.log(counter);

//Bonus 2

let phraseToCheck = "Amor, -Roma";
let sentence1 = "";
let sentence2 = "";
let count1 = 0;
let count2 = 0;
phraseToCheck = phraseToCheck.replace(/[ªº!|"·$%&()=?¿^*¨Ç;:_,.-]/g,'');
phraseToCheck = phraseToCheck.replace(' ', '').toLowerCase();
console.log(phraseToCheck);
console.log(phraseToCheck.length-0);
for ( let i=0 ; i<phraseToCheck.length ; i++) {
  sentence1 += phraseToCheck[i];
  sentence2 += phraseToCheck[phraseToCheck.length-i];
}
if (sentence1 === sentence2) {
  console.log("OK");
}
console.log(sentence1);
console.log(sentence2);