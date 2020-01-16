// Iteration 1: Names and Input
let hacker1 = 'Juan'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Chrome'
console.log(`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals



if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally  long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops

let result = "";
for (i = 0; i < hacker1.length; i++) {
    let letra = hacker1[i].toUpperCase()
    result = result + letra + " "
}
console.log(result)

let result2 = ""

for (i = hacker2.length - 1; i >= 0; i--) {
    let letra2 = hacker2[i]

    result2 = result2 + letra2
}

console.log(result2)

//-----BONUS-----

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta vestibulum augue, sed pharetra est malesuada sed. Phasellus non varius quam, sit amet finibus velit. Aliquam congue tristique augue, eget aliquam nisl porttitor id. Morbi semper egestas vulputate. Nulla ac turpis tincidunt, commodo odio in, efficitur odio. Etiam dignissim libero risus. Quisque enim nisl, gravida quis rhoncus in, suscipit ut nisl. Pellentesque euismod vehicula mi. Sed ac est vitae mauris laoreet varius. Etiam nisl est, dictum id augue vitae, tempor tempor risus. Quisque lobortis semper est, id ultrices sapien sodales a. Praesent dictum eros varius mi eleifend, ac ullamcorper lacus congue. Duis mollis augue vestibulum finibus rhoncus. Donec eget justo a eros porttitor placerat in vitae sem. Donec ultrices at risus quis pellentesque.

Quisque cursus, sapien vel pellentesque rhoncus, urna leo vestibulum orci, eu auctor quam enim nec ipsum. Suspendisse placerat ex nibh, ut pulvinar purus viverra vel. Duis porta felis at turpis finibus sollicitudin. Morbi maximus eleifend viverra. Suspendisse sed commodo massa. Suspendisse eget massa semper, congue diam sed, sodales dui. Integer eget euismod nibh, non accumsan mauris. Phasellus in nulla at felis maximus luctus quis vitae nunc. Nam at porta nunc. Donec scelerisque mi ac rutrum vehicula. Nullam ut facilisis sapien, id ultricies leo.

Quisque lectus turpis, euismod id lectus non, venenatis interdum dui. Nam nibh nunc, egestas a augue vel, condimentum ornare ex. Sed vestibulum pulvinar sem eu hendrerit. Vestibulum ut vestibulum neque. Praesent non dapibus nibh. Sed cursus nec ex id ornare. Suspendisse quis mattis sem. Quisque pretium, metus feugiat laoreet varius, velit nunc condimentum orci, vel fringilla dui tortor at massa. Proin volutpat aliquet ante id placerat. Donec metus nisl, consectetur vel molestie et, pulvinar at sapien. In sollicitudin ligula in mauris interdum, quis imperdiet erat cursus. Fusce placerat, mi nec vehicula cursus, magna neque volutpat dui, id aliquam mauris ligula at diam. Proin feugiat venenatis eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`


// console.log(lorem.split(" "))
let palabras = lorem.split(" ")
console.log(palabras.length)