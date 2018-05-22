// Names and Input


//Conditionals


// Lorem ipsum generator
console.log("We're ready!");

var hacker1 = 'Baby Driver';

console.log("The driver's name is " + hacker1);

var hacker2 = window.prompt("Please, enter your navigator's name");

console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
	console.log(
		'The Diver has the longest name, it has ' + hacker1.length + ' characters'
	);
} else if (hacker1.length < hacker2.length) {
	console.log(
		'Yo, navigator got the longest name, it has ' +
			hacker2.length +
			' characters'
	);
} else {
	console.log(
		'wow, you both git equally long names, ' + hacker1.length + ' characters!!'
	);
}

var moped = '';
for (var i = 0; i < hacker1.length; i++) {
	moped += hacker1[i].toUpperCase() + ' ';
}
console.log(moped);

var navRev = '';

for (var i = hacker2.length - 1; i >= 0; i--) {
	navRev += hacker2[i];
}


console.log(navRev);

if (hacker1.toUpperCase() === hacker2.toUpperCase()) {
	console.log('What?! You both got the same name?');
} else if (hacker1.toUpperCase() < hacker2.toUpperCase()) {
	console.log("The driver's name goes first");
} else {
	console.log('Yo, the navigator goes first definitely');
}

var isPalin = window.prompt(
	'Enter a snippet you wanna check, if it is a palindrome'
);

var trimPalin= "";

var abc = 'abcdefghijklmnopqrstuvwxyz';
abc=abc.toUpperCase();
isPalin=isPalin.toUpperCase();

	for (var i = 0; i < isPalin.length; i++) {
for (var j = 0; j < abc.length; j++) {
if(isPalin[i]===abc[j]){
trimPalin+=isPalin[i];
}
  }
}
var palin1half="";
var palin2half="";


  for(i=0;i<(Math.floor(trimPalin.length/2))+1;i++){
    palin1half+=trimPalin[i];
  }   
  for(i=(Math.floor(trimPalin.length/2));i<trimPalin.length; i++){
    palin2half+=trimPalin[i];
  }
  var palin2halfRev="";
  for (var i = palin2half.length - 1; i >= 0; i--) {
	palin2halfRev += palin2half[i];
}
if (palin1half.toUpperCase() === palin2halfRev.toUpperCase()) {
	console.log('This is a Palindrome');
} else {
	console.log('This is not a Palindrome');
}

console.log(Math.floor(trimPalin.length));
console.log(Math.floor(trimPalin.length/2));
console.log(trimPalin);
console.log(palin1half);
console.log(palin2halfRev);
