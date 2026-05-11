let hacker1 = "Carlos";
console.log("The driver's name is " + hacker1)
let hacker2 = "Lucia";
console.log("The navigator's name is YYYY" + hacker2)
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}
else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}
let driverSpaced = "";
for (let i = 0; i < hacker1.length; i++) {
    driverSpaced += hacker1[i].toUpperCase() + " ";
}
console.log(driverSpaced.trim());

let reversedNavigator = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedNavigator += hacker2[i];
}

console.log(reversedNavigator);

for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedNavigator += hacker2[i];
}

console.log(reversedNavigator);