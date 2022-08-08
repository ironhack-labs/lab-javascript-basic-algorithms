// Iteration 1: Names and Input
let hacker1 = 'Jean';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Malte';

console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
	console.log(
		`the driver has the longest name, it has ${hacker1.length} characters`
	);
} else if (hacker1.length < hacker2.length) {
	console.log(
		`the driver has the longest name, it has ${hacker2.length} characters`
	);
} else {
	console.log(
		`Wow, you both have equally long names, ${hacker1.length} characters!`
	);
}

// Iteration 3: Loops
let newDriverName = '';
for (let i = 0; i < hacker1.length; i++) {
	newDriverName = newDriverName + hacker1[i].toUpperCase() + ' ';
}
console.log(hacker1);

let newNavigatorName = '';
for (let j = hacker2.length - 1; j > -1; j--) {
	newNavigatorName = newNavigatorName + hacker2[j];
}
console.log(newNavigatorName);

console.log(hacker1[0]);
console.log(hacker2[0]);
console.log(hacker1[0] < hacker2[0]);

let driver = 'jean';
let navigator = 'male';

if (hacker1[0] < hacker2[0]) {
	console.log(`The driver's name goes first.`);
} else if (hacker2[0] < hacker1[0]) {
	console.log(`Yo, the navigator goes first definitely.`);
} else {
	console.log('What?! You both have the same name?');
}


// BONUS 1
let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet, urna sed hendrerit eleifend, magna enim iaculis ex, ut volutpat urna elit sit amet est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent commodo lectus sed dignissim consequat. Pellentesque orci dolor, ultricies a magna quis, placerat vestibulum lorem. Praesent sodales non ex nec maximus. In a metus non felis cursus rhoncus. Nunc dui magna, ultricies ut sem eget, convallis finibus elit. Aenean dolor mauris, bibendum in nulla eget, imperdiet tristique ex. Sed id varius velit. Sed vitae purus elit. Aenean feugiat ut dolor non commodo. Etiam purus lacus, sollicitudin ac elementum a, tristique eu justo. Fusce eros ipsum, molestie id convallis sit amet, aliquam pulvinar dolor. Nullam ut libero eget leo aliquet faucibus at at augue.\n' + 
'Morbi tortor arcu, dignissim in interdum eget, euismod eu nisi. Integer eu eros porta, elementum lacus et, facilisis massa. Sed et commodo magna. Curabitur placerat pretium sapien, vel lobortis velit imperdiet eget. Nunc sit amet laoreet lorem. Vestibulum nec scelerisque elit. Cras quis elementum ante. Quisque sapien nibh, bibendum vel dui vitae, tincidunt commodo est. Cras pellentesque sollicitudin enim. Mauris ac nisi euismod, porttitor diam id, faucibus ipsum.\n' +

'Mauris a iaculis eros. Mauris venenatis id nisl non luctus. Nunc porta, tellus at semper euismod, est lorem malesuada diam, a hendrerit mauris risus dignissim mi. Donec at ante placerat augue vulputate cursus et id felis. Cras dictum eros at turpis ullamcorper semper. Quisque id vulputate elit. Vivamus vulputate metus posuere lacus faucibus ultrices. Etiam enim est, malesuada eu tortor vitae, sagittis ornare risus. Proin quis ornare urna. Integer id elit eleifend, laoreet arcu quis, facilisis nibh. Aenean sit amet arcu et odio feugiat placerat vitae at quam. Nunc tempus velit nec mi consequat, id vehicula dui pulvinar. Etiam quis erat ac lorem rutrum fringilla. Sed vitae augue dolor.';

let numberSpaces = 0
for (let index = 0; index < text.length; index++) {
    if (text[index] === " " || (text[index] === '.' && text[index + 1] !== " ")) {
        numberSpaces = numberSpaces +1
    }
    
}

console.log(numberSpaces);




let hasEtInIt = text.split(' et ').length

console.log(hasEtInIt -1);




