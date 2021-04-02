console.log("I'm ready!");

// Iteration 1: Names and Input

const hacker1 = "Daniel";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Joserra";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length === hacker2.length){
    const bothLength = hacker1.length;
    console.log(`Wow, you both have equally long names, ${bothLength}`);
} else if (hacker1.length < hacker2.length){
    const navigator= hacker2.length;
    console.log(`It seems that the navigator has the longest name, it has ${navigator} characters.`);
}else{
    const driver = hacker1.length;
    console.log(`The driver has the longest name, it has ${driver} characters.`);
};

// Iteration 3: Loops

for(let i=0; i<hacker1.length; i++){
    let letter = hacker1.charAt(i);
    console.log(letter.toUpperCase() + ' ');
};

for(let i=hacker1.length-1; i=0; i--){
    let letter = hacker1.charAt(i);
    console.log(letter.toUpperCase() + ' ');
};

