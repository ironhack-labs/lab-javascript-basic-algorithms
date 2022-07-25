console.log("I'm ready");
// Iteration 1: Names and Input
let hacker1='XXXX';
console.log(`The driver's name is ${hacker1}`);
let hacker2='YYYY';
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
let spaceName=``;

//3.1
for(i=0; i<hacker1.length; i++){
    spaceName += `${hacker1.charAt(i)} `;
}
console.log(spaceName.toUpperCase());

//3.2
let reverseName ='';
for (i=hacker1.length; i>0 ; i--){
    reverseName += hacker1[i-1];
}
console.log(reverseName);

//3.3
if (hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) === 1){
      console.log("Yo, the navigator goes first definitely.");
} else {
      console.log("What?! You both have the same name?");
}

