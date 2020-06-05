// Iteration 1: Names and Input

console.log("I'm ready!");

let hacker1 = "wafaa";
console.log(`The driver's name is ${hacker1}`);
let hacker2= "marwa";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters`);
  }

// Iteration 3: Loops

let result1 = "";
  for(let i = 0; i<hacker1.length; i++){
       result1 = result1 + hacker1[i] + " ";
  }
  console.log(result1.toUpperCase());
  
  
  let result2 = "";
  for(let i = hacker2.length-1; i>= 0; i--){
      result2 = result2 + hacker2[i];
  }
   console.log(result2);

   switch(hacker1.localeCompare(hacker2)){
      case 1 :
      console.log('The driver\'s name goes first.');
      break;
      case -1 :
      console.log('Yo, the navigator goes first definitely.');
      break;
      case 0 :
      console.log('What?! You both have the same name?');
      break;
   }