// Iteration 1: Names and Input
let hacker1 = prompt("driver's name")
console.log("the driver's name is", hacker1)
let hacker2 = prompt("navigator's name")
console.log("the navigator's name is", hacker2)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has ", hacker1.length, " characters")
}
else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has ", hacker1.length, " characters")
}
else {
    console.log("Wow, you both have equally long names,", hacker1.length, " characters!")
}

// Iteration 3: Loops
for (let i = 0; i < hacker1.length - 1; i++) {
    let letter = hacker1.charAt(i)
    let letterUpperCase = letter.toUpperCase(i)
    console.log(letterUpperCase, " ")
}
let lastLetter = hacker1[hacker1.length - 1]
let upperCase = lastLetter.toUpperCase(0)
console.log(upperCase)

for (i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2.charAt(i))
}

if (hacker1.charAt(0) < hacker2.charAt(0)) {
    console.log("The driver's name goes first")
}
else if (hacker1.charAt(0) > hacker2.charAt(0)) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
}

// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam libero, cursus at tellus vitae, finibus tincidunt turpis. Aliquam tempus, tortor ac feugiat gravida, odio nisl laoreet nunc, vel malesuada magna dolor eget nisl. In dignissim nunc elit. Duis neque tortor, condimentum eget vulputate at, molestie sed ligula. Curabitur molestie ut neque sed venenatis. Nullam nulla sem, commodo quis posuere eu, maximus lacinia velit. Sed sed odio leo. Sed in velit eleifend, feugiat ante id, aliquet leo. In porttitor justo nisi, nec gravida mi tincidunt eu. Donec in lacinia turpis, a pretium enim. Duis sit amet blandit risus. Cras ultrices enim non tincidunt pretium. Integer eu metus a elit lobortis aliquet nec eget nibh. Integer vel urna eleifend, mattis quam non, finibus enim. Duis elementum egestas nisl, non bibendum erat hendrerit vitae. Sed imperdiet, lorem auctor mattis dictum, turpis quam tristique ex, eu convallis mauris tellus ut arcu. In non neque venenatis, sagittis nisi et, aliquet est. Maecenas ac felis mollis, faucibus sem non, rutrum elit. Nullam faucibus est sed eros viverra hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non semper diam, a malesuada eros. Vestibulum fermentum, enim ut hendrerit ornare, risus dui suscipit risus, sed interdum erat mauris at odio. In mollis rhoncus ultricies. Integer massa arcu, semper et erat sed, dignissim viverra augue. Nam vestibulum felis ac justo accumsan, in volutpat mauris tempor. Quisque faucibus eros sit amet sapien pharetra maximus. Sed at libero sit amet purus tempus egestas id nec magna. Nulla facilisi. Curabitur egestas tristique nunc, eu efficitur eros ullamcorper non. Donec quis sem sapien. Mauris orci lacus, ullamcorper eu venenatis quis, lacinia a diam. Nulla facilisi. Curabitur fermentum urna et leo vulputate, ut iaculis sem cursus. Integer vehicula laoreet felis, sed tincidunt est mattis eu. Nulla vehicula placerat sodales. Sed dapibus mi in orci tempor, ut commodo diam laoreet."

let arr = longText.split(" ")
console.log(arr.length)

// Bonus 2
