// Iteration 1: Names and Input
let hacker1 = “Miguel”
    console.log(`the driver´s name is ${hacker1}`)
let hacker2 = “Guille”
    console.log(`the navigator’s name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
//Iteration 3.2
let newString = ""
for (let i = hacker1.length - 1; i >= 0; i--) {
    newString += hacker1[i]
    newString + hacker1[i]
}
console.log(newString)
//Iteration 3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
}
//Bonus 1
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non pulvinar magna, eu condimentum nisi. Donec faucibus, nulla sit amet fringilla pulvinar, arcu sapien tempor sapien, vitae tempor augue diam vel nulla. Morbi sit amet tincidunt enim. Sed ut turpis purus. 
Cras non sem eu enim volutpat venenatis vel quis nisi. Sed a velit id purus sollicitudin ornare. Aliquam lorem lorem, condimentum aliquet metus non, blandit pellentesque risus. Cras pretium tortor ac eleifend facilisis. In vel cursus enim. Integer pretium lorem ac augue ornare finibus. Pellentesque ultrices elit neque, et consectetur nisi malesuada eget. Fusce in elit lectus. Etiam sed dapibus mauris. Aenean id velit at quam porttitor pellentesque. Aliquam molestie ullamcorper auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non pulvinar magna, eu condimentum nisi. Donec faucibus, nulla sit amet fringilla pulvinar, arcu sapien tempor sapien, vitae tempor augue diam vel nulla. Morbi sit amet tincidunt enim. Sed ut turpis purus. 
Cras non sem eu enim volutpat venenatis vel quis nisi. Sed a velit id purus sollicitudin ornare. Aliquam lorem lorem, condimentum aliquet metus non, blandit pellentesque risus. Cras pretium tortor ac eleifend facilisis. In vel cursus enim. Integer pretium lorem ac augue ornare finibus. Pellentesque ultrices elit neque, et consectetur nisi malesuada eget. Fusce in elit lectus. Etiam sed dapibus mauris. Aenean id velit at quam porttitor pellentesque. Aliquam molestie ullamcorper auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non pulvinar magna, eu condimentum nisi. Donec faucibus, nulla sit amet fringilla pulvinar, arcu sapien tempor sapien, vitae tempor augue diam vel nulla. Morbi sit amet tincidunt enim. Sed ut turpis purus. 
Cras non sem eu enim volutpat venenatis vel quis nisi. Sed a velit id purus sollicitudin ornare. Aliquam lorem lorem, condimentum aliquet metus non, blandit pellentesque risus. Cras pretium tortor ac eleifend facilisis. In vel cursus enim. Integer pretium lorem ac augue ornare finibus. Pellentesque ultrices elit neque, et consectetur nisi malesuada eget. Fusce in elit lectus. Etiam sed dapibus mauris. Aenean id velit at quam porttitor pellentesque. Aliquam molestie ullamcorper auctor`

let wordCounter = 0;

for (let i = 0; i < lorem.length; i++) {
    if (lorem.charAt(i) === " ") {
        wordCounter++
    }
}
console.log(`lorem tiene ${wordCounter} palabras`)
