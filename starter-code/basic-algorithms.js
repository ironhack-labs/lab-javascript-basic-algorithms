// Names and Input
console.log("I'm ready");

var hacker1 = "Delphine";
var hacker2 = prompt("What's the navigator's name ?");



console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else if (hacker2.length > hacker1.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}
else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//Conditionals
var sep = "";

for (var i = 0; i < hacker1.length; i++) {
    sep += hacker1[i] + " "
}
console.log(sep.toUpperCase());

var rev = "";
for (var i = hacker2.length - 1; i > 0; i--) {
    rev += hacker2[i];
    console.log(hacker2[i]);
}
console.log(rev);

var lex = [hacker1, hacker2];
lex.sort();
console.log(lex.sort());

if (lex.indexOf(hacker1) < lex.indexOf(hacker2)) {
    console.log("The driver's name goes first");
}
else if (lex.indexOf(hacker1) > lex.indexOf(hacker2)) {
    console.log("Yo, the navigator goes first definitely");
}
else {
    console.log("What?! You both got the same name?");
}

// Lorem ipsum generator
