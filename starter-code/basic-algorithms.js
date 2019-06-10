let hacker1 = "Alfredo";
console.log(`The driver's name is ${hacker1}`);



let hacker2 = "Steve";
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
 console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
}

let hacker1UpperSpaced = hacker1.toUpperCase();
  console.log(hacker1UpperSpaced.split('').join(' '));

let hacker2Reverse = hacker2;
  console.log(hacker2Reverse.split('').reverse().join(''));


let userString = "It is a very big day";
let lowerCaseString = userString.toLowerCase();

/*
function isPalindrome (lowerCaseString) {
  // console.log(lowerCaseString);
  if (lowerCaseString.length % 2 === 0) {
    console.log('even');
      }
  
}

isPalindrome(lowerCaseString);
*/