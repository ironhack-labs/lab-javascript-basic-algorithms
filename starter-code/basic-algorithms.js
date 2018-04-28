// Names and Input
var hacker1 = "Michael";
console.log("The driver's name is: " + hacker1);

var hacker2 = prompt("Enter the name of navigator: ");
console.log("The navigator name's is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
}
else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both got equally long names, " + hacker1.length + " characters!!")
}
else {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
}

var nameUpper = "";
for (i = 0; i < hacker1.length; i++) {
    nameUpper = nameUpper + hacker1[i].toUpperCase() + " ";
}
console.log(nameUpper);

var reverseName = ""
for (i = hacker2.length - 1; i >= 0; i--) {
    reverseName = reverseName + hacker2[i];
}
console.log(reverseName);

// Lorem ipsum generator
