// //5. Ask the user for a new string and check if it's a *palindrome*. 
// Examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

let str ="race car";
let restr = str.split('').reverse().join('');
console.log(restr); // prints reversed: rac ecar
// here we get: false -->
if(str === restr) console.log(true);
else console.log(false);

str ="step on no pets";
restr = str.split('').reverse().join('');
console.log(restr); //prints reversed: step on no pets
// here we get: true -->
if(str === restr) console.log(true);
else console.log(false);