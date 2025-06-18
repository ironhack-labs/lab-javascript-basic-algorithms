const hacker1 = "Raquel"; 
console.log("The driver's name is " + hacker1);

const hacker2 = "Farlon";
console.log("The navigator's name is " + hacker2);


if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if(hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + "characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + "characteres!");
}

let nameWithSpaces = "";
 for(let i = 0; i < hacker1.length; i++) {
    nameWithSpaces += hacker1[i].toUpperCase() + "";
 }
 console.log(nameWithSpaces);

 let reversedName = "";
 for (let i = hacker2.length - 1; i--;) {
    reversedName += hacker2[i];
 }
console.log(reversedName);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");

    console.log("Código finalizado por Raquel");
}console.log("Branch Raquel resolvida");





