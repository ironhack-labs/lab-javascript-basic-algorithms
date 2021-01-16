
/// Itteration 1 /// 
/// Create variables with driver's and navigator's name /// 

let hacker1 =`Luca`; // driver 
let hacker2 =`Tadej`; // navigator

console.log(`The driver name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)


/// Itteration 2 /// 
/// Show different text depending on which text is longer /// 

// Questions: Using switch(true) worked. But using switch(hacker1) did not /// 

switch(true){ 
  case (hacker1.length > hacker2.length): 
    console.log(`Driver has longer name. It has ${hacker1.length} characters`);
    break; 
  
  case (hacker1.length < hacker2.length): 
    console.log(`Navigators has longer name. It has ${hacker2.length} characters`);
    break;
  
  case (hacker1.length === hacker2.length): 
    console.log(`They both have equal number of characters, which is ${hacker2.length}`);
    break;
  
  default: 
    console.log(`You probably made a type somewhere`);
    break;

}

/// Using it in 'if sente'


if(hacker1.length > hacker2.length){ 
  console.log(`Driver has a longer name. It has ${hacker1.length} characters`);
}

  else if(hacker1.length < hacker2.length){ 
    console.log(`Navigator has longer name. It has ${hacker2.length} characters`);

  }

/// Itteration 3 /// 
/// Print all the characters using looops
/// Why did we have to declare new value here? Is there any other way to approach this? 

let nameSpace = ' '; // We declare new variable which will later have a space 
for(let i = 0; i < hacker1.length; i++) {
   nameSpace += hacker1[i].toUpperCase() + " " // We redeclare new variable here where we combine each index in hacker1 + add space
}
console.log(nameSpace) /// we then show this new variable 


/// Itteration 3.2 //// 
let newName = ''; 
for (let i=hacker2.length-1; i > -1; i-- ){ // Question: How do we interpret this>? 
   newName += hacker2[i]} // Question: What on earth do we do here? 
  console.log(newName) 

/// Itteration 3.3 //// 


/// I was able to do this with 'if' sentence but not with loop? How do I do that? 

if (hacker1 > hacker2) {
   console.log(`The driver's name goes first.`);
} else if (hacker1 < hacker2) {
   console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1 === hacker2) {
   console.log(`What?! You both have the same name?`);
}


/// Question: can we go through bons exercises please /// 
/// Questions: Can we be a little bit more practical with examples? 
