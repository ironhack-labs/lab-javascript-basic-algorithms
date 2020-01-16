// Iteration 1: Names and Input
console.log("\n--- ITERATION 1 ---\n")

let hacker1 = "Paco"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Ramon"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
console.log("\n--- ITERATION 2 ---\n")

let hacker1Length = hacker1.length
let hacker2Length = hacker2.length

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
} else if (hacker1Length < hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}

// Iteration 3: Loops
//3.1
console.log("\n--- ITERATION 3 ---\n")
let hacker1arr = hacker1.split('');
hacker1Result = hacker1arr.join(' ').toUpperCase()
console.log(hacker1Result)

//3.2
let hacker2arr = hacker2.split('')
hacker2Result = hacker2arr.reverse().join('')
console.log(hacker2Result)


//3.3
let hackers = [hacker1, hacker2]
hackers.sort()
if (hackers[0] == hacker1) {
    console.log("The driver's name goes first.")
} else if (hackers[0] == hacker2) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// BONUS 1
console.log("\n--- BONUS 1 ---\n")

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui nunc, luctus non vestibulum commodo, condimentum sed massa. Nullam imperdiet tellus id neque condimentum tincidunt. Etiam interdum quam enim, ac placerat dolor imperdiet in. Fusce massa lectus, iaculis sit amet vehicula a, aliquam dapibus ante. Phasellus auctor pulvinar turpis. Morbi maximus maximus diam sed bibendum. Duis tincidunt ultricies justo quis vulputate. Aliquam pretium tortor non eros gravida commodo. Integer pulvinar, nunc sit amet mattis ullamcorper, lacus lorem pretium leo, sit amet ultrices velit nulla vitae velit. Vestibulum sagittis nisl eget ante lacinia vulputate. Morbi scelerisque vestibulum mi, vel pellentesque massa fermentum ut. In sagittis sagittis felis in consequat. Curabitur et massa eu ex elementum venenatis non vitae purus. Cra quis egestas nisi. Aenean neque magna, facilisis quis tortor at, auctor dapibus dui. Nullam a ante non lorem blandit eleifend. Nulla in libero dapibus, vehicula augue at, hendrerit justo. Donec pellentesque scelerisque mollis. Maecenas fermentum aliquet elit vehicula consectetur. Aenean hendrerit pretium lacus, id laoreet nisi semper nec. Nunc tellus justo, sagittis eget iaculis eu, eleifend et mi. Duis facilisis pharetra elit, non condimentum orci volutpat nec. Donec ipsum urna, bibendum eget nisl sed, rhoncus porttitor magna. Sed dignissim tempus interdum. Nullam diam metus, molestie varius nisi sit amet, condimentum vestibulum diam. Nam felis magna, consequat ac laoreet at, interdum vel est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultricies nisl rhoncus ultrices molestie. Quisque commodo porttitor laoreet. Vivamus efficitur eget purus vel blandit. Fusce venenatis ac ex in posuere. Duis vitae enim ipsum. Sed non dolor pellentesque, egestas massa non, tempus ex. In lobortis sodales nibh porta viverra."

loremArr = lorem.split(' ')
console.log(loremArr.length)

let loremEt = lorem.split('et')
console.log(loremEt.length - 1)

// BONUS 2
console.log("\n--- BONUS 2 ---\n")

let phraseToCheck = "abbadsds"

let phraseToCheckArr = phraseToCheck.split('')
console.log(phraseToCheckArr)

let counter = 0;

for (let i = 0; i < phraseToCheckArr.length; i++) {
    let a = phraseToCheckArr[i]

    for (let j = phraseToCheckArr.length - 1; j >= 0; j--) {
        if (counter != 0) {
            j -= counter
        }
        let b = phraseToCheckArr[j]
        if (a == b) {
            counter++
            break
        } else {
            break

        }
    }

}

if (phraseToCheckArr.length == counter) {
    console.log("It's a Palindrome" + counter);
} else {
    console.log("It isn't a Palindrome");
}