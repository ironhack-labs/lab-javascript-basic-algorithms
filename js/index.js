console.log("I'm ready!");

let hacker1 = "Daniela T"
let hacker2 = "Daniela T"
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length -1} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}
let newName = "";
for (i=0; i<hacker1.length; i++) {
newName += hacker1[i].slice().toUpperCase()+ " ";
 
}
console.log(newName);
let secondName = "";
for (i=hacker1.length - 1; i>=0 ; i--) {
    secondName += hacker1[i].slice();
}
console.log(secondName);
let theAnswer = [hacker1, hacker2];
if (theAnswer.sort() === hacker1 && theAnswer.sort() === hacker2) {
    console.log (`What?! You both have the same name?`)
} else if (theAnswer.sort()=== hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`The driver's name goes first.`);
}

