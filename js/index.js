 
 // Iteration 1: Names and Input
 console.log('I`m ready');
 let hacker1 = "Jose Ramon"
 let hacker2 = "Aleksei"
 console.log(`The driver's name is ${hacker1}`); 
 console.log(`The driver's name is ${hacker2}`); 
 let hacker1Cap;

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name,it has ${hacker1.length} characters.`)
}else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name,it has ${hacker2}`)
}else{
    console.log(`Wow, you both have equally long names`);
}



// Iteration 3: Loops 

let hacker1Cap; 
let container = "";
let containerRev = "";

hacker1Cap = hacker1.toUpperCase();


for(i=0;i < hacker1Cap.length; i++){
container += `${hacker1Cap[i]} `;
console.log(container);
 }
 for(i=9;i >= 0; i--){
containerRev += `${hacker1Cap[i]} `;
console.log(containerRev);

 }


