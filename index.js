// Iteration 1: Names and Input
const hacker1 = "Roger ";
const hacker2 = "Soulaiman";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

function longestName() {
  if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters`
    );
  } else if (hacker2.length > hacker1.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
  }
}
longestName();

// Iteration 3: Loops
let nameSeparated = "";
for (let i = 0; i < hacker1.length; i++) {
  let letters = hacker1.charAt(i).toUpperCase();
  nameSeparated += letters + " ";
}
console.log(nameSeparated.trim());

let nameReverse = "";

for (let i = hacker1.length; i >= 0; i--) {
  nameReverse += hacker1.charAt(i - 1);
}
console.log(nameReverse);

const hackers = [hacker1, hacker2];
hackers.sort();

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else if (hackers[0] === hacker1) {
  console.log("The driver's name goes first");
} else if (hackers[0] === hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
}
//bonus

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum nisi risus, a vehicula purus rhoncus iaculis. Maecenas in lobortis mi, in accumsan lectus. Integer vitae mattis nibh. Integer at dolor orci. Suspendisse enim velit, pretium tempus enim quis, facilisis ullamcorper mauris. Maecenas iaculis ipsum ac arcu molestie placerat. Phasellus iaculis, arcu pellentesque tempor elementum, felis turpis molestie nunc, a varius nulla eros in augue. Donec dictum sem erat. Etiam aliquam ex et tortor fermentum ultricies. Nam elementum mauris ut velit aliquet lacinia. Etiam fermentum ultrices vulputate. Nam porttitor finibus lorem, eget consectetur purus. Nunc dui lorem, rhoncus a dui quis, vulputate sodales arcu. Sed sed varius leo.

Suspendisse blandit, orci id consequat dignissim, eros turpis fermentum elit, at gravida lectus metus in nisi. Nunc imperdiet ipsum metus, et vulputate orci vulputate non. Nulla dapibus commodo diam. Nam vulputate egestas pellentesque. Quisque ullamcorper aliquet felis, pellentesque varius risus tristique ut. Phasellus non libero egestas, volutpat lectus eu, gravida libero. Phasellus mollis gravida fermentum. Nunc vel eros facilisis, viverra tellus sit amet, volutpat lacus. Praesent luctus, sapien vel porttitor condimentum, mi diam dapibus elit, nec hendrerit dolor mauris et elit. Suspendisse nisi augue, porta vitae felis eget, scelerisque iaculis tortor. Fusce malesuada est hendrerit lorem tempus consectetur. Pellentesque est tortor, finibus sed nunc ac, fermentum pretium diam. Fusce posuere felis eu dui ultricies iaculis. Donec at vehicula mi. Aliquam et pharetra nisl, quis dictum est. Integer rutrum dui ac elit consequat tempor cursus vitae quam.

Nam eu quam est. Quisque malesuada lacus nec mi tempus pharetra. Duis a erat non risus gravida finibus quis non nisi. Nam tristique nulla vitae sapien condimentum varius. Cras ex massa, lobortis eget pellentesque ut, venenatis vel sem. Vestibulum sed urna fermentum, maximus neque quis, pellentesque libero. Praesent rutrum gravida suscipit. Morbi a ultricies felis. Proin suscipit faucibus mi, a luctus odio. Curabitur et tellus blandit, placerat nisl at, lacinia tellus. Mauris rutrum sem vitae ipsum venenatis, nec dignissim lorem placerat. Mauris sed malesuada ante, sit amet pulvinar dolor.`;

function counter(text) {
  let words = text.trim().split(/\s+/);
  return words.length;
}

console.log(counter(longText));

let wordsText = longText.trim().split(/\s+/);

const word = "et";
let counter2 = 0;
for (let i = 0; i < wordsText.length; i++) {
  if (wordsText[i] === word) {
    counter2++;
  }
}
console.log(counter2);
