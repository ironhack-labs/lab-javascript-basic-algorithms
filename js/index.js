// Iteration 1: Names and Input

let hacker1 = 'Pedro';

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Luis';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if
    (hacker1.length < hacker2.length) {
    console.log (`The navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  };

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split("").join(" "));

function reverseString(str){  
    let reversed = "";      
     for (let i = str.length - 1; i >= 0; i--){         
       reversed += str[i];  
     }     
    return reversed;
  }
  
  reverseString(hacker1);