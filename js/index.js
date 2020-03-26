console.log("I'm ready!");

// Iteration 1: Names and Input
let driver1 = 'Vladimir';

console.log("The driver's name is " + driver1);

let driver2 = 'Divya';

console.log("The navigator's name is " + driver2);

// Iteration 2: Conditionals

if (driver1.length > driver2.length) {
	console.log('The driver has the longest name, it has ' + driver1.length + ' characters');
} else if (driver1.length < driver2.length) {
	console.log('It seems that the navigator has the longest name, it has ' + driver2.length + ' characters');
} else {
	console.log('Wow, you both have equally long names, ' + driver1.length + ' characters!');
}

// Iteration 3: Loops

var result = '';
for (var i = 0; i < driver1.length; i++) {
	result = result + (driver1.charAt(i) + ' ');
}
console.log(result.toUpperCase());

var reverse = '';
for (var i = driver2.length; i >= 0; i--) {
	reverse = reverse + driver2.charAt(i - 1).toLowerCase();
}
console.log(reverse);

// console.log(driver1.split('').join(' ').toUpperCase());

// console.log(driver2.split('').reverse().join(' '));

if (driver1.localeCompare(driver2) > 0) {
	console.log("The driver's name goes first.");
} else if (driver1.localeCompare(driver2) < 0) {
	console.log('Yo, the navigator goes first definitely');
} else {
	console.log('What?! You both have the same name?');
}

let text =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur euismod sem, at convallis erat vulputate eget. Sed vestibulum fermentum hendrerit. Cras nec neque in arcu congue sollicitudin et quis justo. Duis imperdiet, leo ac maximus malesuada, orci ligula venenatis felis, in cursus mauris enim ut magna. Ut ac augue rhoncus, faucibus purus condimentum, varius odio. Aenean nec egestas sapien. Vivamus lacinia urna volutpat tellus fermentum, quis varius lacus pulvinar. Quisque semper erat id massa egestas dapibus. Morbi mollis diam diam. Duis sit amet malesuada ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam enim ante, ornare a ligula a, consectetur volutpat augue. Aliquam venenatis, lacus a congue scelerisque, ipsum velit venenatis risus, vitae molestie elit enim ac dolor. Cras urna quam, bibendum at mi non, malesuada porttitor tellus. Vivamus faucibus maximus dolor, vitae dictum sem lacinia ut. Nullam placerat nec quam eu commodo. Proin luctus enim in iaculis tincidunt. Suspendisse quis elit libero. Sed at ultrices diam, et vehicula erat. Aliquam tortor neque, rutrum eget aliquam sed, mollis nec metus. In tellus odio, interdum in metus quis, rutrum congue metus.Mauris rhoncus, orci vel auctor consequat, mauris lacus vehicula neque, in placerat lacus ligula nec erat. Donec malesuada at erat sed pharetra. Vivamus dui leo, ultrices bibendum tellus non, bibendum pharetra libero. Praesent ultricies odio non accumsan elementum. Phasellus pretium porttitor laoreet. Donec nisl odio, ultrices id placerat quis, iaculis quis lectus. Mauris vel pharetra nisl, ut consequat sem. Phasellus quis semper urna, at vestibulum leo. Fusce euismod egestas aliquet. Vivamus aliquet erat eu diam interdum euismod. Nunc facilisis enim sit amet tempor vehicula.';

let words = text.split(' ');

//console.log(words)
console.log(`The number of words in the string is ${words.length}.`);

let count = 0;

words.forEach(function(word) {
	if (word === 'et') {
		count++;
	}
});

console.log(`The number of times the Latin word 'et' appears is ${count}`);
