// Iteration 1: Names and Input
const hacker1="Gosha";
console.log(`The Driver's name is ${hacker1}.`);
const hacker2="Gabi";
console.log(`The Navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length==hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
};

// Iteration 3: Loops
let driverSpaced="";
let driverArray=[];
for (i=0; i<hacker1.length; i++) {
    driverArray.push(hacker1[i]);
    if (i<hacker1.length-1) {
      driverArray.push(' ');
    }
    //console.log(driverArray);
};
driverSpaced=driverArray.join("").toUpperCase();
console.log(driverSpaced);


let navigatorArray=[];
for (j=hacker2.length-1; j>-1; j--) {
    navigatorArray.push(hacker2[j]);
};
//console.log(navigatorArray);
let navigatorReversed = navigatorArray.join("");
console.log(navigatorReversed);

/*let hacker3= "Tim";
let nameReversed = "";
for (let k = hacker3.length - 1; k >= 0; k--) {  console.log(nameReversed)
nameReversed += hacker3[k];};
console.log(nameReversed);*/

if (hacker1.localeCompare(hacker2)==0) {
console.log("What?! You both have the same name?")
} else if (hacker1.localeCompare(hacker2)==-1) {
  console.log("The driver's name goes first.")
} else {
  console.log("Yo, the navigator goes first definitely.")
};