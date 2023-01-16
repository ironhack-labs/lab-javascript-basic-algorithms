// Iteration #1: Find the maximum
function maxOfTwoNumbers() {}

//Iteration #1 maxOfTwoNumbers ---

function maxOfTwoNumbers(num1,num2) {
  if (num1 > num2){
    return num1
  }else{ 
    return num2
  }
}
//invocar funcion:

maxOfTwoNumbers(20, 50)

//maxOfTwoNumbers

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord() {}
function findLongestWord(arr) {
  if (arr.length === 0) return null

  let longestWord = ""

  arr.forEach(function (word) {
    if (longestWord.length < word.length) {
      longestWord = word
    }
  })
  return longestWord
}




// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {}
function sumNumbers(numbers) {
var suma = 0;
for (let i = 0; i< numbers.length; i++) {
 suma += parseInt(numbers[i]);
}
return (suma);

}


// Iteration #3.1 Bonus:
function sum() {}
function sum() {
  
}