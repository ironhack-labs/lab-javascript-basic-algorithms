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

/*Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

// Generate 3 random paragraphs
const longText = `Lorem et ipsum dolor sit amet, consectetur adipiscing elit. Sed nec leo varius, placerat quam vitae, ultricies enim. Proin commodo, risus vitae ultricies pharetra, libero augue euismod mauris, vel aliquet nulla risus vitae arcu. Nunc consectetur nisl id libero aliquam, ac volutpat augue sagittis. Aenean eget lacus mi. Vivamus aliquet pharetra nunc vel sollicitudin. Ut aliquet massa enim, in facilisis nunc semper non.

Duis blandit tellus eget feugiat tincidunt. Sed eu risus rutrum, convallis tellus id, ullamcorper odio. Proin bibendum augue ac magna interdum aliquet. Nullam volutpat odio id justo congue, eget commodo sapien tincidunt. Sed sit amet ipsum vitae nisl vulputate commodo a ut lectus. et Cras vel nisi ut velit facilisis ornare. Curabitur non libero ut justo sagittis imperdiet a ut nulla.

Vestibulum ante ipsum primis mother in faucibus orci luctus et ultrices posuere cubilia curae; Aenean dignissim augue ac dolor fringilla euismod. Ut aliquet, enim eget ultricies ullamcorper, turpis nunc iaculis ipsum, id facilisis lacus magna in dolor. Morbi sit amet magna sed nisl placerat vehicula. Nunc rhoncus nibh a magna eleifend, ac tincidunt mauris posuere. Vivamus molestie, erat ac molestie bibendum, lorem sapien dictum nisi, eget hendrerit felis quam et tortor.`;


const words = longText.split(' ')
console.log(`the number of words in the string ${words.length}`)




// Make your program count the number of times the Latin word et appears.

function countCurrent (longText, subStrc) {
  let counterCurrent = 0
  let position = 0

  while ((position = longText.indexOf(subStrc, position))!== -1){
    ++counterCurrent;
    position += subStrc.length;
  }

  return counterCurrent;
}

console.log(`the number of times the Latin word et appears is: ${countCurrent(longText, 'et')}`);