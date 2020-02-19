// Iteration 1: Names and Input
let hacker1= 'Fabio Menozzi';
let hacker2 = 'Thiago Carnevali Pizzutti';

// console.log(`The driver's name is ${hacker1}`);
// console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker2.length > hacker1.length){

   // console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker2.length < hacker1.length) {
    
    //console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

} else if (hacker1.length === hacker2.length) {

    //console.log(`Wow, you both have equally long names ${hacker1.length}`)

}



// Iteration 3: Loops


let charactersName = []

/* SPLIT NAME */
charactersName1 = hacker1.split([''])
charactersName2 = hacker2.split([''])

/* REVERSE NAME */
let reverseName1 = charactersName1.reverse()
let reverseName2 = charactersName2.reverse()

/* EXTRA JOIN NAME */
let joinName1 = reverseName1.join()
let joinName2 = reverseName2.join()

/* EXTRA CONSOLE LOG - JUST PLAYING 
console.log(joinName1);
console.log(joinName2);

console.log(reverseName1.reverse());
console.log(reverseName1.reverse());

console.log(reverseName2.reverse());
console.log(reverseName2.reverse());  */

let paragraph1 = 'Lorem ipsum dolor sit amet, amet consectetur adipiscing elit. '

let paragraph2 = 'ygwhuidwiwwpoiwopidwoidopdjddjwuwdwwdhjal'

let numberOfWords = str => paragraph1.length

/* NUMBER OF WORDS */
console.log(numberOfWords(paragraph1));

let patternLatinWord = /et/g

patternLatinWord.test(paragraph1)

paragraph1.search(patternLatinWord)

paragraph1.match(patternLatinWord)

/* MATCH WORDS */
console.log(paragraph1.match(patternLatinWord));







// alert(charactersName1.reverse()
// console.log(splitName);

