// Iteration 1: Names and Input
let hacker1 = "Fernando"
console.log(`The driver´s name is ${hacker1}`)
let hacker2 = "Nerea"
console.log(`The navigator's name is ${hacker2}`)
// 
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
console.log(`It seems that the navigator has the longest name, it has  ${hacker2.length} characters.` )
} else {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) 
}
// Iteration 3: Loops
// 3.1
let separatedName = "";
for (let i = 0; i < hacker1.length; i++) {
    separatedName = `${separatedName.concat(hacker1[i].toUpperCase())} `
}
console.log(separatedName)
// 3.2
let reverseSeparatedName = ""

for (let i = (hacker1.length - 1); i >= 0; i--) {
    reverseSeparatedName = `${reverseSeparatedName.concat(hacker1[i].toUpperCase())} `

}
console.log(reverseSeparatedName)
// 3.3
let minLength = 0
if (hacker1.length >= hacker2.length) {
    minLength = hacker1.length
} else {
    minLength = hacker2.length
    
}
for (let i = 0; i < minLength ; i++) {
    if (hacker1.toLowerCase()[i] < hacker2.toLowerCase()[i]) {
        console.log("The driver's name goes first.")
        break
    } else if (hacker2.toLowerCase()[i] < hacker1.toLowerCase()[i]) {
        console.log("Yo, the navigator goes first definitely.")
        break
    } else if (hacker1.toLowerCase()[i] === hacker2.toLowerCase()[i]) {
        console.log("What?! You both have the same name?")
    }
}

// Bonus 1

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a tempus nibh. Quisque hendrerit ultricies urna, nec blandit felis hendrerit at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent auctor massa vitae aliquam cursus. Vivamus sollicitudin ipsum nulla, a convallis libero lacinia vitae. Nunc lobortis ligula lacus. Quisque aliquam massa ut neque malesuada, a vestibulum ante sollicitudin. In tincidunt, massa vel facilisis commodo, velit lectus condimentum neque, eu consequat elit lacus et ex. Phasellus nisl ex, tincidunt quis dictum in, volutpat at diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc rhoncus nulla sed finibus suscipit. Curabitur euismod sem ante, sit amet tempus orci auctor vel. Curabitur hendrerit justo id neque consectetur, in vulputate turpis iaculis. Cras id dui quis erat ullamcorper consequat sit amet eget mi. Phasellus pellentesque dictum est a venenatis. Nunc sodales posuere magna eget placerat. Proin sodales egestas arcu, at cursus enim pulvinar ac. Phasellus felis ipsum, suscipit et tincidunt in, imperdiet vitae massa. Donec euismod posuere magna, eget viverra urna mollis rutrum. Nunc nulla dui, placerat at erat quis, aliquet luctus massa. Integer posuere, sapien ut vehicula aliquam, urna massa dapibus justo, vel pretium eros mauris at lorem. Pellentesque fermentum tempus aliquam. Vestibulum posuere posuere volutpat. Fusce vel placerat justo, vel finibus neque. Proin at varius ipsum, non pretium neque. Nulla vestibulum ultricies pretium. Vivamus accumsan neque sit amet scelerisque aliquet. Nunc sagittis vulputate diam, aliquet elementum leo tincidunt volutpat. Nulla condimentum felis quis felis bibendum, tristique posuere risus pharetra. Vestibulum efficitur nisl tristique bibendum hendrerit. Etiam a sodales diam, nec semper libero. Nullam lacinia odio mauris, quis facilisis mauris placerat non. Duis vel eros congue, consequat ante eu, varius nisi. Phasellus sagittis mollis posuere. Fusce ut arcu lectus. Maecenas vulputate neque lacus, at tincidunt neque mattis in. Vestibulum tempus, nisi vitae sodales fringilla, neque lacus pulvinar urna, et bibendum dolor nisl sed dolor."

let loremIpsumLength = loremIpsum.split(" ").length
console.log(loremIpsumLength)
let etOccurrence = loremIpsum.split("et").length
console.log(etOccurrence)
// Bonus 2