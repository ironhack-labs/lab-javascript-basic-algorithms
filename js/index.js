// Iteration 1: Names and Input


var hacker1 = "Michele"
console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Michelangelo"
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals


var hacker1Length = hacker1.length; 
var hacker2Length = hacker2.length;

if (hacker2Length > hacker1Length ) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1Length > hacker2Length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}


// Iteration 3: Loops

// 3.1 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"


hacker1 = hacker1.toUpperCase();
hacker2 = hacker2.toUpperCase();


// Index Array of hacker1


let hacker1Arr = [`${hacker1[0]} ${hacker1[1]} ${hacker1[2]} ${hacker1[3]} ${hacker1[4]} ${hacker1[5]} ${hacker1[6]} `];

// Loop through Array hacker 1
for (let i = 0; i < hacker1Arr.length; i++) {
   console.log(`${hacker1Arr[i]}`);
     }


     // Index Array of hacker2 

let hacker2Arr = [`${hacker2[0]} ${hacker2[1]} ${hacker2[2]} ${hacker2[3]} ${hacker2[4]} ${hacker2[5]} ${hacker2[6]} ${hacker2[7]} ${hacker2[8]} ${hacker2[9]} ${hacker2[10]} ${hacker2[11]} `];

// Loop through Array hacker 2
for (let i = 0; i < hacker2Arr.length; i++) {
   console.log(`${hacker2Arr[i]} `);
    
  }
 

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ" 


function reverseString (str) {
  let reverseH2 = ""; 
  
  
  for (let i = str.length -1; i >= 0; i-- ) {
    reverseH2 += str[i];
  }
  return reverseH2;
  
}
reverseString('Michelangelo'); 
console.log(reverseString('Michelangelo'));



// 3.3 Depending on the lexicographic order of the strings, print: 


if ('Michele' < 'Michelangelo') {
    console.log(`The driver's name goes first`)
} else if ('Michelangelo' < 'Michele') {
    console.log(`Yo, the navigator goes first definitely`)
}


// Thanks! 






