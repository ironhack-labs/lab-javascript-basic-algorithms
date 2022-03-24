






// Iteration 1: Names and Input

let hacker1 = "Arturo"
console.log("the driver's name is", hacker1)


let hacker2 = "Pablo"
console.log("the navigator's name is", hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("the driver has the longest name, it has", hacker1.length, "characters")
} else if (hacker2.length > hacker1.length) {
    console.log("it seems that the navigator has the longest name, it has", hacker2.length, "characters")
} else {
    console.log("Wow, you both have equally long names", hacker1.length, "characters")
}

// Iteration 3: Loops

let upperDriver = ""

for (i = 0; i < hacker1.length; i++) {

    upperDriver += hacker1.charAt(i)
    upperDriver += " "
}
console.log(upperDriver.toUpperCase())

//3.2

let reverseNav = ""

for (i = hacker2.length; i >= 0; i--) {

    reverseNav += hacker2.charAt(i)
}
console.log(reverseNav)

//3.3

let names = [hacker1, hacker2]
names.sort()
if (names[0] === names[1]) {
    console.log("What?! You both have the same name?")
} else if (names[0] === hacker2) {
    console.log("Yo, the navigator goes first definetly")
} else {
    console.log("The driver's name go first")
}

//Bonus 1

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum erat id mauris elementum dignissim. Duis at malesuada nunc, nec tempus libero. Pellentesque hendrerit tincidunt lectus, id dictum magna rutrum quis. Vivamus in posuere orci. Fusce laoreet libero neque, id sodales tellus euismod quis. Integer nec magna nisi. Aenean sapien nulla, interdum at quam vel, blandit venenatis augue. Maecenas eu elit enim. Proin id dictum diam, sit amet dictum leo. Donec eu tortor vel ligula molestie varius eu eget leo. Phasellus id eros odio. Nullam vel fermentum ipsum. Aenean tincidunt neque tortor, vel cursus risus hendrerit a. Aliquam nunc leo, suscipit quis pellentesque vitae, interdum vel justo. Maecenas tincidunt malesuada consequat. Proin dignissim imperdiet lacus, sit amet dapibus orci. Ut pulvinar faucibus purus non eleifend. Sed blandit neque a posuere lobortis. Quisque lobortis pretium arcu quis gravida. Fusce feugiat dui eu nisi dignissim, eget luctus lorem luctus. Etiam bibendum nunc ac est malesuada dapibus. Sed et sagittis eros. Maecenas elementum quis nulla et laoreet. Nam pellentesque iaculis hendrerit. Aliquam viverra imperdiet augue. In a porttitor nulla, quis elementum magna."

let nWords = 1
for (i = 0; i < lorem.length; i++) {
    if (lorem[i] === " ") {
        nWords += 1;
    }
}

console.log(nWords)


//Bonus 2



let phraseToCheck = "taco cat"

phraseToCheck = phraseToCheck.replace(" ", "")



let reversePhrase = phraseToCheck.split("").reverse().join("")
if (phraseToCheck === reversePhrase) {
    console.log("es palindromo")
}
else {
    console.log("no es palindromo")
}

