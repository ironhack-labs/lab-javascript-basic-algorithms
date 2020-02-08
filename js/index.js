// Iteration 1: Names and Input
let hacker1 = 'Goku'
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Vegeta'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let hacker1Length = hacker1.length
let hacker2Length = hacker2.length

if(hacker1Length > hacker2Length) {
  console.log(`The driver has the longer name, it has ${hacker1Length} characters`)
} else if(hacker1Length === hacker2Length) {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
} else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
}

// Iteration 3: Loops
let hacker1Spaced = ""
let hacker2Backward = ""

for (const char of hacker1) {
  hacker1Spaced = hacker1Spaced + char.toUpperCase() + " "
}

console.log(hacker1Spaced)

for (const char of hacker2.split("").reverse()) {
  hacker2Backward += char
}

console.log(hacker2Backward)

if (hacker1.localeCompare(hacker2) === 1) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

//Bonus 1
let someText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas leo turpis, vel venenatis diam blandit vel. Pellentesque eu diam quis nisl eleifend imperdiet nec sed nisl. Sed mauris augue, lacinia sed eleifend eget, sodales ut erat. Nunc neque nulla, sodales ac suscipit posuere, fermentum at arcu. Pellentesque porta vehicula lacus et posuere. Proin metus urna, egestas in finibus in, hendrerit eget magna. Fusce hendrerit diam sit amet ex blandit, eu malesuada neque dapibus.

Sed a sodales tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus rhoncus quam a dui efficitur luctus. Donec ut justo ut erat faucibus venenatis et fermentum sapien. Pellentesque imperdiet leo nec luctus interdum. Quisque efficitur, risus in pellentesque pellentesque, libero odio elementum massa, et ultricies massa massa consectetur orci. Donec non sagittis augue. Pellentesque blandit, ligula id placerat vehicula, enim purus pharetra augue, sit amet mollis est nibh vitae diam. Donec arcu enim, consequat eget lectus ac, porta eleifend diam. Suspendisse tristique vitae eros nec luctus. Aenean suscipit, erat condimentum sodales commodo, eros velit pulvinar augue, et fringilla nisi mi vitae velit. Nunc sed molestie est. Aenean eu leo lectus. Phasellus interdum elit nec vestibulum convallis. Quisque gravida massa quis sapien pulvinar egestas. Etiam urna odio, pharetra eu elementum nec, accumsan eget mauris.

Etiam ipsum eros, suscipit sit amet nulla eu, commodo gravida ipsum. Cras vel consectetur felis. Quisque suscipit nibh non ipsum rutrum convallis. Vivamus vitae suscipit mauris. Nullam lorem ante, posuere quis ligula eget, commodo ornare neque. Aliquam condimentum, ante nec rutrum ultricies, ipsum arcu luctus leo, eget viverra eros velit non lacus. Aenean massa lectus, euismod non risus at, aliquet feugiat sapien. Praesent blandit leo a nisi consectetur, a imperdiet neque tristique. Curabitur blandit interdum convallis. Nullam vehicula elit a consectetur euismod.`

let numOfWords = someText.split(" ").length;

for (let i = 0; i <= numOfWords; i++) {
 console.log(i);
}

console.log(`The text has ${numOfWords} words`)