// Iteration 1: Names and Input
 

const hacker1 = "Milad Rahmani";

console.log(`The driver's name is ${hacker1}`);  


    const hacker2 = "Antonio"; 

console.log(`The driver's name is ${hacker2}`); 
 

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log( ` The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) { 
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters! `);
}  



// Iteration 3: Loops  

// 3.1

for (let i = 0; i < 1; i++) { 
     console.log(hacker1.split("").join(" ").toUpperCase());   
}   

// 3.2

 let string = "Antonio";
  let emptystring = "";

  for (let i = string.length - 1; i >= 0; i--) {
    emptystring += string[i];
  }

  console.log(emptystring);


// 3.3



for (let i = 0; i < 1; i++) { 
    if (hacker1 < hacker2) {
        console.log("The driver's name goes first.") 
    } else if (hacker1 > hacker2) {
        console.log("Yo, the navigator goes first, definitely")
    } else {
        console.log("What?! You both have the same name?")
    }
    
    
}