// Iteration 1: Names and Input
const hacker1 = "Prates";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Monteiro";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length}`);
}


// Iteration 3: Loops
let driverCapital = "";

for(let i = 0; i < hacker1.length; i++){
    driverCapital = driverCapital + hacker1[i] + " ";
}
console.log(driverCapital.toUpperCase());


let inverseName = "";

for(let x = hacker2.length-1; x >= 0; x--){
    inverseName = inverseName + hacker2[x];
}
console.log(inverseName);


if(hacker1<hacker2){
        console.log("The driver's name goes first.");
    }else if(hacker1 > hacker2){
      console.log("Yo, the navigator goes first definitely.");
    }else{
      console.log("What?! You both have the same name?");
    }