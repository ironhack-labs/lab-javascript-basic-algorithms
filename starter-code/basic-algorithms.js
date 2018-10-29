//This was actually done on Tuesday 23rd October but I made a mess with commits and pushing
//the wrong stuff, so I deleted the repo and forked it again CAUSE I DUNNO WHAT ELSE 2 DO
//so here it is again now.
//From this I have learned:
//ALWAYS CHECK WHAT AND FROM WHERE YOU'RE CLONING AND ALWAYS CHECK WHAT YOU'RE
//PUSHING AND TO WHEREEEEEEEEEE > ____ < 

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