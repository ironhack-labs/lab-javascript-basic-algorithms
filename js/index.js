const nameDriver = 'Daniel'

console.log(`"The Driver's name is ${nameDriver}""`)

const nameNavigator = 'Joserra'

console.log(`"The navigator's name is ${nameNavigator}" `)

const nameDriverLength = nameDriver.length

const nameNavigatorLength = nameNavigator.length

if (nameNavigatorLength < nameDriverLength) {

  console.log(`-The Driver has the longest name. it has ${nameDriverLength} characters . O`)

}
else if (nameNavigatorLength > nameDriverLength) {

  console.log(`-It seems that the navigator has the longest name, it has ${nameNavigatorLength} characters. O`)

}
else {

  console.log(`-Wow, you both have equally long names, ${nameDriverLength}! .`)
}

const uppernameDriver = nameDriver.toUpperCase()

console.log(uppernameDriver)

let nameDriverSeparated=""

for(let i=0; i < nameDriverLength; i++){

  nameDriverSeparated +=  uppernameDriver.charAt(i) + " " 

}
console.log(`" ${nameDriverSeparated}"`)

let nameNavigatorReverse

for (i=nameNavigatorLength;i >=0; i--){

  nameNavigatorReverse += nameNavigator[i]

}

console.log(`"${nameNavigatorReverse}"`)

let a = uppernameDriver

let b = nameNavigator.toUpperCase

if (a < b) { 

  console.log(`The driver's name goes first`)

} else if (a > b) {

  console.log(`Yo, the navigator goes first definitely`)

} else {

  console.log(`What? You both have the same name?`)
}


/*Bonus1*/

const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


const paragraphLength = paragraph.length

let numberSpace = 0

let letter

for (let i=0; i<paragraphLength; i++){

  letter = paragraph[i]

    if (letter.indexOf(' ')!= -1){
      numberSpace ++
    }      

  }

const wordNumber = numberSpace ++

console.log(numberSpace)

for (let i=0; i<paragraphLength; i++){

  let numberEt 

  let et = paragraph.indexOf(' et')
  
  if (et != -1){

    numberEt ++

   }
 }

 console.log(numberEt)

