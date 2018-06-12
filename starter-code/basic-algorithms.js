// ** MAXOFTWONUMBERS EXERCISE **

// function maxOfTwoNumbers(num1, num2) {
//   if (num1 > num2) {
//     console.log(`${num1} is larger than ${num2}.`);
//   } else {
//     console.log(`${num2} is larger than ${num1}.`)
//   }
// }

// maxOfTwoNumbers(12,11);

// var words = [
//   'mystery',
//   'brother',
//   'aviator',
//   'crocodile',
//   'pearl',
//   'orchard',
//   'crackpot'
// ];

// --------------------------

// ** LONGEST WORD EXERCISE **

// var longest = words[0];

// words.forEach(function(oneWord) {
// if(longest.length < oneWord.length){
//   longest = oneWord
// }
// return longest
// });
// console.log("longest is: ", longest);

// ------------------------------

// ** SUM OF NUMBERS EXERCISE **

// var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// var sum;

// numbers.forEach(function(placeholder) {
//   sum += placeholder;
// });

// console.log(sum);

// ------------------------

// ** AVERAGE OF NUMBERS EXERCISE **

// var numbers = [2, 6, 9, 10, 7, 4, 1, 9];


// var sum = 0;
// function sumBlah(array){
//   array.forEach(function(placeholder) {
//     sum += placeholder;
//   });
//     return sum;
// }

// // sumBlah(numbers)
// function average(array){
//   console.log(sumBlah(array) / array.length)
// }
// average(numbers)

// --------------------------------

// ** AVERAGE LENGTH OF WORDS EXERCISE **

// var words = [
//     'seat',
//     'correspond',
//     'linen',
//     'motif',
//     'hole',
//     'smell',
//     'smart',
//     'chaos',
//     'fuel',
//     'palace'
// ];

// words.forEach(function(i) {
//   console.log(i.length);
// });

// var sum;

// var sum = 0;

// function sumBlah(array){
//   array.forEach(function(placeholder) {
//     sum += placeholder.length;
//   });
//     return sum;
// }

// // sumBlah(numbers)
// function average(array){
//   console.log(sumBlah(array) / array.length)
// }
// average(words);
  
// -----------------------------------

// ** FINDING ELEMENTS - DID NOT FINISH ** 

// function doesItExist(arrayOfWords, wordToSearchFor) {
//   var doesIt = false;

// arrayOfWords.forEach(function(eachWord) {

//   if (eachWord === wordToSearchFor){doesIt = true};

// });

//   return doesIt;
// }

// console.log(doesItExist(wordsWithDuplicates))

// // ** COUNTING REPETITION **

// function numberOfTimes(theArray, theWord) {
//   var count = 0;

//   theArray.forEach(function(eachWord){
//     if(eachWord === theWord) {
//       count++
//     }
//   });

//   return count;
// }

// numberOfTimes(wordsWithDuplicates, 'simple');

//Conditionals

