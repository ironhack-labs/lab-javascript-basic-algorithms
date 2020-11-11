// Iteration 1: Names and Input
let hacker1 = "Eduardo";
let hacker2 = "Mario";

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, XX characters!.`)
}
// Iteration 3: Loops
let hacker1upper = hacker1.toUpperCase().split("").join(" ")
console.log(hacker1upper)
let hacker2reverse = hacker2.split("").reverse().join("")
console.log(hacker2reverse)
if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}
//Bonus 1
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel faucibus tortor. Mauris sed lectus sed felis euismod pretium quis vel sem. Nulla aliquet mollis ex, sit amet sagittis est mattis nec. Vivamus sed leo tincidunt, efficitur purus a, tincidunt est. Donec tincidunt sem diam, non venenatis leo eleifend pretium. Aenean eleifend purus orci, vitae mattis nunc accumsan ac. Sed tempus tellus nec felis mollis fringilla. Aliquam rutrum eget tellus in porttitor.
Suspendisse hendrerit eros vitae semper sagittis. Aliquam posuere tristique lacus at blandit. Integer ac elit lacus. Nam scelerisque feugiat metus eget gravida. Pellentesque eu finibus velit, sit amet dictum velit. Morbi gravida ligula eu est tempor tincidunt. Pellentesque et tempus nulla, ut eleifend ligula. Nulla facilisi. Praesent nec finibus est. Nunc neque turpis, lobortis ac pharetra eu, pulvinar eu leo. Nam aliquam faucibus maximus. Suspendisse fermentum ante nec orci consectetur, ac feugiat orci tincidunt.
Vestibulum felis nibh, porttitor vitae velit a, interdum varius arcu. Proin ultricies magna vel erat lacinia, vel pulvinar dolor commodo. Sed mattis, nisl eget vestibulum imperdiet, diam ipsum porttitor diam, eget tempor velit ligula vel sem. Vestibulum id dignissim ipsum. Donec venenatis eu ipsum egestas tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque feugiat sem non enim sollicitudin rhoncus.`

console.log(loremIpsum.split(' ').length)

console.log(loremIpsum.split(' et ').length-1)