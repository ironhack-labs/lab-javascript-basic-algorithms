//iteration 1
//1.1
const hacker1 = 'Pedro';

//1.2
console.log(`The driver's name is ${hacker1}`);

//1.3
const hacker2 = 'Davide'; 

//1.4
console.log(`The navigator's name is ${hacker2}`);

//iteration 2
//2.1
if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} 
else if (hacker2.length > hacker1.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} 
else {
console.log(`Wow, you both have equally long names, ${hacker1} characters!`)
};

// Iteration 3 LOOPS
// 3.1
let result = '';
for(i = 0; i < hacker1.length; i++){
   hacker1[i];
   result+= hacker1[i].toUpperCase() + ' ';
   }

// 3.2
let reversedName = '';  
for(i = hacker2.length - 1; i >= 0; i--){
   hacker2[i];
   reversedName += hacker2[i];
 }

//  3.3
// let driver = hacker1.split('');
// let navigator = hacker2.split('');

// 


