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