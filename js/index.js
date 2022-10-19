console.log("Hello, world!");

// Iteration 1: Names and Input

const hacker1 = "Dick Dastardly";

const hacker2 = "Muttley";

console.log(`The driver's name is ${hacker1}.`);

console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let hacker1Final = ``;

let hacker2Final = ``;

for (let i = 0; i < hacker1.length; i++) {
    hacker1Final += `${hacker1[i].toUpperCase()} `; 
}

for (let i = (hacker2.length - 1); i >= 0; i--) {
    hacker2Final += hacker2[i];
}

console.log(hacker1Final);

console.log(hacker2Final);

// Bonus 1:

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risus eget purus tristique ornare. Ut in massa ut sapien convallis ultricies. Morbi quis eros purus. Mauris at diam sed erat aliquam maximus. In consequat pretium lorem ac ultrices. Pellentesque vitae varius lacus. Donec consequat leo ac ipsum scelerisque, eu lacinia risus imperdiet.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec porta diam nisl, in volutpat magna mattis vel. Vestibulum consectetur ultricies sem quis ultricies. In id imperdiet metus. Duis vel varius mi. Suspendisse ornare odio at tortor gravida, vel interdum odio egestas. Fusce vitae lacus nec lorem volutpat dictum ac eget velit.

Maecenas fermentum magna id quam facilisis bibendum. Aenean et semper sem. Vestibulum luctus pharetra cursus. Nam porttitor leo id dolor volutpat auctor. Aliquam quis lectus vitae erat volutpat auctor. Duis sagittis, nulla ut aliquam euismod, ex erat aliquam ligula, pharetra suscipit dolor risus sed ligula. Proin gravida risus fringilla mauris congue, eget dignissim tortor porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut pretium nunc vel quam rhoncus sollicitudin. Nam interdum congue nulla et placerat. Cras vitae ex nec arcu viverra vestibulum vel a metus.`;

let wordsCount = 3; //number of paragraphs

let etCount = 0;

for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === ` `) {
      wordsCount++
  }    
}

for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === ` ` && lorem[i+1] === `e` && lorem[i+2] === `t` && (lorem[i+3] === ` ` 
  || lorem[i+3] === `.` || lorem[i+3] === `,`)) {
      etCount++
  }
    
}

console.log(`The string has ${wordsCount} words`);

console.log(`"et" appears ${etCount} in the string.`);

// Bonus 2:

let phraseToCheck = `a rama amara`;
let phraseModified = ``;
let phraseReversed = ``;

for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] !== `.` && phraseToCheck[i] !== ` ` && phraseToCheck[i] !== `,` && phraseToCheck[i] !== `!` && phraseToCheck[i] !== `?` ) {
        phraseModified += phraseToCheck[i];
  }   
}

for (let i = (phraseModified.length - 1); i >= 0; i--) {
    phraseReversed += phraseModified[i];
}

if (phraseModified === phraseReversed) {
    console.log(`This phrase (${phraseToCheck}) is a Palindrome!`);
}else{
    console.log(`This phrase (${phraseToCheck}) is not a Palindrome.`)
}


