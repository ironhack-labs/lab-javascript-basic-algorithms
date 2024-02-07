// Iteration 1: Names and Input
const hacker1 = "Jose"
console.log(`The driver's name is ${hacker1}` )
const hacker2 = "Valentina"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
driverLength = hacker1.length
navigatorLength = hacker2.length

if (driverLength > navigatorLength) {
    console.log(`The drive has the longest name, it has ${driverLength} characters.`);
} 
else if (driverLength < navigatorLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${driverLength} characters!`)
}

// Iteration 3: Loops
navigatorLength = hacker2.length
driverLength = hacker1.length
let driverUp = "";

capitalDriver = hacker1.toUpperCase()
for (let i = 0; i < driverLength; i++) {
    driverUp += capitalDriver[i] + " ";
}
console.log(driverUp)

let navReverse = "";
for (let i = navigatorLength -1; i >= 0; i--) {
    navReverse += hacker2[i]
}
console.log(navReverse)


if (driverUp.localeCompare(navReverse) === 1) {
    console.log("Yo, the navigator goes first, definitely.");
}
else if (driverUp.localeCompare(navReverse) === -1) {
    console.log("The driver's name goes first.");
}
else {
    console.log("What?! You both have the same name?")
}

//BONUS 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis, sapien quis scelerisque pharetra, nulla nunc pulvinar tellus, sed convallis felis libero ut augue. Aenean rhoncus eros eget libero semper rhoncus. Curabitur rhoncus magna eget augue dictum, eleifend semper lectus congue. Sed ut imperdiet augue. Ut tempor sit amet ante et aliquam. Morbi urna nunc, feugiat ut velit in, fermentum commodo tortor. Etiam rutrum enim tempor sapien rhoncus volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor hendrerit eros, sed congue magna iaculis in. Phasellus laoreet viverra nunc. Nulla eget mattis dui.

Sed malesuada posuere bibendum. Suspendisse pellentesque enim in nibh malesuada vehicula. Fusce consectetur ac nulla tincidunt consectetur. Fusce convallis dictum consectetur. Donec porta mi id tellus commodo, a consectetur massa facilisis. Suspendisse sed libero mollis, ultrices enim vel, placerat leo. In rutrum arcu id massa porta, ac luctus libero pulvinar. Quisque mollis sem vel enim dictum, eu finibus lorem hendrerit. Quisque faucibus enim ante, at malesuada libero rutrum eget. Donec sodales, leo non hendrerit tincidunt, dolor velit mollis enim, id tempor leo arcu quis massa. In molestie nibh erat, ac ultrices neque sollicitudin in. Nunc sed rutrum diam. Morbi euismod diam a leo finibus commodo quis suscipit nisl. Proin fermentum ipsum sed egestas posuere. Ut consectetur mauris faucibus ipsum ullamcorper, eget sagittis leo egestas.

Nulla facilisi. Nam euismod tincidunt libero, quis accumsan diam tincidunt id. Ut scelerisque risus sed consequat euismod. Ut eget lorem luctus, aliquet ipsum a, porttitor magna. Vestibulum ipsum risus, finibus et molestie vel, tempor in nulla. In posuere pellentesque hendrerit. Quisque pharetra congue risus, ut luctus dolor sollicitudin a. Fusce et urna ipsum.`

let wordCount = 3 //To count first word of each paragraph.
let etCount = 0
for (i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        wordCount += 1
    }
    else if (longText[i - 1] + longText[i] + longText[i + 1] + longText[i + 2] === " et ") {
        etCount += 1
    }
}

console.log(`Total word count is ${wordCount}`)
console.log(`Total et count is ${etCount}`)