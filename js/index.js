// Iteration 1: Names and Input
//	1.1 Create a variable `hacker1` with the driver's name.

let hacker1= "Eric"


// 1.2 Print `"The driver's name is XXXX"`.

console.log(`"The driver's name is ${hacker1}"`)

// 	1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 ="Giacomo"

// 	1.4 Print `"The navigator's name is YYYY"`.

console.log(`"The navigator's name is ${hacker2}"`)

// Iteration 2: Conditionals
// 2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
//  <br>
//	  - `The driver has the longest name, it has XX characters.` or <br>
//	  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
//	  - `Wow, you both have equally long names, XX characters!`.

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}
// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
//i.e. `"J O H N"`

for (let string = 0; string < hacker1.length; string++){
    console.log(`${hacker1[string].toUpperCase()} \r`)
}
/* Trying to print the result as a line, instead of a column 
let hacker1Capital = ""
for (let string = 0; string < hacker1.length; string++){

    hacker1Capital[string] = hacker1[string.toUpperCase()] +  " "
    
}
*/

//3.2 Print all the characters of the navigator's name, in reverse order. 
//i.e. `"nhoJ"`

for (let string = hacker2.length-1; string >= 0; string--){
    console.log(`${hacker2[string]} `)
}

//3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
//  - `The driver's name goes first.` <br>
//  - `Yo, the navigator goes first definitely.` <br>
// - `What?! You both have the same name?`

if (hacker1===hacker2){
    console.log(`What?! You both have the same name?`)
} else{
    let hacker1GoesFirst = true
    for (let string = 0; string<hacker1.length; string++) {
        if(hacker1[string] > hacker2[string]){
        console.log(`Yo, the navigator goes first definitely.`)
        break
        }
    }
    if (!hacker1GoesFirst){
        console.log(`The driver's name goes first.`)
    }
    }

// Extra 1
// Creating the string
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu facilisis metus. Nullam non ante vel lacus blandit tempus id quis enim. Vestibulum augue diam, convallis eu tincidunt quis, maximus at augue. Aliquam venenatis, enim nec porttitor suscipit, diam nisi luctus augue, et vestibulum turpis eros sit amet mauris. Donec justo purus, interdum ut nisl in, luctus fermentum urna. Praesent tristique felis non est pharetra, a fringilla neque consequat. Fusce tellus nulla, fermentum sit amet erat a, commodo pellentesque velit. Cras venenatis, ipsum et eleifend pharetra, risus ex vulputate ex, et dignissim nulla sapien vitae sapien. Sed efficitur quis risus vel sollicitudin. Sed vitae efficitur mauris, id pellentesque ante. Integer iaculis nulla sed fringilla convallis. Etiam mollis purus quam, non posuere dolor fringilla eu. Praesent euismod sem ut cursus iaculis. Cras non quam accumsan, aliquet nisi at, lacinia leo. Donec et iaculis odio. Nunc ut dictum tortor. Nullam eget efficitur sem, varius finibus tellus. Etiam tempus nibh nulla, eu condimentum tellus tincidunt tempus. Aliquam id leo vitae odio commodo dictum. Aliquam faucibus scelerisque metus eget tincidunt. Morbi vehicula, mi ut ullamcorper blandit, magna quam sodales nisi, id vulputate ante erat eget lacus. Aliquam arcu lacus, mollis sed ante in, pretium convallis felis. Donec ex metus, tincidunt in risus id, accumsan maximus nisi. Proin suscipit sollicitudin tortor nec dignissim. Aliquam pellentesque sed dolor ut suscipit. Mauris fringilla, quam tempus condimentum porta, urna quam lobortis nisl, sit amet malesuada ante lacus quis velit. Vestibulum non varius mauris. Maecenas a faucibus dui. Morbi quis tristique arcu. Mauris euismod, augue sodales lacinia mollis, diam augue dignissim orci, at tempor ante dui in nisl. Donec mattis tincidunt pretium. Fusce finibus facilisis risus vel mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eu magna tincidunt, ultricies est non, tristique odio. Praesent nec dui vulputate, varius ligula sed, pulvinar lorem. Morbi scelerisque vitae purus sed cursus. Morbi pellentesque est a rhoncus ullamcorper.`

// counting the number of words
let countWords = 0
for (let i=0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === " "){
        countWords += 1;
    }
    
}
countWords +=1 ;
console.log(countWords)

//counting the number of et words
let countEts=0
let loremIpsumLowerCase = loremIpsum.toLowerCase()
for (let index = 0; index<loremIpsumLowerCase.length; index += 1) {
    if(loremIpsumLowerCase[index] === "e" && loremIpsumLowerCase[index+1] === "t" && loremIpsumLowerCase[index+2] === " " ) {
        countEts += 1;
    } 
}

console.log(countEts)

//Extra 2
// checking the palyndrome 
// declaring the palyndrome
let phraseToCheck= ""
// transforming the string into lower case
let phraseToLowerCase = phraseToCheck.toLowerCase()
// extracting punctuation signs from the string
let phraseWithoutPunctuation = phraseToLowerCase.replace(/[^\w\s\']|_/g, "")
// extracting whitespaces
let phraseWithoutWhitespaces = phraseWithoutPunctuation.replace(/\s/g,'') 
let palyndrom = false
// creating an index that points to the last position of the string in order to compare in the loop
let oppositeIndex = phraseWithoutWhitespaces.length-1
// checking pairs of letters to check if they're equal
for (let index=0; index < (phraseWithoutWhitespaces.length)/2; index += 1) {
    if (phraseWithoutWhitespaces[index] !== phraseWithoutWhitespaces[oppositeIndex-index]){
        palyndrom = false
        break
    } else{
        palyndrom = true
    }
}

// Output depending on result
if (palyndrom) {
    console.log("It is a palyndrome")
} else{
    console.log("It is not a palyndrome")
}