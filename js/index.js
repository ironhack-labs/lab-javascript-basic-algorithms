//---LAB 01 - JS Basic Algorithms -- 21.05.2021
//---Writen by Pedro Pasquali e Thais Silva 

console.log(`hi there, testing, testing...1,2,3`) 

// Iteration 1: Names and Input

let hacker1 = `Pedro`//--Driver
let hacker2 = `Thais`//--Navigator

console.log(`The driver´s name is ${hacker1}`)
console.log(`The navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length<hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops 

let index=0;
let iterationN=0; //-not used
let spacesNeeded=hacker1.length-1; //--- 4 ----not used
let toAdd=(hacker1[index]+` `); //+hacker1[index+=1]+` `)
let toAdd2=(hacker2.charAt((index-(hacker2.length))));
let hacker1new=``;
let hacker2new=``;

/* --- UNCOMMENT TO TEST
while (index<hacker1.length){
    hacker1new=toAdd;
    index+=1;
    toAdd+=(hacker1[index]+` `);
} 
console.log(hacker1new.toUpperCase());
*/

while (index<hacker2.length){
    hacker2new=toAdd2
    index+=1
    toAdd2+=(hacker2.charAt(index-hacker2.length))
}
console.log(hacker2new)