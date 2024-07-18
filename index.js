// Iteration 1: Names and Input
let hacker1 = "Nicolas";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Mael";

console.log(`the navigator's name is ${hacker2}`);


// Iteration 2: Conditionals


if (hacker1 > hacker2){
    console.log(`The driver has the longest name, it has ${hacker1.length} characteres.`);
}
else if (hacker1 < hacker2) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else if (hacker1 === hacker2) {
    console.log(`Wow, you both have equally long names, (${hacker1.length} = ${hacker2.length}) characters!`);
}


// Iteration 3: Loops

let driverUpper = hacker1.toUpperCase();
let result = "";

for (let i = 0; i < driverUpper.length; i++) {
        const letter = driverUpper[i] + " ";
        result += letter;
}
    console.log(result);

    
    let resultRev = "";
    
    for (let i = hacker2.length -1; i >=0; i--) {
          const letter = hacker2[i];
          resultRev += letter;
    }
        console.log(resultRev);








