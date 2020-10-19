// Iteration 1: Names and Input
// Iteration 1:
let hacker1 = "Salvatore";
console.log(`"The driver's name is XXXX"`);
let hacker2 = "Salvatore";
console.log(`"The navigator's name is yyyy"`);


// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  else console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
// Iteration 3: Loops

for (i=0; i<=hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
  
 console.log(hacker1);
 
 
   
  let string = "";
 
 for(let i=hacker1.length-1; i >= 0; i--)
 {
   string += hacker1[i];
 }
 
 console.log(string);
   
  let longerName;
   
   if (hacker1.length<hacker2.length) {
     longerName=hacker2;
   } else if {hacker2.length<hacker1.length} {
     longerName=hacker1;
   }else{
     longerName=hacker1;
   }
   
  for (let i=0; i<longerName.length;i++) {
    if hacker1[i] === hacker2[i] {
      continue;
    } else if hacker1[i] < hacker2[i] {
      console.log("the driver's name goes first.")
    }
    break;
  } else {
    console.log('What?! You both have the same name?');
  }
 }