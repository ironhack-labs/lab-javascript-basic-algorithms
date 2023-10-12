
//ITERATION 1 
let hacker1 = "Alberto";
console.log(`The driver's name is ${hacker1}.`)
let hacker2= "Alberto";
console.log(`The navigator's name is ${hacker2}.`)


//ITERATION 2

if (hacker1.lenght > hacker2.lenght) {
    console.log(`The driver has the longest name, it has ${hacker1.lenght} characters`)
}
else if (hacker2.lenght > hacker1.lenght) {
    console.log(`The navigator has the longest name, it has ${hacker2.lenght} characters`)
 }  
 
 else{
    console.log(`Wow, you both have equally long names, ${hacker1.lenght} characters !`)
 }


 //ITERATION 3

 let hackerNameCaps = " ";
 for (let i = 0; i < hacker1.length; i++) {
    hackerNameCaps += hacker1[i].toUpperCase();
 }
 console.log(`${hackerNameCaps.trim()}`);

 let hackerNameReversed= " ";
 for(let i = hacker1.length-1; i >= 0; i--){
    hackerNameReversed += hacker1[i];
 }
 console.log(`${hackerNameReversed}`);

 