//1.1 Create a variable hacker1 with the driver's name.

const driver = prompt('Escribe el nombre del Driver')
//1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${driver}`)
/*1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".*/
const navigator = prompt('Escribe el nombre del Navigator')
console.log(`The navigator's name is ${navigator}`)

/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/
if (driver.length > navigator.length){
  console.log(`The driver has the longest name, it has ${driver.length}  characters`)
}else if(driver.length < navigator.length){
  console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters`)
}/*else if(driver.length === navigator.length){
  console.log(`WOW! you both have equally long names, navigator have ${navigator.length} characters and driver have ${driver.length} characters`)}*/
else if(driver.length === navigator.length){
  console.log(`WOW! you both have equally long names, navigator have ${navigator.length} characters and driver have ${driver.length} characters`)}

//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let result = ''
for(let i=0; i < (driver.length); i++){
  const currentLetter = driver[i]
  if(i < driver.length-1){
    result += `${currentLetter} `
  }else {
    result += currentLetter
  }
}
console.log(result.toUpperCase())


//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".


for (let i = navigator.length-1; i >= 0; i--){
  console.log(navigator[i])
}

/*3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?

'str1'.localeCompare('str2');*/
console.log(driver,navigator)
if (driver.localeCompare(navigator) === -1){
  console.log("The driver's name goes first.");
}else if (navigator.localeCompare(driver) === -1){
  console.log("Yo, the navigator goes first, definitely.");
}else{
  console.log('What?! You both have the same name?')
}

/* Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears. */

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra porttitor urna, ac tincidunt arcu ornare eget. Etiam risus risus, porta sit amet ullamcorper eget, congue vel urna. Nunc sapien quam, sodales non fermentum at, venenatis et eros. Pellentesque pulvinar dolor a convallis ultricies. Nam in placerat tortor. Nunc varius ut nisl ut commodo. Aliquam auctor ac erat nec tincidunt. Donec arcu felis, hendrerit in metus eu, porta facilisis ipsum. Sed facilisis diam leo, eu porttitor magna lacinia ut. Mauris sit amet dictum ante. Pellentesque viverra massa eget molestie faucibus. Etiam nec molestie mi. Pellentesque a gravida risus. Ut sed arcu at lorem accumsan accumsan a nec lacus. In hac habitasse platea dictumst. Praesent at convallis libero, id ultricies libero.\nDuis hendrerit rhoncus sollicitudin. In hac habitasse platea dictumst. Sed tempus nulla nec sapien sagittis auctor. Fusce rutrum mauris ac pretium elementum. Quisque ultrices auctor nisi nec ornare. Donec magna lacus, tempus vitae aliquam et, ultricies sed urna. Sed interdum imperdiet nisl et ullamcorper. Nullam convallis et sem ac ultrices.\nDonec imperdiet hendrerit arcu. Mauris commodo vehicula est, eu malesuada urna rutrum eget. Proin eget elit vestibulum, aliquam ipsum quis, vehicula dolor. Donec sed justo in nisi condimentum congue a eget nisl. Proin viverra vulputate tortor in fermentum. Sed urna elit, consequat ut vehicula consectetur, sodales non ante. Nullam eu neque quis lectus cursus fringilla.'


let numberWords = longText.length
let latinWord = 0

for (let i = 0; i < longText.length; i++){
  const twoChar =  longText[i] + longText[i+1];
    if (twoChar === "et"){
      latinWord++
    }
}

console.log(numberWords, latinWord);
/*cuenta los et, incluidos los que son palabra larga,
no solo los que tienen espacios*/

/*Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:*/

const phraseToCheck = prompt('Escribe la frase')
let result = ''
let resultReverse = ''

for (let i = 0; i < phraseToCheck.length; i++){
  result = phraseToCheck[i].toLowerCase(); 
}
for (let i = phraseToCheck.length -1; i >=0; i--){
  resultReverse = phraseToCheck[i].toLowerCase();
}
if (result === resultReverse){
  console.log(`${phraseToCheck} is a Palindrome`)
}else {
  console.log(`'${phraseToCheck}' is not a Palindrome`)
}
