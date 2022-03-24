// ### Iteration 1: Names and Input

// 	1.1 Create a variable `hacker1` with the driver's name.

// 	1.2 Print `"The driver's name is XXXX"`.

//   	1.3 Create a variable `hacker2` with the navigator's name.

//   	1.4 Print `"The navigator's name is YYYY"`.

let driver = "Maximo"
console.log("The driver's name is", driver)

let navigator = "Pablo"
console.log("The navigator's name is", navigator)




// ### Iteration 2: Conditionals
//   2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
//   <br>
// 	  - `The driver has the longest name, it has XX characters.` or <br>
// 	  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
// 	  - `Wow, you both have equally long names, XX characters!`.
if (driver.length > navigator.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters.`)
} else if (navigator.length > driver.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters`)
} else if (driver.length === navigator.length) {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
}


// ### Iteration 3: Loops
//   3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
//   i.e. `"J O H N"`

//   3.2 Print all the characters of the navigator's name, in reverse order. 
//   i.e. `"nhoJ"`

//   3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
//     - `The driver's name goes first.` <br>
//     - `Yo, the navigator goes first definitely.` <br>
//     - `What?! You both have the same name?`


for (let i = 0; i < driver.length; i++) {
    console.log(driver[i].toUpperCase())
    if (i === driver.length - 1) {
        break
    }
    console.log("")
}

for (let i = navigator.length - 1; i >= 0; i--) {
    console.log(navigator[i])
}

if (driver.localeCompare(navigator) === -1) {
    console.log(`The driver's name goes first.`)
} else if (driver.localeCompare(navigator) === 1) {
    console.log(`Yo, the navigator goes first definitely.`)
} else if (driver.localeCompare(navigator) === 0) {
    console.log(`What?! You both have the same name?`)
}

console.log(driver.localeCompare(navigator))


// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops


// ### Bonus Time!

//     ####Bonus 1:
//     Go to lorem ipsum generator](http: //www.lipsum.com/) and:
//         -Generate 3 paragraphs.Store the text in a variable type of string. -
//         Make your program count the number of words in the string. -
//         Make your program count the number of times the Latin word[`et`](https: //en.wiktionary.org/wiki/et#Latin) appears.

let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac quam elit. Proin ut tincidunt ligula, ac fermentum sapien. Pellentesque facilisis condimentum tincidunt. Proin sed aliquam ex. Curabitur luctus sapien eu urna pellentesque mollis. Praesent in nibh rhoncus augue tincidunt egestas sit amet sit amet ligula. Nunc porta fermentum ex sit amet vestibulum. Mauris at cursus dolor. Sed non aliquam lectus, vel interdum diam. In ac lorem et urna facilisis facilisis ac et massa. Vestibulum ut nisi ex. Curabitur ullamcorper leo convallis, efficitur dui eget, sodales risus. Praesent sagittis libero et libero elementum, quis gravida erat feugiat. Mauris malesuada dui ac lacus semper, eu elementum elit tristique. Praesent feugiat justo ac commodo fermentum. Sed fermentum iaculis porta.

Curabitur euismod malesuada mauris, id interdum risus vestibulum nec. Phasellus facilisis ultricies urna, sed pretium massa congue eu. Aliquam hendrerit enim at ante tempor accumsan. Proin a venenatis enim. Mauris iaculis mauris et ornare dignissim. Sed tincidunt non lorem vitae posuere. Suspendisse in risus eget mi interdum tristique. Cras condimentum nisl nec nisl eleifend lacinia. Donec euismod diam et erat vestibulum volutpat.

In rhoncus accumsan metus id interdum. Quisque ut interdum leo. Sed efficitur arcu vel quam scelerisque, sed suscipit arcu egestas. Vivamus non risus elementum, posuere nisl ac, mollis ligula. Ut vehicula nulla et justo varius, gravida condimentum risus accumsan. Integer fringilla sit amet orci vel tempor. Mauris nec leo velit. Suspendisse interdum nisl eget volutpat tincidunt. Proin in ex fringilla, tempor felis ac, convallis odio. Pellentesque sagittis mauris a ultricies fermentum. Morbi euismod, odio non egestas hendrerit, elit ante sagittis nisi, ac viverra erat elit vel quam. Integer tempus sem id massa tempor pharetra. Maecenas eget dui ornare, tempus arcu at, pharetra felis. Sed vitae lacus ac mauris volutpat consequat. In congue mauris ut turpis fringilla pellentesque id quis mauris. Duis quis blandit nulla.`

console.log(paragraphs.split(" ").length)
console.log(paragraphs.split("et").length - 1)


//             ####Bonus 2:
//             Create a new variable `phraseToCheck`
//             and have it contain some string value.Write a code that will check
//             if the value we assigned to this variable is a[Palindrome](https: //en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 
//                 -"A man, a plan, a canal, Panama!" -
//                 "Amor, Roma" -
//                 "race car" -
//                 "stack cats" -
//                 "step on no pets" -
//                 "taco cat" -
//                 "put it up" -
//                 "Was it a car or a cat I saw?"
//                 and "No 'x' in Nixon".


let phraseToCheck = "A man, a plan, a canal, Panama!"

function palindrome(str) {
    const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g)

    return alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('')
}



console.log(palindrome(phraseToCheck))