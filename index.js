
const hacker1 = "María";        
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Carlos";       
console.log(`The navigator's name is ${hacker2}`);


const length1 = hacker1.length;
const length2 = hacker2.length;

if (length1 > length2) {
  console.log(`The driver has the longest name, it has ${length1} characters.`);
} else if (length2 > length1) {
  console.log(`It seems that the navigator has the longest name, it has ${length2} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${length1} characters!`);
}


let driverUpperSpaced = "";
for (let i = 0; i < hacker1.length; i++) {
  driverUpperSpaced += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    driverUpperSpaced += " ";
  }
}
console.log(driverUpperSpaced);


let navigatorReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReversed += hacker2[i];
}
console.log(navigatorReversed);


if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}