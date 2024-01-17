// Iteration 1: Names and Input

const hacker1 = "John";  //driver
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Mark";  //navigator
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals


if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if(hacker2.length > hacker1.length){
        console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
}

else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}



// Iteration 3: Loops 
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let driver =hacker1[0].toUpperCase();

for(let i=1; i< hacker1.length; i++){
    driver +=" " + hacker1[i].toUpperCase();
}

let navigator =hacker2[0].toUpperCase();

for(let i=1; i< hacker2.length; i++){
    navigator +=" " + hacker2[i].toUpperCase();
}

console.log(driver);
console.log(navigator);


//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let reverseName = hacker2[hacker2.length-1];

for (let i=hacker2.length-2; i>=0; i--){
    reverseName += hacker2[i];

}

console.log(reverseName);


//3.3 Depending on the lexicographic order of the strings, print:


if(hacker1.toUpperCase() === hacker2.toUpperCase()){
    console.log("What?! You both have the same name?");
}

else if(hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first");
}

else {
    console.log("The navigator's name goes first ");
}
