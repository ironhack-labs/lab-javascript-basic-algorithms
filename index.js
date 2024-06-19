// Iteration 1: Names and Input
hacker1 = "Iñigo"
hacker2 = "Iván"

console.log("The driver's name is " + hacker1)
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let mayus = hacker1.toUpperCase();
let upper = "";
for (let i=0; i<mayus.length; i++){
    upper += mayus[i] + " "
}
console.log(upper)

let reverse = ""
for (let i=hacker1.length-1; i>=0; i--){
reverse += hacker1[i];
}
console.log(reverse)



if(hacker1 < hacker2){
    console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin imperdiet tincidunt. Nullam maximus commodo pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum, justo ut semper pharetra, elit odio auctor enim, sed interdum ligula odio vel neque. In vitae iaculis odio. Suspendisse sollicitudin tempus pellentesque. Nam nisl justo, cursus ut sagittis eu, elementum a orci. Suspendisse aliquam risus ipsum, id molestie orci vestibulum eu. Cras ornare ligula vitae ante maximus, ut venenatis orci commodo. Aliquam non pretium dui. Suspendisse sollicitudin ligula luctus vestibulum pharetra. Phasellus imperdiet congue enim eget imperdiet. Vivamus luctus dignissim feugiat. Quisque ultrices tincidunt placerat. Quisque dictum, risus in posuere convallis, urna dolor sollicitudin dui, sit amet ultrices neque purus non purus. Cras scelerisque tellus diam, tincidunt tincidunt mi mattis vitae. Sed elementum non risus eu dapibus. Etiam condimentum est non ex porta efficitur. Vivamus eleifend suscipit nisi tincidunt tristique. Duis dignissim, neque et efficitur tincidunt, sapien tellus porta turpis, ac tincidunt quam diam ut ex. Sed metus diam, suscipit vel vehicula vitae, interdum nec lectus. Mauris viverra dictum odio id imperdiet. Vivamus finibus ac sem vitae elementum. Mauris ultricies, augue sit amet auctor hendrerit, dui ligula varius nunc, nec finibus velit tortor non turpis. Donec sit amet placerat justo. Curabitur non ipsum lorem. Sed ac cursus ligula, sed rhoncus tellus. Phasellus id leo molestie, lacinia elit in, lobortis libero. Nulla auctor porttitor eros non placerat. Duis faucibus lacus at porta molestie. Praesent odio elit, finibus sit amet vehicula non, elementum consequat metus. Vivamus tempor diam turpis, a interdum mauris tempor at. Nulla facilisi. Donec quis placerat ipsum. Morbi eget eros sit amet erat scelerisque volutpat et nec mauris. Aenean congue nibh ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec consequat eu orci id pellentesque. Fusce euismod nulla at viverra blandit. Cras rutrum consectetur erat in laoreet."

console.log(longText.length)

let suma = 0
for (let i=0; i<longText.length; i++) {
    if(longText[i]=== "e" && longText[i + 1] === "t"){
        suma++
    }
}
console.log(suma)
