// Iteration 1: Names and Input

let hacker1 = "Matthäus";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Anastasia";
console.log(`The navigators's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

hacker1 = hacker1.toUpperCase();

let hacker1leer = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1leer += hacker1[i] + " ";
}
console.log(hacker1leer);


let hacker2reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2reverse += hacker2[i];
}
console.log(hacker2reverse);


hacker1 = "Matthäus";
hacker2 = "Anastasia";

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first`);
} else if (hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

// solution with .localeCompare

if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first`);
} else if (hacker2.localeCompare(hacker1) === -1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

// Bonus 1

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae porttitor mi, id placerat nisl. "Pellentesque sed libero eget tellus posuere commodo quis rhoncus ipsum. In hac habitasse platea dictumst. Mauris placerat, orci vitae ultricies tempus, urna justo auctor diam, id semper ipsum dolor sit amet ipsum. Phasellus vel enim in urna porta lacinia. Sed quis nunc nibh. Sed tristique bibendum lacus, ac dictum mi tempor non. Ut ultricies lorem pretium nulla tincidunt, consectetur tempus lacus sollicitudin. Etiam fringilla, metus sit amet auctor varius, lectus sem convallis nunc, aliquam convallis quam leo id ex. Etiam nec rutrum tortor. Sed pretium justo eget dui fringilla, vel malesuada arcu pharetra. Nam molestie urna eu mollis rhoncus. Vivamus eget pellentesque tellus, scelerisque venenatis odio. Phasellus tincidunt mi quis turpis interdum, in semper velit vestibulum. Nunc et ligula elit. Suspendisse eu erat elementum, accumsan mi in, vestibulum est. Mauris quis sapien est. Nulla metus felis, euismod nec accumsan ut, auctor vel ligula. Vestibulum ac feugiat est. Vestibulum posuere, arcu sed tincidunt vehicula, tellus diam viverra arcu, sit amet lobortis dui neque vitae leo. Nulla a sapien luctus, vulputate sapien nec, placerat metus. Vivamus tempus molestie eros, nec vestibulum risus. Curabitur efficitur ex at turpis molestie malesuada. Nulla sit amet enim felis. Ut lorem purus, faucibus vel eros id, imperdiet vulputate libero. Vestibulum ligula mauris, porttitor in mauris et, aliquet laoreet tortor.';

let words = loremIpsum.split(' ');
console.log(`The text has ${words.length} words`);


// Bonus 2
// This implementation just works with single words, not with phrases

let phraseToCheck = "Anna";

let phraseToCheckReverse = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  phraseToCheckReverse += phraseToCheck[i];
}

if (phraseToCheckReverse.toLowerCase() === phraseToCheck.toLowerCase()) {
  console.log(`The phrase ${phraseToCheck} is a palindrome`);
} else {
  console.log(`The phrase ${phraseToCheck} is NOT a palindrome`);
}
