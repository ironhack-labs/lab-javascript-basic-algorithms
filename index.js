// Iteration 1: Names and Input
const hacker1 = "Bob"
const hacker2 = "Tedd"
    console.log(`The driver's name is ${hacker1}`);
    console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
    if(hacker1.length > hacker2.length){
        console.log(`The driver had the longest name, it had ${hacker1.length} characters`);
}
    else if(hacker1.length < hacker2.length){
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
    }else{
        console.log(` Wow, you both have equally long names, ${hacker1.length} characters!`);
    }

// Iteration 3: Loops
let hresult = "";
for(let i = 0 ; i < hacker1.length ; i++){
    hresult += hacker1[i].toUpperCase() + " ";
}
console.log(hresult);
let nresult = "";
for(let i = hacker2.length - 1 ; i >= 0 ; i-- ){
    nresult += hacker2[i];
}
console.log(nresult);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

