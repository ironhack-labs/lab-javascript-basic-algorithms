// Iteration 1: Names and Input

//1.1    1.2
const hacker1 = 'Joana';
console.log(`The driver's name is ${hacker1}`);

//1.3    1.4
const hacker2 = 'Elizabeth';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

//2.1
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
//3.1
let betweenChars = ' ';
alert(hacker1.split('').join(betweenChars).toUpperCase());

//3.2
hacker2.split('').reverse().join('').split(' ').reverse().join(' ');

//3.3
let comparison = hacker1.localeCompare(hacker2);

if (comparison === 0) {
  console.log(`What?! You both have the same name?`);
} else if (comparison < 0) {
  console.log(`The driver's name goes first.`);
} else {
  console.log(`Yo, the navigator goes first definitely.`);
}

// Bonus 1
// Count the number of words
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis pulvinar libero eget blandit. Donec nec convallis justo, vitae ultrices dolor. Aliquam tincidunt dui congue ex posuere, nec aliquam arcu vehicula. Fusce interdum massa quis dictum viverra. Integer nec tincidunt libero. Nullam sit amet augue non erat elementum laoreet sed ut felis. Mauris sagittis bibendum ante, nec dictum lacus convallis suscipit. Nulla facilisi. Phasellus finibus dolor enim, in interdum turpis molestie tristique. Sed nec dui sit amet libero maximus viverra vitae vitae nunc.

Aliquam faucibus nulla ac nunc dapibus, mattis molestie lacus venenatis. Etiam vel bibendum mi. Fusce sit amet ligula sem. Etiam a nisi et nisi sollicitudin ornare. Nulla porta tortor sit amet blandit pellentesque. Nam vel pellentesque augue. Pellentesque quis justo cursus, dapibus nisi vel, ornare nulla. Sed velit lacus, rhoncus at justo ut, elementum consequat felis.

Phasellus mi magna, lacinia eget convallis in, mollis a tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ac facilisis neque. Etiam in suscipit sapien. Integer et quam sapien. Duis pretium dolor tortor, sed aliquet justo bibendum sit amet. Etiam ipsum ipsum, finibus a libero quis, gravida mollis nulla. Donec diam libero, commodo vitae consequat at, suscipit nec diam. Aliquam sem nunc, sollicitudin at tempor quis, pharetra sit amet mi. Etiam tincidunt maximus ullamcorper. Donec volutpat auctor arcu sed commodo. Aliquam fermentum dictum augue, in tincidunt nisl fringilla a. Nulla sed enim feugiat, volutpat sem vitae, aliquet tellus. Pellentesque ac velit dolor. Fusce malesuada metus in lobortis ornare.`;

function wordCount(text) {
  return text.split(' ').length;
}
console.log(wordCount(text));

//Count the number of time the latin word `et` appears
(text.match( /et/ )||[]).length

// Bonus 2
