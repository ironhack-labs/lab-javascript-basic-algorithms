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