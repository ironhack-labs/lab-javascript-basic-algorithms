console.log("I'm ready!")
// Iteration 1: Names and Input
const hacker1 = "Daniel"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Roman"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

let letrasHacker1 = ""
for (let i = 0; i < hacker1.length; i++) {
  if (i ===  hacker1.length -1){
    letrasHacker1 += hacker1[i].toUpperCase()
  } else {
    letrasHacker1 += hacker1[i].toUpperCase() + " "
  }
}
console.log(letrasHacker1)



let letrasHacker2 = ""
for (let i = hacker2.length -1; i >= 0; i--) {
  letrasHacker2 += hacker2[i]
}
console.log(letrasHacker2)


// Bonus 1

let loremString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non mauris sem. Morbi neque neque, placerat a dignissim a, consequat at arcu. Aenean ut lacus sit amet nulla blandit tincidunt eu ac diam. Sed risus justo, tincidunt et ultricies vel, pellentesque eget purus. Morbi tempor sed sem quis ullamcorper. Curabitur mauris elit, consequat eget pellentesque et, hendrerit sed ex. Integer a vestibulum ex. Nam in elit eget tellus luctus maximus et ac ligula. Fusce laoreet bibendum dolor a malesuada. Aliquam in sagittis tortor. Vestibulum convallis ornare massa, a mattis turpis pellentesque eu. Mauris eget gravida sem. Donec eu convallis purus, sit amet ullamcorper dui. Duis vulputate ornare diam a lacinia. Duis massa tellus, pulvinar et nibh eget, dictum pharetra risus. Sed ac arcu a odio laoreet gravida. Quisque imperdiet, ligula id porttitor sodales, risus diam volutpat nunc, ut aliquet nulla turpis at urna. Vivamus sed finibus ligula. Vivamus volutpat, nibh a viverra mattis, dolor dui lobortis quam, nec condimentum magna massa id neque. Morbi lacinia enim eget rutrum congue. Nulla odio justo, congue et ante eget, imperdiet bibendum arcu. Nam bibendum mi vitae mi convallis varius. Sed venenatis sagittis nulla et egestas. Aenean a magna sit amet erat scelerisque tempor id vel dui. Curabitur dictum sodales vehicula. Cras consectetur diam eu auctor finibus. Maecenas tellus leo, commodo vitae cursus id, convallis nec lacus. Fusce ut finibus nunc. Proin fringilla ornare lacus, sit amet dignissim augue convallis at. Donec sit amet elit sit amet risus maximus iaculis. Morbi arcu diam, venenatis eu justo hendrerit, mattis laoreet nulla. Sed laoreet velit sit amet mollis lobortis. Morbi congue mi ac molestie convallis. Vestibulum faucibus dictum mauris, at tempor eros cursus quis. Nullam vel felis quis neque interdum ullamcorper. Maecenas pharetra vestibulum rutrum. Etiam ut dignissim neque.'

console.log(loremString.split(" ").length)
console.log(loremString.split(" et ").length)

// Bonus 2
const phraseToCheck = "race, car"
let checkWithoutSpaces = phraseToCheck.replace(" ", "").toLowerCase()
checkWithoutSpaces = checkWithoutSpaces.replace( /[\s,]/g,"")

let resultPalindrome = false
for (let i = 0; i < checkWithoutSpaces.length; i ++) {
  if (checkWithoutSpaces[checkWithoutSpaces.length - i -1] !== checkWithoutSpaces[i]) {
    resultPalindrome = false
    break
  } else {
    resultPalindrome = true
  }  
}
console.log(`Is the strig a palindome?: ${resultPalindrome}`)
