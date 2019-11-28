// Iteration 1: Names and Input

let hacker1 = `Alex`;
let lengthHacker1 = hacker1.length;

console.log(`The driver's name is ${hacker1}`);

let hacker2 = `Jane`;
let lengthHacker2 = hacker2.length;

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (lengthHacker1 > lengthHacker2) {
    console.log(`The driver has the longest name, it has ${lengthHacker1} characters.`)
    } else if (lengthHacker2 > lengthHacker1) {
    console.log(`It seems that the navigator has the longest name, it has ${lengthHacker2} characters.`)
    } else {
    console.log(`Wow, you both have equally long names, ${lengthHacker2} characters!`)
    }

// Iteration 3: Loops


for (i = 0; i < lengthHacker1; i++){
  letterHacker1 = hacker1[i];
  upperCaseHacker1 = letterHacker1.toUpperCase();
  console.log(`${upperCaseHacker1}`)
}

for (i = lengthHacker2; i > 0; i--){
  letterHacker2 = hacker2[i-1];
  console.log(`${letterHacker2}`)  
}

let alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let minLength = Math.min(lengthHacker1,lengthHacker2);
let triggerOrderDetermined = 0;
let orderAnnouncement = `None`;


for (i = 0; i < minLength; i++){
  letterHacker1 = hacker1[i];
  letterHacker2 = hacker2[i];
  indexHacker1 = alphabet.indexOf(letterHacker1);
  indexHacker2 = alphabet.indexOf(letterHacker2);
  if (triggerOrderDetermined == 0){
  if (indexHacker1 < indexHacker2) {
      triggerOrderDetermined = 1;
      orderAnnouncement = `The driver's name goes first.`;
    } else if (indexHacker1 > indexHacker2) {
      triggerOrderDetermined = 1;
      orderAnnouncement = `Yo, the navigator goes first definitely.`;
    }
  }
}

let similarHacker1 = hacker1.substring(0, minLength);
let similarHacker2 = hacker2.substring(0, minLength);

if (hacker1 == hacker2){
  orderAnnouncement = `What?! You both have the same name?`;
} else if (similarHacker1 == similarHacker2){
  orderAnnouncement = `Your names are pretty similar...`;
}

console.log(orderAnnouncement)
