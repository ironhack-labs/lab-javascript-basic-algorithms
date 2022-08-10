console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "Gustavo";
    console.log(`The driver's is: ${hacker1}`); 
let hacker2 = "Marijo";
    console.log(`The navigator's is: ${hacker2}`); 

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacer2.length} characters.`);
}else if(hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length}`);
}

// Iteration 3: Loops
let name = "";
for(let i = 0; i < hacker1.length; i++){
    let nameUpperCase = hacker1.toUpperCase();
    name += nameUpperCase[i] + " ";
}
    console.log(name);

let nameReversed = "";
for(let x = hacker1.length -1; x >= 0; x--){
    nameReversed += hacker1[x];
}
    console.log(nameReversed);

    let orderedNames = hacker1.localeCompare(hacker2) 
    if(orderedNames == -1){
        console.log("The driver's name goes first.")
    } else if (orderedNames == 1){
        console.log("Yo, the navigator goes first definitely.")

    }else{
        console.log("What?! You both have the same name?")
    }