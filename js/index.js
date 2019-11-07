// Iteration 1: Names and Input
const hacker1 = 'Ana';
const hacker2 = 'Cristian';

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
	console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
let driverUppercased = hacker1.toUpperCase();
let driver = '';
for (let i = 0; i < driverUppercased.length; i++) {
	if (i === driverUppercased.length - 1) {
		driver += `${driverUppercased[i]}`;
	} else {
		driver += `${driverUppercased[i]} `;
	}
}
console.log(driver);

// 3.2
let navigator = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
	navigator += hacker2[i];
}
console.log(navigator);

// 3.3
if (hacker1 < hacker2) {
	console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
	console.log('Yo, the navigator goes first definitely.');
} else {
	console.log('What?! You both have the same name?');
}

// Bonus 1: Lorem ipsum
// 1.1 Number of words
const loremText =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula erat, mattis non mattis a, imperdiet eu est. Suspendisse sed augue quam. Aenean eleifend purus et nisl mollis, eget dictum nulla pharetra. Duis massa orci, cursus eget aliquam ac, ullamcorper ac mauris. Nunc volutpat neque vitae ipsum sollicitudin, a lobortis lectus dapibus. Vivamus tempus lectus a orci tempus molestie. Integer a dictum justo. Cras dapibus facilisis eros cursus luctus.\nDuis vel eros mauris. Etiam sed placerat leo. Maecenas sollicitudin nunc posuere volutpat ultrices. Proin odio libero, consectetur id eros in, rutrum facilisis neque. Etiam nisl orci, viverra eu sapien pharetra, volutpat commodo odio. Aliquam erat volutpat. Phasellus feugiat fermentum lectus, at luctus magna interdum id. Mauris vestibulum tincidunt nisi at congue. Proin est purus, hendrerit et molestie at, imperdiet ac libero. Donec vel tempor lectus, eu dictum leo. Vivamus quis faucibus lectus,at efficitur leo.\nSuspendisse iaculis ante vehicula, tristique purus at, luctus nibh. Curabitur at tempor erat, nec maximus diam. Aliquam libero risus, efficitur malesuada mauris sit amet, mollis mattis massa. Vestibulum consectetur leo nec massa iaculis ultricies. Nulla rhoncus quam magna, at efficitur purus congue vel. Praesent scelerisque justo nec mauris tincidunt, eu tincidunt nulla sollicitudin. Nullam at varius purus. Morbi turpis libero, aliquam id felis sit amet, vulputate porta purus. In iaculis massa ipsum, at vehicula arcu sollicitudin vitae. Maecenas ac felis vel augue porta euismod.';
let numOfWords = loremText.split(' ').length;
console.log(numOfWords);

// 1.2 Count of 'et' word
let arrLorem = loremText.split(' ');
let counter = 0;
for (let i = 0; i < loremText.length; i++) {
	if (arrLorem[i] === 'et' || arrLorem[i] === 'Et') {
		counter++;
	}
}
console.log(counter);
