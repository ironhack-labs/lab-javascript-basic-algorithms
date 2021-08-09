// Iteration 1: Names and Input
const hacker1 = "Monteiro";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Prates";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length}`);
}


// Iteration 3: Loops
let storeCapitalSpace = "";

for(let i=0; i<hacker1.length; i++){
    storeCapitalSpace = storeCapitalSpace + hacker1[i] + " ";
}
console.log(storeCapitalSpace.toUpperCase());

let storeInverseName = "";

for(let r=hacker2.length-1; r>=0; r--){
    storeInverseName = storeInverseName + hacker2[r];
}
console.log(storeInverseName);

if(hacker1<hacker2){
        console.log("The driver's name goes first.");
    }else if(hacker1>hacker2){
      console.log("Yo, the navigator goes first definitely.")
    }else{
      console.log("What?! You both have the same name?");
    }