var hacker1 = "Kahlil";
var hacker2 = "Daniela";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");

}
else if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");

}
else if (hacker1.length == hacker2.length) {
    console.log("Wow, you both got equally long names, " + hacker1.length + " characters");
}

var name = "";
for (var i = 0; i < hacker1.length; i++) {
    name += hacker1[i] + " ";
    console.log(name.toUpperCase());
}
