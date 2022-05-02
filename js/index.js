// Iteration 1: Names and Input
//	1.1 Create a variable `hacker1` with the driver's name.

let hacker1= "Eric"


// 1.2 Print `"The driver's name is XXXX"`.

console.log(`"The driver's name is ${hacker1}"`)

// 	1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 ="Eric"

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
