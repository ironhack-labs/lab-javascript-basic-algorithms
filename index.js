// Iteration 1:

let hacker1= "Mahmoud";
console.log(`The driver name is ${hacker1}`);
let hacker2= "Marine";
console.log(`The navigator name is ${hacker2}`);

// Iteration 2:

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}characters`);
  }
  else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}characters`);
  }
  else{
    console.log(`How, you both have equally long names,${hacker1.length}characters`);
  }

  // Iteration 3:

  let newName ="";
for(let i=0; i<= hacker1.length ; i++){
  newName += hacker1[i] + " ";
}
console.log(newName.toUpperCase());  

let secondName ="";
for(let i=hacker2.length-1; i>=0  ; i--){
  secondName += hacker2[i];
}
console.log(secondName);  


if(hacker1 > hacker2){
    console.log("The driver's name goes first");
  }
  else if(hacker1 < hacker2){
    console.log("Yo, the navigator goes first, definitely.");
    
  }
  else{
    console.log("What?! You both have the same name?");
  }
