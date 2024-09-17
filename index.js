// Iteration 1: Names and Input

const hacker1 = 'Manolo'
console.log("The driver's name is", hacker1)
const hacker2 = 'Pepe'
console.log("The navigator's name is", hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has', hacker1.length, 'characters.')
} else if (hacker1.length < hacker2.length) {
    console.log('The navigator has the longest name, it has', hacker2.length, 'characters.')
} else {
    console.log('Wow, you both have equally long names,', hacker1.length, 'characters.')
}

// Iteration 3: Loops

let result = ''

for (let i = 0; i < hacker1.length; i++) {
    result = result + hacker1[i].toUpperCase() + ' '
}

console.log(result)

let secondResult = ''

for (let i = hacker2.length - 1; i >= 0; i--) {
    secondResult = secondResult + hacker2[i]
}

console.log(secondResult)

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}

//BONUS 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis tellus et arcu mattis varius sit amet nec nunc. Praesent a facilisis lorem. Aliquam ornare at tellus ac sollicitudin. Morbi augue nisi, ullamcorper non tincidunt ut, dapibus sed lectus. Suspendisse sit amet scelerisque leo. Sed sodales quam ipsum, id tristique quam ornare vel. Ut orci mauris, consequat quis velit sit amet, rutrum consequat ligula. Suspendisse gravida ipsum sem, ac condimentum tortor blandit sit amet. Phasellus varius ligula quis odio hendrerit hendrerit. Curabitur diam nulla, venenatis at ex vitae, vehicula placerat ex.

Sed elementum enim neque, et dictum elit efficitur sed. Integer molestie erat risus, non iaculis nisi maximus ut. Cras lobortis luctus ligula, sed vehicula dolor rhoncus sed. Etiam malesuada leo sit amet ex imperdiet luctus. Donec sollicitudin mollis dictum. Sed eget gravida tellus. Nulla nec efficitur risus. Curabitur auctor elementum dui eu aliquet. Phasellus iaculis posuere libero, sit amet commodo ipsum posuere id. In non facilisis neque. Pellentesque pellentesque elementum consectetur. Phasellus facilisis aliquet felis quis tristique. Etiam malesuada quis nisi vitae iaculis. Cras condimentum lorem sed sodales vestibulum. Proin et ante volutpat felis mollis auctor ac nec odio. Integer id aliquam tellus.

Vivamus aliquet risus est, aliquet posuere tortor posuere eu. Integer in fermentum velit. Sed dui turpis, elementum ut luctus sit amet, maximus sed urna. Phasellus aliquam arcu et dolor porta hendrerit. Etiam elementum eu velit eget condimentum. Phasellus consectetur feugiat nisl ut volutpat. In laoreet mi rhoncus, varius lectus vel, suscipit purus.`

let resultBonus = 1
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === ' ') {
        resultBonus++
    }
}
console.log(resultBonus)

let etCounter = 0

for (let i = 0; i < longText.length; i++) {
    let tempEt = longText.substring(i, i + 4)
    if (tempEt === ' et ') {
        etCounter++
    }
}

console.log(etCounter)