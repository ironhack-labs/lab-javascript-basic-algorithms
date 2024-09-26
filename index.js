// Iteration 1: Names and Input
const hacker1 = "Peter";
console.log(`The driver's name is ${hacker1}.`)

const hacker2 = "Sergio";
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals
const driverNameLength = (hacker1.length)
const naviNameLength = (hacker2.length)
const totalCharacters = (driverNameLength + naviNameLength)

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${driverNameLength} characters.`);
}else if(hacker2.length>hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }else{
 console.log(`Wow, you both have equally long names, ${totalCharacters} Characters!`)
  }*/


// Iteration 3: Loops

const lastIndexDriver = hacker1.length -1;
for (let i=0; i<=lastIndexDriver; i++){
  const charDriver = hacker1[i];
  console.log(charDriver)
}

for (let i= 0; i<= hacker1.length-1; i++){
    console.log(hacker1[i].toUpperCase());
    }

for (let i=hacker1.length-1; i>=0; i--){
        console.log(hacker1[i]);
      }

//3.3.

const hacker1 = "Peter";
const hacker2 = "Sergio";

if(hacker1>hacker2){
  console.log("The drive's name goes first.");
}else if(hacker1<hacker2){
  console.log("Yo, the navigator goes first, definitely.");
}else if (hacker1 == hacker2){
  console.log("What?! You both have the same name?")
}


