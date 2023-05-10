// Iteration 1
let hacker1 = "Juan";
console.log("The driver's name is " + hacker1);

let hacker2 = "Lucas";
console.log("The navigator's name is " + hacker2);

// Iteration 2
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3.1
let hacker1UpperCase = hacker1.toUpperCase();
let str = ''
for(let i=0; i<hacker1UpperCase.length; i++){
  str += hacker1UpperCase[i]+' ';
}
console.log(str)

// let arr = hacker1.toUpperCase().split('');
// console.log(arr.join(' '))

// 3.2
let reverse = '';
for(let i = hacker2.length-1; i>=0; i--){
  reverse = reverse + hacker2[i];
}
console.log(reverse)

// 3.3
if(hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.")
} else if(hacker1.localeCompare(hacker2) === 1){
      console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?")
}