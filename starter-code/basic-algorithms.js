// Names and Input
var hacker1 = 'Cecilia';
var hacker2 = window.prompt('What\'s the navigator\'s name?');

console.log('The driver\'s name is ' + hacker1);
console.log('The navigator\'s name is ' + hacker2);

// Conditionals
if (hacker1.length > hacker2.length ) {
    console.log('The driver has the longest name, it has ' + hacker1.length + ' characters');
} else if (hacker1.length < hacker2.length ) {
    console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
} else if (hacker1.length === hacker2.length) {
    console.log('Wow, you both got equally long names, ' + hacker2.length + ' characters!!');
};

// Loops
for (var i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
}

// Lorem ipsum generator