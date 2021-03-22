// Iteration 1: Names and Input

const hacker1 = 'Pablo'

console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Javier'

console.log(`The navigator's name is ${hacker2}`)

//--------------------------------------------------------------------------------------
// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  }else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

//--------------------------------------------------------------------------------------
// Iteration 3: Loops

let driverNameUpperCased = ''
for(i = 0; i < hacker1.length; i++){
  driverNameUpperCased += hacker1[i].toUpperCase()
  driverNameUpperCased += ' '
}
let result = driverNameUpperCased.slice(0, 9) 
console.log(result)



let reversedNavigatorName = '';
for (i = (hacker2.length-1); i >= 0; i--){
  reversedNavigatorName += hacker2[i]
}
console.log(reversedNavigatorName)


let alphabeticOrder = hacker1.localeCompare(hacker2)
if (alphabeticOrder === 1){
  console.log(`The driver's name goes first.`)
}else if (alphabeticOrder === -1){
  console.log(`Yo, the navigator goes first definitely.`)
}else{
  console.log(`What?! You both have the same name?`)
}

//--------------------------------------------------------------------------------------
// BONUS 1

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique sagittis est, nec consectetur diam feugiat in. Maecenas eget facilisis felis. Vivamus sollicitudin leo at pellentesque bibendum. Cras mattis nec ante in convallis. Nullam tortor est, iaculis ac arcu id, tempus tincidunt ipsum. In scelerisque mollis commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam nec rutrum leo, id egestas ligula. Vestibulum luctus pulvinar velit, non faucibus leo tristique non. Aliquam erat volutpat.
Suspendisse eu lorem in elit euismod varius. Nunc quis augue consectetur, mollis quam in, laoreet arcu. Duis feugiat ipsum lorem. Nunc a bibendum lorem, id sodales mi. Ut id erat ultrices, dignissim lacus non, feugiat libero. Donec neque nisi, semper vel sapien a, aliquam vulputate lorem. Etiam cursus lacus eu molestie posuere. Aenean nec vehicula orci. In bibendum vel tellus ac sodales. In ac tincidunt tellus. Nam mi neque, dictum eget felis et, ultricies rutrum ex. Etiam tincidunt sed ligula eu feugiat. Pellentesque suscipit, diam id dictum laoreet, dui sapien sodales nibh, ut sollicitudin ipsum purus vitae augue. Vivamus ut varius nisi, iaculis imperdiet metus. Nam imperdiet ante vel rutrum molestie. Ut pretium ac nisi vel sagittis.
Phasellus egestas sapien at dolor rhoncus, sed finibus eros sodales. Aenean elit erat, laoreet at commodo interdum, blandit vel nisi. Praesent sagittis ultrices quam, finibus porttitor felis eleifend vel. Duis vel aliquet libero. Nulla convallis eleifend eleifend. Mauris ut purus vitae libero volutpat aliquam non mollis mauris. Mauris ut ullamcorper elit, quis pellentesque nisi. Aenean iaculis convallis tincidunt. Etiam velit neque, pellentesque vel pulvinar eu, facilisis sit amet magna. Curabitur in finibus elit.`

let textSpaces = text.split(" ")
let numberOfWords = textSpaces.length;
console.log(numberOfWords)

let numberOfEt = text.split('et').length-1
console.log(`Word 'et' appears ${numberOfEt} times`)

//--------------------------------------------------------------------------------------
// BONUS 2

let palindromeOrNot = 'put it up'
let palindromeWithoutSpaces = palindromeOrNot.split(' ')
let str = ''
for (i = 0; i < palindromeWithoutSpaces.length; i++){
  str += palindromeWithoutSpaces[i]
}
console.log(str)

if ((str.length % 2) === 0){

  let halfStrLength = str.length / 2
  let firstHalfStr = str.slice(0, halfStrLength)
  let secondHalfStr = ''
  let lastHalfStr = str.slice(halfStrLength)
  
  for (i=lastHalfStr.length-1; i >= 0 ; i--){
    secondHalfStr += lastHalfStr[i]
  }

  if (firstHalfStr === secondHalfStr){
    console.log(`The string '${palindromeOrNot}' is a palindrome`)
  }else{
    console.log(`The string '${palindromeOrNot}' is NOT a palindrome`)
  }

}else if((str.length % 2) === 1){
// Conozco el parseInt() de cursillos que he hecho de udemy antes de empezar Ironhack 
// asi que me he tomado la libertad de usarlo para este caso. 
// Me ha parecido la mejor forma de hacerlo usando al maximo lo que si hemos dado.

  let halfStrLength = parseInt(str.length / 2)
  let firstHalfStr = str.slice(0, halfStrLength)
  let secondHalfStr = ''
  let lastHalfStr = str.slice(halfStrLength+1)
  
  for (i=lastHalfStr.length-1; i >= 0 ; i--){
    secondHalfStr += lastHalfStr[i]
  }

  if (firstHalfStr === secondHalfStr){
    console.log(`The string '${palindromeOrNot}' is a palindrome`)
  }else{
    console.log(`The string '${palindromeOrNot}' is NOT a palindrome`)
  }

}else{
  console.log(`Its not a valid value. You have to reassign a string value to the variable 'str'.`)
}