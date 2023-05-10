// Iteration 1: Names and Input

const hacker1 = "carolin"

console.log("The driver's name is " + hacker1);

const hacker2 = "Linh"
console.log("The navigator's name is " + hacker2);



// Iteration 2: Conditionals

const hacker1 = "carolin"
const hacker2 = "Linh"

if(hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has " + hacker1.length + "characters");
} else if(hacker2.length > hacker1.length){
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + "characters");
}else{
  console.log("Wow, you both have equally long names, " + hacker1.length + "characters!");
}

// Iteration 3: Loops

let driversName = "";
let navigatorsName = "";
  
for(let i=0; i < hacker1.length; i++){
  driversName = driversName + hacker1[i].toUpperCase() + " ";
}
 console.log(driversName);

for(let i=hacker2.length-1; i >=0; i--){
  navigatorsName = navigatorsName + hacker2[i];
}
console.log(navigatorsName);

const result = hacker1.localeCompare(hacker2);
if (const result =-1){console.log(result);
                     }
