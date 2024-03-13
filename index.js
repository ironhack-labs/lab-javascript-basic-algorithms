// Iteration 1: Names and Input

let hacker1 = "Saeideh";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Vinotha";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else{
   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops

/******************3.1****************/
let upperCaseDriver = hacker1.toUpperCase();

let newStr=""; 

for(let i = 0 ; i<hacker1.length; i++){
    
    newStr += upperCaseDriver[i];
    if(i!== hacker1.length){
        newStr += " ";
    }
}
console.log(newStr);

/******************3.2****************/
let newHacker2= "";
for(i=hacker2.length-1; i>=0 ; i--)
{
    newHacker2 +=hacker2[i];
}
console.log(newHacker2);

/******************3.2****************/
lowerHacker1 = hacker1.toLowerCase();
lowerHacker2 = hacker2.toLowerCase();

const result = lowerHacker1.localeCompare(lowerHacker2);

 switch(result){

    case 1:
        console.log(`${hacker1} goes first.`) ;
        break;
    case -1: 
        console.log(`yo, ${hacker2} goes first, definitely.`);
        break;
    case 0:
        console.log(`What?! You both have the same name?`);
        break;
    default:
        console.log("Something is wrong!!!")
            
 }

