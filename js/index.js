//console.log('hello world 123');

//Iteration 1
let hacker1 = 'Corentine';

console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Adam';

console.log(`The navigator's name is ${hacker2}`)


//Iteration 2
if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} 
else if (hacker1.length < hacker2.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)  
}
else { 
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

//Iteration 3
//3.1
let result = '';

for (let i=0; i<hacker1.length; i++) {
    result += hacker1[i].toUpperCase() + ' ';
}
console.log(result)

//3.2.
let result2 = '';

for (let i=hacker1.length-1;  i>=0 ; i--) {
    result2 += hacker1[i];
}
console.log(result2);

//3.3
function comparer (driver, navigator) {

let hackerArray = [];
hackerArray.push(driver,navigator);
let sortedArray = hackerArray.sort();  
  
  console.log(sortedArray);
  
  let firstValue = sortedArray.indexOf(driver);
  let secondValue = sortedArray.indexOf(navigator);
  console.log(firstValue, secondValue);
  
  if(firstValue < secondValue) {
    console.log(`The driver's name goes first`);
  } else if(firstValue > secondValue) {
     console.log(`The navigators name goes first`);
  } else {
    console.log(`What?! You both have the same name?`);
  }
}

comparer(hacker1,hacker2);