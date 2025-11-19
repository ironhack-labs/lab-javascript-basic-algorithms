// Iteration 1: Names and Input
const hacker1 = "Jack";
const hacker2 = "Jamal";

console.log(`The drivers name is ${hacker1}`);
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
console.log(`---------BREAK----------`);

let hacker1UpperCase = "";

for (let i = 0; i < hacker1.length; i++) {
  const capitalLetter = hacker1[i].toUpperCase();
  hacker1UpperCase += `${capitalLetter} `;
}

console.log(hacker1UpperCase);
///////////////////////////////////////////

let hacker2Reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  const char = hacker2[i];
  hacker2Reverse += char;
}

console.log(hacker2Reverse);

//////////////////////////////////////////////

if (hacker1[0].localeCompare(hacker2[0]) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1[0].localeCompare(hacker2[0]) === 1) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//////////////////////////////////////////
// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus magna eget rhoncus volutpat. Vivamus nec ullamcorper erat, nec rutrum turpis. Curabitur volutpat libero eu lacus tempor, at mollis dui tempor. Donec luctus sapien justo. Proin id dolor eu enim suscipit commodo vitae rhoncus est. Praesent tincidunt suscipit neque, id cursus velit feugiat et. Etiam malesuada mi nibh, nec pellentesque ipsum bibendum et. Maecenas lacinia orci augue, aliquet egestas augue porttitor quis. In consectetur magna ut auctor congue. Nulla at semper elit. Proin lacus enim, aliquet sit amet lectus sit amet, tempor ornare orci. Phasellus et libero sit amet leo imperdiet condimentum eu quis elit. Pellentesque gravida ligula ut lectus dapibus, vitae elementum nunc elementum. Duis commodo, elit sed ornare ornare, lacus felis faucibus arcu, ac malesuada lectus quam et dolor. Praesent quis varius ante.

Quisque vulputate suscipit dui sed pellentesque. Suspendisse potenti. Etiam a dictum dui. Donec tempor metus augue, id tempus nisl vulputate sit amet. Mauris laoreet gravida magna. Fusce sed vehicula purus. Sed eu vulputate quam.

Nullam auctor sem aliquam lacus imperdiet molestie. Nam ut tellus sapien. Aliquam non porttitor nulla. Ut magna purus, malesuada et hendrerit ac, scelerisque vel ipsum. Praesent id tellus maximus justo porta lobortis. Pellentesque convallis felis vel lacus vestibulum sollicitudin. Morbi dapibus, libero eu venenatis pharetra, purus magna blandit lectus, nec ullamcorper erat velit vel quam. Aenean venenatis nunc sed metus vehicula facilisis. Phasellus vitae ante eget turpis placerat consequat pulvinar et diam. Nullam scelerisque rutrum dolor ut ullamcorper. Morbi eget neque vitae ex consectetur ornare. Phasellus mollis nunc justo, ac ultricies nisl consectetur ut. Morbi sodales urna enim. Duis porta in risus eget pulvinar. Aenean a sem ac eros maximus tempus eu a eros. Ut cursus ligula quis enim efficitur, a imperdiet metus aliquam.`;


const numOfWords = longText.split(" ").length;
console.log(numOfWords);


let count = 0;

for (let i = 0; i < longText.length; i++) {
    const chars = longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3]
    if (chars === ' et ') {
        count++
    }
}

console.log(`et appears ${count} times in the text`)
