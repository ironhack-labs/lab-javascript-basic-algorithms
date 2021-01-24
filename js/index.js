// Iteration 1: Names and Input
let hacker1 = "Tom"

console.log(`The driver´s name is ${hacker1}`);

let hacker2 = "Michael"

console.log(`The navigator´s name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
    } else if (hacker1.length < hacker2.length) {
      console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
    } else {
      console.log (`Wow, you both have equally long names, XX characters!`)
    }

// Iteration 3: Loops
let hacker1UpperCase = hacker1.toUpperCase();
let hacker1Name = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Name += `${hacker1UpperCase[i]} `;
}
console.log(hacker1Name.trim())

let hacker2UpperCase = hacker2.toUpperCase();
let hacker2Name = "";
for (let i = 0; i < hacker2.length; i++) {
  hacker2Name += `${hacker2UpperCase[i]} `;
}
console.log(hacker2Name)

let hacker1Reverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  hacker1Reverse += `${hacker1[i]}`;
}
console.log(hacker1Reverse)

let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += `${hacker2[i]}`;
}
console.log(hacker2Reverse)

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget semper urna. Cras lobortis neque condimentum euismod congue. Maecenas aliquet sed lacus sit amet ornare. Nunc nec leo mi. Suspendisse consequat arcu et ipsum consectetur, id volutpat massa consequat. Etiam eu lectus eget est elementum imperdiet. Vivamus venenatis urna non semper tempor. Pellentesque vitae ultricies massa. Nulla quis ante et leo dignissim sollicitudin id vel enim. Curabitur eget est et erat pellentesque faucibus. Phasellus pretium sodales nulla eget convallis.

Nulla aliquam massa id quam dapibus, sit amet porta velit porttitor. Etiam vestibulum enim id imperdiet ornare. Integer rhoncus feugiat tempor. Phasellus nec mauris eget dui fermentum placerat. Vestibulum est lorem, fermentum eu luctus ut, rhoncus hendrerit libero. Vivamus vitae interdum lorem. Nunc a tincidunt mi. Sed sed augue tempus, consectetur nulla sit amet, pulvinar purus. Fusce sit amet tellus ut diam bibendum ultricies.

Fusce mollis tincidunt leo. Donec bibendum ultrices lobortis. Nunc placerat purus rutrum erat varius, vitae porttitor urna finibus. Cras rutrum efficitur faucibus. Suspendisse ultricies, ligula vel viverra gravida, lorem ligula varius nunc, id porttitor purus sapien sed ante. Sed tincidunt neque ut augue tempus, quis faucibus nisl mollis. Vivamus sit amet gravida libero.`



let count = text.split(' ').length

for (let i = 0; i< text.length; i++) {
  if (text[i] === '\n' && text[i - 1] !== '\n') {
    count += 1;
  }
}

console.log(count)

let words = text.split(' ')
let countEt = 0;
for (let i = 0; i < text.length; i++) {
  if (words[i] === 'et') {
    countEt += 1;
  }
}
console.log(countEt)

const phraseToCheck = 'A man, a plan, a canal, Panama!';

const lowerCaseString = phraseToCheck.toLowerCase();
let onlyLetterString = '';
console.log(lowerCaseString)

for (let i = 0; i < lowerCaseString.length; i ++) {
  const charCode = lowerCaseString.charCodeAt(i)
    if (charCode >= 97 && charCode <= 122) {
      onlyLetterString += lowerCaseString[i];
    }
 }
console.log(onlyLetterString)

 let reversedString = '';
 for (let i = onlyLetterString.length - 1; i >= 0; i--) {
   reversedString += onlyLetterString[i];
 }
console.log(reversedString)

console.log(reversedString === onlyLetterString)
 