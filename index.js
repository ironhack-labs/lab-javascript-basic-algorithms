// Iteration 1: Names and Input
const hacker1 = 'Francisco';

console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Rafael';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

let driverUP = '';

for (let i = 0; i < hacker1.length; i++) {
  driverUP += hacker1[i].toUpperCase() + " ";
}

console.log(driverUP);

let navigatorReverse = '';

for (let i = hacker2.length - 1; 0 <= i; i--) {
  navigatorReverse += hacker2[i];
}

console.log(navigatorReverse);

if (hacker1.localeCompare(hacker2) === -1 ) {
  console.log("The driver's name goes first");
}
else if (hacker2.localeCompare(hacker1) === -1 ) {
  console.log("Yo, the navigator goes first, defenitely");
}
else if (hacker2.localeCompare(hacker1) === 0) {
  console.log("What?! You both have the same name?");
}

// BONUS 1


const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis est ullamcorper laoreet scelerisque. Proin semper metus enim, vel rutrum mi condimentum sed. Pellentesque ut nulla dolor. Donec tincidunt justo nec sem sodales vestibulum. Fusce aliquam suscipit ultricies. Mauris facilisis consectetur velit nec malesuada. Nullam molestie velit in vehicula finibus. Sed pellentesque ex at mauris maximus dapibus. Donec a purus vel quam tristique lacinia. Curabitur lectus dui, malesuada eu magna id, iaculis volutpat turpis. Vestibulum velit mi, pharetra et porta ac, pretium ac enim. Pellentesque hendrerit vel nulla ac ornare. Nunc tristique nisi id turpis finibus, a mattis nulla eleifend. Ut blandit lorem justo, ac posuere lectus facilisis a. Sed pulvinar sed dolor sit amet lacinia. Etiam libero dolor, molestie interdum interdum id, gravida non dui. Nunc sollicitudin ultrices suscipit. Duis et turpis urna. Aenean non justo lacinia, sodales justo id, tristique enim. Cras condimentum turpis in purus ultrices rutrum. Morbi mattis, sem ut sodales iaculis, elit erat commodo eros, eu convallis eros sem nec turpis. Phasellus volutpat, nulla eu pharetra sodales, erat orci feugiat velit, a congue elit erat quis lorem. Etiam pretium vel eros pulvinar commodo. Curabitur dictum venenatis nunc nec bibendum. Ut mi lacus, cursus vitae porttitor in, viverra nec sem. Vivamus congue ut neque sed finibus. Mauris sit amet nisi dictum, molestie libero ac, euismod velit. Praesent eros nunc, vestibulum sit amet dolor tincidunt, interdum laoreet ante. Curabitur vitae tincidunt ipsum, vel aliquet nisi. Donec elementum rhoncus elit vitae fringilla. Mauris dapibus nisi neque, nec scelerisque mauris porttitor sit amet. Proin facilisis a ante vitae ultrices. Praesent ac rhoncus enim. Quisque erat leo, tempus in elit nec, tristique cursus orci. In iaculis metus dui, in tempus tellus iaculis ac."

let counterWords = 0;

let counterEtLowerCase = 0;

let counterEtUpperCase = 0;

for (let i = 0; i < longText.length; i++) {
  const char = longText[i];

  if (char === ' ') {
    counterWords ++;
  }

  if (char === 'e' && longText[i + 1] === 't') {
    counterEtLowerCase ++;
  }

  if (char === 'E' && longText[i + 1] === 't') {
    counterEtUpperCase ++;
  }
}

const counterEt = counterEtLowerCase + counterEtUpperCase;
console.log(counterEt);


//BONUS 2


const phraseToCheck = 'A man, a plan, a canal, Panama';

const weDonWantChar = '!?:,.()[]+-;*&$/\ ';

let polidrome = '';

let reverse = '';



for (let i = 0; i < phraseToCheck.length; i++) {
  const char = phraseToCheck[i];

  for(j = 0; j < weDonWantChar.length; j++) {
    const charExclude = weDonWantChar[i];

    if (char !== charExclude) {
      polidrome += char;
    }
  }
}

console.log(polidrome);
