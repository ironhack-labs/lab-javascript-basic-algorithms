// Iteration 1: Names and Input

let hackerDriverName = 'johnathan';

console.log(hackerDriverName)

let hackerNavigator = 'john';

console.log(hackerNavigator)



if (hackerDriverName.length > hackerNavigator.length) {
    console.log("The driver has the longest name, it has " + hackerDriverName.length + " characters.");
} else if (hackerNavigator.length > hackerDriverName.length) {
    console.log("It seems that the navigator has the longest name, it has " + hackerNavigator.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hackerDriverName.length + " characters!");
}



let upperCase = '';

for (let i = 0; i < hackerDriverName.length; i++) {
    upperCase += hackerDriverName[i].toUpperCase() + ' ';
}

console.log(upperCase);

let reversOrder = '';
for (let i = hackerNavigator.length-1; i >= 0; i--){
    reversOrder += hackerNavigator [i]

}
console.log(reversOrder);



if ( hackerDriverName < hackerNavigator){
    console.log("The driver's name goes first.")
}
if (hackerNavigator < hackerDriverName ){
    console.log("Yo, the navigator goes first, definitely")
}
else{
    ("What?! You both have the same name")
}



let longText = "Lorem ipsum dolor sit et amet consectetur et adipisicing elit. Modi, at. Iusto et empora id voluptatum, amet vero quas asperiores neque eveniet sit debitis consectetur nihil a temporibus officiis veritatis dolore fugit deserunt dicta quam facere vitae ea, incidunt, eius placeat laboriosam excepturi, sequi consectetur id impedit numquam quaerat? Assumenda voluptates adipisci est quisquam!";

let wordCount = 0;
let etCount = 0;

for ( let i = 0; i < longText.length; i++ ){
    if (longText[i] === " " || i === longText.length-1 ){
        wordCount++
    }
    if (longText[i] === 'e' && longText[i+1] === 't' &&
    (i === 0 || longText[i-1] === ' ') && 
    (i+1 === longText.length-1 || longText[i+2] === ' ')) {
        etCount++;
    }
} 

console.log("Total words:" +  wordCount);
console.log("'et' occurrences:" + etCount);