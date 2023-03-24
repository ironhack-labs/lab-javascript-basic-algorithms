//Iteration 1: Names and Input

const hacker1 = "Starsky";
console.log(`The driver's name is ${hacker1} `);

const hacker2 = "Hutch";
console.log(`The navigator name is ${hacker2}`);

//Iteration 2: Conditionals

console.log('Starsky has ' + hacker1.length + ' characters');
console.log('Hutch has ' + hacker2.length + ' characters'); 

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names ${hacker1.length==hacker2.length} characters.`);
}

//Iteration 3: Loops

console.log(hacker1.toUpperCase().split("").join(" "));

console.log(hacker2.split("").reverse().join(""));



if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus Time!

let longText = "Mauris nunc nibh, suscipit sit amet leo non, consequat vehicula urna. Proin sollicitudin elementum metus, eu tincidunt erat vehicula quis. Sed turpis eros, ultrices eu maximus at, blandit vitae risus. Cras euismod magna sit amet ex bibendum, vitae porta velit lobortis. Nunc fermentum interdum nisl at posuere. Fusce feugiat dolor ut convallis porta. Pellentesque non odio magna. Morbi in fermentum sem. Vestibulum vestibulum et augue ac faucibus. Morbi ac mi risus. Vestibulum quam metus, commodo non egestas a, imperdiet nec turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus pellentesque metus ut sapien tempor varius. Aenean id elit dui. Nulla neque enim, egestas eu magna mattis, pharetra dapibus dolor. Ut in lacinia eros. Nullam aliquam nisi turpis, ac porttitor risus hendrerit et. Aliquam sit amet quam nec elit luctus eleifend. Proin venenatis consequat leo vitae consequat. Nulla mauris lectus, dapibus sit amet eleifend sit amet, tempus a lectus. Nunc et enim id orci lobortis rutrum. Pellentesque nisi neque, rhoncus non lacus scelerisque, lobortis vestibulum tortor. Maecenas quis urna suscipit, fringilla dui vehicula, pellentesque magna. Quisque eu ex nec neque pellentesque ultrices eu eu libero. Phasellus consequat felis id nibh viverra, non iaculis justo laoreet. Sed libero augue, maximus non lorem in, sagittis pharetra tortor. Quisque ac dapibus purus. Cras varius cursus odio vel pretium. Suspendisse dui nunc, semper vitae placerat a, tincidunt a velit. Morbi aliquam augue ullamcorper, lobortis dui sit amet, varius odio.";


let words = longText.split(" ");
let wordCount = words.length;
console.log("number of words", wordCount);

let etCount = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "et") {
    etCount++;
  }
}
console.log("number of times the Latin word ´et´ appears", etCount);