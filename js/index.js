// Iteration 1: Names and Input

//1.1
const hacker1 = `Steve`;
//1.2
const hacker2 = `Joey`;

//1.3
console.log(`The driver's name is ${hacker1}`);
//1.4
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

//2.1
if ( hacker1.length > hacker2.length ) {

	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if ( hacker1.length < hacker2.length ) {

	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

} else {
	
	console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

}


// Iteration 3: Loops

//3.1
let hacker1SeparatedCap = ``;

for (let i = 0; i < hacker1.length; i++) {

	hacker1SeparatedCap += `${hacker1[i].toUpperCase()} `;

}

console.log(hacker1SeparatedCap);


//3.2
let hacker2Reverse = ``;

for (var i = hacker2.length - 1; i >= 0; i--) {

    hacker2Reverse += hacker2[i];

}

console.log(hacker2Reverse);


//3.3
let order = hacker1.localeCompare(hacker2);

if ( order === -1 ) {

	console.log(`The driver's name goes first.`);

} else if ( order === 1 ) {

	console.log(`Yo, the navigator goes first definitely.`);

} else {

	console.log(`What?! You both have the same name?`);

}


// Bonus Time!

//Bonus 1:
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a felis id libero tincidunt faucibus nec gravida sem. Integer non velit ex. Nulla cursus euismod nisl, ac iaculis velit. In hac habitasse platea dictumst. Sed blandit accumsan lacus, eu porta eros pharetra nec. Maecenas bibendum in leo eget venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis lacus, vestibulum a enim in, condimentum dapibus risus. Sed non consequat neque. Nullam consectetur, nisl eget aliquet sollicitudin, leo dolor semper nulla, et dictum risus dolor sed lacus.

Curabitur ac justo sit amet urna aliquet tincidunt. Nam egestas, dolor ac consectetur dictum, ipsum orci facilisis metus, at pharetra velit odio fermentum nunc. Nunc et massa felis. Vestibulum elementum, arcu ut tempor maximus, magna ante gravida purus, at faucibus justo orci ut nulla. Donec convallis, leo eu tempus tincidunt, sem augue feugiat justo, vestibulum mattis est nulla vel mi. Cras vel orci sit amet nisl suscipit aliquet ac ac nulla. Nunc interdum porttitor turpis, vulputate consectetur justo aliquam sit amet. Aliquam sed odio sit amet velit interdum egestas. Integer pellentesque, elit in efficitur dapibus, nibh nisi bibendum est, at luctus lorem ex vel dui. Integer congue libero sed libero molestie, nec molestie odio malesuada. Vestibulum tempus sem nibh, sed euismod mi posuere vel. Morbi blandit non mauris non suscipit. Quisque accumsan, turpis sed ultricies auctor, nisl tellus tincidunt elit, et fringilla lorem turpis eu tellus. Etiam eros magna, efficitur id tincidunt et, semper a tortor.

In rhoncus tincidunt odio sit amet aliquam. Sed dictum cursus enim, non finibus velit cursus id. Maecenas nec nisi odio. Proin quis nibh ut turpis eleifend bibendum at non lectus. Integer sollicitudin libero a enim pulvinar mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vitae ipsum vitae lacus rhoncus egestas ut quis quam. Aenean non velit nibh. Nunc tincidunt tellus velit. Donec vel iaculis lorem, sed sollicitudin dolor.`;


const wordCount = lorem.trim().split(/\s+/).length;

console.log(`There are ${wordCount} words in the string`);


const etCount = lorem.match(/( et( |\.|\,))|(Et( |\.|\,))/).length;

console.log(`The word et appears ${etCount} times in the string`);


//Bonus 2:
const phraseToCheck = `Was it a car or a cat I saw?`;

const cleanPhrase = phraseToCheck.replace(/\W/g, ``).toLowerCase();

let phraseReverse = ``;

for (var i = cleanPhrase.length - 1; i >= 0; i--) {

    phraseReverse += cleanPhrase[i];

}

if ( cleanPhrase === phraseReverse ) {

	console.log(`The phrase "${phraseToCheck}" is a Palindrome!`);

} else {

	console.log(`Sorry, the phrase "${phraseToCheck}" is not a Palindrome`);

}