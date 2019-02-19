console.log('I\'m ready!');

//Name and Input
var hacker1 = 'Kerlyn';
    console.log('The driver\'s name is ' + hacker1);

var hacker2 = prompt('The navigator\s name is ');
    console.log('The navigator\s name is ' + hacker2);


//Conditionals
if (hacker1.length == hacker2.length) {
    console.log('Wow, you both got equally long names, ' + hacker1.length + ' characters!!');
} else if (hacker1.length > hacker2.length) {
    console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else {
   console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
}

//Loops
//driver's name, separated by a space and in capitals
for(var i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
}

//navigator's name in reverse order
for(var j = hacker2.length - 1; j >= 0; j--) {
    console.log(hacker2[j]);
}

//lexicographic order
var n = hacker1.localeCompare(hacker2); //comparar 2 strings: 0 = igual, -1 = ordem a > b, 1 ordem b >a)
if (n == 0) { 
    console.log("What?! You both got the same name?");
} else if (n == -1) {
    console.log("The driver's name goes first");  
} else {
    console.log("Yo, the navigator goes first definitely");
}
