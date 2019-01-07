// Names and Input

var hacker1 = “Kevin”;
var hacker2 = prompt(“Name the navigator”);
console.log(“The hacker is ” + hacker1);
console.log(“The navigator is ” + hacker2);

// the following command is upper casing, split and rejoining the string at once
console.log(hacker1.toUpperCase().split(‘’).reverse().join(' ’));

// Another way to do the command .split
var split = “”;
for(var i=0; i < hacker1.length;i++){
 split += hacker1[i] + ” “;
}
console.log(“Manual method ” + split);

// Another way to do the  command .reverse()
// We iterate over the index and not the number of characters,
// that’s why we remove 1 to the length, because the index start at 0
var reverse = [];
for (var i=hacker1.length-1; i>=0 ;i--){
 reverse += hacker1[i];
}
console.log(reverse);

//Conditionals
var hacker1L = hacker1.length;
var hacker2L = hacker2.length;

// Name length check
if (hacker1.length > hacker2.length){
 console.log(“The Driver has the longest name, it has ” + hacker1.length + ” characters”);
} else if (hacker2.length > hacker1.length){
 console.log(“Yo, navigator got the longest name, it has ” + hacker2L + ” characters”);
} else if (hacker1.length == hacker2.length){
 console.log(“wow, you both got equally long names, “+ hacker1L +” characters!!“);
}

// Name place in the alphabet
if (hacker2.localeCompare(hacker1) === 1){
 console.log(“The driver’s name goes first”);
} else if (hacker2.localeCompare(hacker1) === -1){
 console.log(“Yo, the navigator goes first definitely”);
} else {
 console.log(“What?! You both got the same name?“);
}
