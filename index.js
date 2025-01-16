// Iteration 1: Names and Input
const hacker1="John";
console.log (`The driver´s name is ${hacker1}`);

const hacker2="Peter";
console.log (`The navigator´s name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver´s has the longer name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

//const uppercaseName=hacker1.toUpperCase()
//console.log(uppercaseName);

let uppercaseName="";
for(let i=0; i<hacker1.length; i++){
    uppercaseName += hacker1[i].toUpperCase();
    if (i<hacker1.length - 1){
        uppercaseName +=" ";
    }
}
console.log(uppercaseName);


let reverseName=""
for (let i =uppercaseName.length-1; i>=0; i--) {
    reverseName +=uppercaseName[i];
}
console.log(reverseName);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }


