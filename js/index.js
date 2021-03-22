// ITERATION 1: Names and Input //
const hacker1 = `Andrea`
console.log(`The driver's name is ${hacker1}`)

const hacker2 = `Brian`
console.log(`The navigator's name is ` + hacker2)


// ITERATION 2: Conditionals //
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}



// ITERATION 3: Loops //
// Printing hacker1's name with spaces
let hacker1WithSpaces = ``
for (char of hacker1) {
  hacker1WithSpaces += char.toUpperCase() + ` `
  }
console.log(hacker1WithSpaces)

// Printing hacker1's name backwards
let hacker1Backwards = ``
for (i=hacker1.length-1; i > -1; i--) {
  hacker1Backwards += hacker1[i]
}
console.log(hacker1Backwards)

// Printing names in order
switch (true) {
  case (hacker1.toLowerCase().localeCompare(hacker2.toLowerCase()) < 0):
    console.log(`The driver's name goes first.`)
    break

  case (hacker1.toLowerCase().localeCompare(hacker2.toLowerCase()) > 0):
    console.log(`Yo, the navigator goes first definitely.`)
    break

  default:
    console.log(`What?! You both have the same name?`)
    break
}


// BONUS 1 //
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus vitae mauris posuere cursus rhoncus eget sapien. Etiam viverra, arcu eget dapibus rhoncus, felis lectus efficitur massa, a consectetur turpis lorem at odio. Praesent vel orci venenatis, lobortis mauris a, tincidunt dui. Nunc sed aliquam dolor. Pellentesque aliquet dui ac erat imperdiet porta. Nullam fermentum ut est id placerat. Ut eu efficitur nisi. Donec quis purus non purus lacinia mattis ac sit amet sem. Donec in sapien consectetur, sollicitudin velit quis, pretium lectus. Vestibulum a vestibulum leo, in tincidunt felis. Morbi ac aliquam justo. Integer magna arcu, ultrices ut interdum in, venenatis sit amet enim. Cras faucibus leo at lacinia placerat. Donec pellentesque nunc et risus sagittis, venenatis venenatis justo porta. Cras non tellus nulla.

In consectetur euismod efficitur. Aliquam ultrices faucibus dolor, id tempus dolor volutpat quis. Nulla elementum leo magna, a ultrices lectus accumsan accumsan. Etiam iaculis nunc quis nisl porttitor pulvinar. Integer vel convallis magna. Integer non nisi interdum, porttitor lorem et, viverra sapien. Praesent porttitor sit amet neque at volutpat. In posuere lectus magna, a malesuada turpis aliquam at. Fusce ut luctus urna. Duis tincidunt ultrices pulvinar. Suspendisse non lacus id massa accumsan mollis. Quisque feugiat egestas arcu, quis volutpat nisl egestas et. Vestibulum ligula metus, egestas vel ullamcorper sit amet, tristique nec ex. Donec vestibulum libero pretium augue tristique, ac cursus nulla suscipit. Proin at nibh nulla.

Nulla et cursus lorem. In hac habitasse platea dictumst. Maecenas lobortis velit eu est ullamcorper posuere non eget lectus. Praesent et justo sapien. Nunc ut nunc ante. Suspendisse pellentesque est nec malesuada semper. Nunc feugiat libero et metus placerat, at blandit sapien maximus. Curabitur lobortis sapien enim, sed laoreet felis tempor aliquam. Phasellus in ultricies quam, quis blandit eros. Phasellus eu ipsum sem. Nam pharetra gravida nisl et varius. Nullam felis elit, egestas vitae nisl et, bibendum scelerisque urna. Donec eleifend nisl nec arcu dignissim commodo malesuada in nibh. Vestibulum tristique neque id enim fermentum interdum.`

// Number of words in text //
const listOfWords = text.split(` `)
console.log(`The text contains ${listOfWords.length} words.`)

// Number of "et" word //
let numberOfEt = 0
for (word of listOfWords) {
  if (word === `et`) {
    numberOfEt++
  }
}
console.log(`The word "et" appears ${numberOfEt} times.`)


// BONUS 2 //
const phraseToCheck = `stack cats`

// Removing spaces //
let phraseNoSpaces = ``
for (charIndex in phraseToCheck) {
  if (phraseToCheck[charIndex] !== ` `) {
    phraseNoSpaces += phraseToCheck[charIndex]
  }
}

// Checking if is palindrome //
for (up=0, down=phraseNoSpaces.length-1; up <= down+1; up++, down--) {
  if (phraseNoSpaces[up] === phraseNoSpaces[down]) {
    if (up >= down){
      console.log(`The phrase is palindrome! :)`)
    }
    continue
  } else {
    console.log(`The phrase is not palindrome! :(`)
    break
  }
}
