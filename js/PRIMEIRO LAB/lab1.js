console.log("interação 1");

let hacker1 = "Bino";

console.log(`hacker1's name is ${hacker1}`);

let hacker2 = "Pedro";

console.log(`hacker2's name is ${hacker2}`);


console.log("2");

if (hacker1.length > hacker2.length) console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`)
else if (hacker1.length < hacker2.length) console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters.`)
else console.log(`Wow, you both got equally long names, ${hacker2.length} characters!`)


console.log("3");
// 3.1
let hacker1InCaps = '';

for (let i = 0; i < hacker1.length; i++) {
  hacker1InCaps += hacker1[i].toUpperCase();
  if(i !== hacker1.length-1) hacker1InCaps+= " "
}

console.log(`hacker1InCaps: ${hacker1InCaps}`); // hacker1InCaps: C I C L A N O
console.log("0-0-0-0-0-0-",hacker1InCaps.length);

let navigatorReversed = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  if (navigatorReversed.length !== hacker2.length - 1) navigatorReversed += hacker2[i];
  else navigatorReversed += hacker2[i].toUpperCase();
}


console.log(`navigatorReversed: ${navigatorReversed}`); 


if (hacker1 < hacker2) console.log('hacker1 goes first');
else if (hacker1 > hacker2) console.log('hacker2 goes first');
else console.log('You have same names');

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut blandit nibh. Cras venenatis vestibulum metus sit amet dictum. Suspendisse malesuada bibendum augue, eget efficitur diam ultricies feugiat. Nulla mollis ex tellus, semper elementum dui efficitur sit amet. Quisque convallis sapien in metus elementum, eget auctor sem ornare. Donec pharetra odio sit amet tellus tempor feugiat. Sed a enim ex. Curabitur nec turpis a augue facilisis blandit. Vestibulum molestie lectus in odio commodo luctus. Duis sem est, sodales a vehicula id, hendrerit eget velit. Nulla maximus justo id augue sagittis accumsan. Integer turpis eros, ultricies convallis posuere et, auctor non ante. Vestibulum posuere, elit sit amet dapibus ultrices, orci mi lacinia neque, nec venenatis nunc ex id ex. Aliquam et dapibus quam, at convallis condimentum. In sed accumsan dolor, et aliquam dolor.`

let nbOfWords = 1;
for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === " ") {
    nbOfWords++;
  }
}
console.log(`lorem has ${nbOfWords} words.`);

