// Iteration 1: Names and Input
// 
var hacker1 = "Fábio";
var hacker2 = "Greg";

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);


//Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver\'s name has ${hacker1.length} characters.`);
}else if(hacker2.length > hacker1.length){
    console.log( `The navigator's name has ${hacker2.length} characters`);

}else{
    console.log("What?! You both have the same name?");
}







// Iteration 3: Loops




//3.1
let driverName = '';
for (i = 0; i < hacker1.length; i++){
  hacker1[i];
  driverName += hacker1[i].toUpperCase() + ' ';
    console.log (driverName);
}

//3.2 
let reversedNavigator = '';
for (i = hacker2.length - 1; i >= 0; i--){
  hacker2[i];
  reversedNavigator += hacker2[i];
  console.log (reversedNavigator);
}


//3.3

if(hacker1 > hacker2 ){
  console.log(`The ${hacker1}'s name goes first.`)
}else if(hacker2 > hacker1){
  console.log(`The navigator, ${hacker2}, goes first definitely.`);

}else {
  console.log('What?! You both have the same name?')
}


//bonus 1 

let string ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique leo ac ex tincidunt, fermentum feugiat tortor euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur tempor pulvinar urna, et lobortis tellus iaculis ut. Donec nec sem et nulla mattis rutrum id accumsan ex. Duis facilisis imperdiet metus sit amet bibendum. Donec vel dictum turpis. Phasellus bibendum, nunc vel efficitur ornare, dui tellus finibus risus, non condimentum neque nulla vel ipsum. Aenean et egestas purus. Suspendisse et nisi ornare, pulvinar arcu ut, fringilla enim.";
console.log(string);

for(let i = 0; i < string.length; i++) {
    console.log(string.length, "words");
    }
    
console.log(string.split("et").length); // counting how many times "et" appears;

// end of bonus 1



// bonus 2

let phraseToCheck;


let string1 = "A man, a plan, a canal, Panama!";
let string2 = "Amor Roma";
let string3 = "race car";
let string4 = "stack cats";
let string5 = "step on no pets";
let string6 = "taco cat";
let string7 = "put it up";
let string8 = "Was it a car or a cat I saw?";
let string9 = "No 'x' in Nixon";




//palindrome

function isPalindrome (str){
  str = str.toUpperCase(); // convert every word to uppercase to easily compare them.
  let newStr = ' ';
  for(let i = 0; i < str.length; i++){
    const charCode = str.charCodeAt(i); // use charCode to know the number of characters.
    if(charCode >= 65 && charCode <= 90){
      newStr += str.charCodeAt(i);
    }
  }

  for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
    const leftChar = newStr.charAt(i);
    const rightChar = newStr.charAt(newStr.length -1 - i);
      if(leftChar !== rightChar) {
        return false;
      }

  }

  return true;
  
}


console.log(isPalindrome(string1));

console.log(isPalindrome(string2));