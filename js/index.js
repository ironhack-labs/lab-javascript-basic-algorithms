// Iteration 1: Names and Input

let hacker1 = "Colin";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Bob";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`It Seems that driver has the longest name, it has ${hacker1.length} characters.`);
 }
 else if (hacker1.length < hacker2.length){
    console.log(`It Seems that navigator has the longest name, it has ${hacker2.length} characters.`);
 }
 else if (hacker1.length = hacker2.length){
    console.log(`WOW, you both have equally long names ${hacker2.length} characters.`);
 }

// Iteration 3: Loops

// 3.1
newHacker1 = hacker1.toUpperCase().split('').join(' ')
console.log(newHacker1);

//3.2
let reverse = "";

for (let i = hacker2.length-1; i >= 0 ; i--){
    reverse += hacker2[i];
}
console.log(reverse);

//3.3

for (let j = 0; j < hacker1.length; j++){

         if (hacker1[j] < hacker2[j]){
    console.log("The drivers name goes first.The drivers name goes first.");
}
    else if (hacker1[j] > hacker2[j]){
            console.log("Yo, the navigator goes first definitely.");
}
    else if (hacker2[j] === hacker2[j]){
              
        console.log ("What?! You both have the same name?");
        
    }
break;
}
       
    
    
        
        
    










