
// Iteration 1: Names and Input

let hacker1 = "Julian"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Yaiza"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
 if (hacker1.length > hacker2.length) {
   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
 } else if (hacker2.length > hacker1.length){
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
 } else {
   console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
 }

// Iteration 3: Loops
// IT 3.1
let separatedUpperCase = hacker1.split('').join(' ').toUpperCase()

// IT 3.2
let nameReverse = hacker2.split('').reverse().join('')

// IT 3.3
let orderNames = [hacker1, hacker2]
let newOrder = orderNames.sort()
console.log(newOrder)
if (newOrder[0] === newOrder[1]) {
  console.log (`What?! You both have the same name?`)
} else if (newOrder[0] === hacker1) {
  console.log (`The driver's name goes first.`)
} else {
  console.log (`Yo, the navigator goes first definitely.`)
}


const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum, metus at consequat porttitor, odio dolor tempus ante, id hendrerit metus sem facilisis est. Nulla id elementum nibh, sed hendrerit ligula. Sed tempor mi eget pellentesque vestibulum. Suspendisse eu ultricies dolor, quis sodales nunc. Nunc a efficitur augue. In posuere volutpat quam, sed lobortis diam tempus at. Aliquam venenatis nisl magna, quis semper turpis fringilla eu. Curabitur varius sed enim et fringilla. Suspendisse potenti. Mauris sit amet suscipit odio, id aliquam turpis. Fusce maximus velit quis vulputate elementum. Donec pellentesque vel lectus in dapibus. Duis vel libero ipsum. Nam suscipit leo massa, dapibus ultricies augue dapibus ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in tortor nec augue efficitur facilisis. Praesent semper sapien magna, sit amet gravida purus eleifend ut. Ut vel venenatis lorem, a sollicitudin metus. Nulla commodo, dui at consequat lacinia, mauris sapien condimentum velit, ac hendrerit nisl justo ac nisl. Morbi quis dolor libero. Vestibulum nec diam non eros vehicula consectetur. Nulla mi quam, accumsan sit amet laoreet sed, malesuada vel felis. Aenean sed consectetur massa, a pharetra massa. Mauris vel lacus diam. Ut porttitor erat eleifend odio posuere faucibus tristique quis sapien.Donec eleifend lacus non eros mattis pulvinar sed ac nisi. Donec elit massa, porta lobortis porttitor ac, porttitor et nunc. Maecenas placerat finibus sem sit amet congue. Fusce scelerisque placerat mauris a porta. Maecenas bibendum ligula purus. Etiam rhoncus nisl varius eros porta, et tincidunt quam pretium. Nullam hendrerit odio nec dui ornare, eget hendrerit ipsum blandit. Nullam pulvinar lectus dui, sit amet cursus est ultricies vel. Duis rutrum pulvinar sem, vitae fermentum felis convallis at. Vestibulum mollis, nisi eu convallis vehicula, sapien purus bibendum purus, sit amet fringilla magna quam at mi. Nam nec dolor nec diam fringilla maximus et at elit. Nunc congue dictum pellentesque. Nulla tristique fermentum diam, at fermentum eros rhoncus ac.'

let numberWordCount = lorem.split(' ').length
console.log(numberWordCount)

let numerEt = lorem.split('et').length
console.log(`Serán ${numerEt} veces. No me voy a poner a contarlas. LOL`)

// Bonus 2

let phraseToCheck = " "

function check(phraseToCheck){

    let str1 = phraseToCheck.split('').join('')
    let str2 = phraseToCheck.reverse().split().join('')

    if (str1 === str2){
    console.log(`${phraseToCheck} es un palíndromo`)
    }else {
    console.log("NO LO ES")
    }
}

check('amor')