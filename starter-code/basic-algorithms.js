var hacker1 = "tamere" ;
console.log( "the drive name is " + hacker1 );

var hacker2 = prompt ("what is your name bitch?");

console.log( "The navigator's name is " + hacker2);

if ( hacker1.length > hacker2.length ) {
  console.log ("The driver has the longest name, it has " + hacker1.length + " characters");
}
else if ( hacker1.length < hacker2.length ) {
  console.log ("Yo, navigator got the longest name, it has " + hacker2.length + 'characters');
}

else {
  console.log ("you both got equally long names, " + hacker1.length + " characters!!" );
}

console.log(hacker1)
hacker1.split('');

console.log(hacker1)
hacker1.split('').join(' ');


console.log( hacker1.split('').reverse().join(''));

var array=[hacker1, hacker2];
array.sort();


if (array[0] === array[1]) {
  console.log("you have the same name bitches!");
}
else if (array[0] === hacker2) {
  console.log("Yo, the navigator goes first definitely");
}
else if(array[0] === hacker1) {
  console.log("The driver's name goes first");
}
