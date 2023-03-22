// Iteration 1: Names and Input

let hacker1 = "Lukas"
console.log("The driver's name is " + hacker1)

let hacker2 = "Matthias"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let newString = ""
for(let i = 0; i < hacker1.length; i++) { 
    newString += hacker1[i].toUpperCase() + " "
}
console.log(newString)

let reverseString = ""
for(let i = hacker2.length-1; i >= 0; i--) {
    reverseString += hacker2[i]
}
console.log(reverseString)

let compareStrings = hacker1.localeCompare(hacker2)

if(compareStrings === -1) {
    console.log("The driver's name goes first.")
}
else if(compareStrings === 1) {
    console.log("Yo, the navigator goes first, definitely.")
}
else if(compareStrings === 0) {
    console.log("What?! You both have the same name?")
}

// Bonus

let longText = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis pellentesque arcu. Fusce sed porta felis. Nunc neque mi, ultricies at metus sit amet, fringilla efficitur est. Duis ut purus ultrices, hendrerit libero vel, facilisis tortor. Mauris maximus ultrices nibh non cursus. Etiam condimentum ante eu tellus congue accumsan. Sed sodales ex ligula, sit amet tristique massa egestas non. In eu condimentum urna. Suspendisse placerat lacinia dapibus. Nam vel sodales nibh, ut aliquet nulla. Suspendisse lobortis imperdiet velit, at varius magna tincidunt et. Morbi sapien mi, ultrices eget faucibus vel, faucibus eget sem. Praesent et vulputate lorem. In non ante non lectus tempus iaculis. Nulla pellentesque, nunc et dictum pharetra, diam urna auctor mauris, sit amet finibus nisi erat nec metus.

Integer porttitor tincidunt augue, ac scelerisque risus dapibus quis. Sed nec euismod est. Quisque feugiat libero non mi facilisis, hendrerit hendrerit nunc vehicula. Sed fermentum ullamcorper efficitur. Sed justo nulla, placerat at finibus a, tempor non nunc. Nunc id pharetra eros, sit amet molestie lectus. Duis pellentesque augue vitae sapien congue mollis pretium vitae nibh. Nam pretium tortor eget sem ullamcorper, eu mollis erat pretium. Nullam gravida efficitur leo ac rhoncus. Nunc hendrerit tellus vitae sem imperdiet, at venenatis sapien condimentum. Donec tincidunt elit eu arcu varius, at feugiat eros scelerisque.

Proin egestas elit id congue aliquam. Aenean facilisis turpis tellus, a gravida mauris aliquam in. Phasellus vitae interdum justo. Duis volutpat mollis diam, vitae efficitur libero elementum nec. Donec ligula tortor, porta vel rhoncus et, euismod vitae lacus. Etiam auctor dui ante, quis cursus enim sodales imperdiet. Mauris in lacus non enim mattis gravida nec at quam.`

let wordCount = 0
for(let i = 0; i < longText.length; i++) {
    if(longText.charAt(i) === " " || longText.charAt(i) === "" || longText.charAt(i) === "  ") {
        wordCount += 1
    }
}
console.log(wordCount)

// Bonus 2

let phraseToCheck = "Bonjour, Madame!"
let Palindrome
for(let i = phraseToCheck.length-1; i >= 0; i--) {
}



