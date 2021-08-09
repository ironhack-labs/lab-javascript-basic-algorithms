// Iteration 1: Names and Input

//1.1
let driver = 'Pedro'
//1.2
console.log("The driver's name is " + driver)

//1.3
let navigator = 'Fernando'
//1.4
console.log(`The navigator's name is ${navigator}`)

// Iteration 2: Conditionals
//2.1
console.log(driver.length)
console.log(navigator.length)

if(driver.length < navigator.length) {
  console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters`)
}

// Iteration 3: Loops
//3.1
driver = 'P e d r o'
console.log(driver.toUpperCase())

//3.2
let x = navigator.length;
let navReverse = "";

  while (x>=0) {
    navReverse = navReverse + navigator.charAt(x);
    x--;
  }
  console.log(navReverse)

//3.3
driver = 'Pedro'

if (driver > navigator) {
  console.log('The navigator goes first definitely.')
} else {
  console.log("The driver's name goes first.")
}

//Bono 1
