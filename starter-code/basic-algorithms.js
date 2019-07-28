// Names and Input

let hacker1 = "Sam";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = prompt("Enter your name");
console.log(`The navigators's name is ${hacker2}`);

//Conditionals

function NamesLength(hacker1, hacker2) {
    if (hacker1.length > hacker2.length) {
        console.log("The Driver has the longest name, it has ${hacker1.length} characters")
    }
    else if (hacker2.length > hacker1.length) {
        console.log("Yo, navigators got the longest name, it has ${hacker2.length} character")
    }
    else if (hacker1.length === hacker2.length) {
        console.log("wow, you both got equally long names, ${hacker1.length} characters")
    }
}

NamesLength(hacker1, hacker2);
let driversName = "";
const driversNameToUpperCaseWithSpace = () => {
    for (let i = 0; i < hacker1.length; i++) {
        driversName += hacker1[i].toUpperCase();
        driversName += " "
    }
    console.log(driversName);
}
driversNameToUpperCaseWithSpace();

