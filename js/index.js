// Iteration 1: Names and Input
//
const hacker1 ="Melissa";
console.log(`The driver's name is ${hacker1}`);
console.log(hacker1.length);

const hacker2 ="Jesus";
console.log(`The navigator's name is ${hacker2}`);
console.log(hacker2.length);

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }else if (hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }else if (hacker1.length===hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  };

// Iteration 3: Loops

let hacker1Name=" ";

for(let i=0; i<hacker1.length;i++){
  hacker1Name += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Name);

let hacker2Name=" ";
for(let i=hacker2.length-1; i>=0;i--){
  hacker2Name += hacker2[i];
}
console.log(hacker2Name);

let nameComparison = hacker1.localeCompare(hacker2);
console.log(nameComparison);


if(nameComparison==-1){
  console.log("The driver's name goes first.");
} else if (nameComparison==1){
  console.log("Yo, the navigator goes first definitely.");
} else if (nameComparison==0){
  console.log("What?! You both have the same name?");
}