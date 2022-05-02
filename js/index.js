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


// Creating the string
let loremIpsum = `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`

let countWords = 0
for (let i=0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === " "){
        countWords += 1;
    }
    countWords +=1 ;
}
console.log(countWords)