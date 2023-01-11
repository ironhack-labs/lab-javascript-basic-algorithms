// Iteration 1: Names and Input
const hacker1 = "Anders";

console.log("The drivers name is " + hacker1 );

const hacker2 = "Anna";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log("What?! You both have the same name?")
}

// Iteration 3: Loops

hacker1Capital = "";

for (let i=0; i < hacker1.length; i++) {
    hacker1Capital += hacker1[i].toUpperCase() + " ";
}

hacker2Reverse ="";

console.log(hacker1Capital)

for (let i = hacker2.length -1; i >= 0; i--){
    hacker2Reverse += hacker2[i];
}

console.log(hacker2Reverse)


if ( hacker1 < hacker2 ) {
    console.log("The driver's name goes first.")
} else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.")
} else if (hacker1 === hacker2){
    console.log("What?! You both have the same name?")
} else {
    console.log("Something went wrong")
}


/* Bonus 1 */

const longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod quam ac cursus varius. Quisque imperdiet dignissim orci ac lobortis. Duis rutrum rhoncus ornare. Suspendisse felis tortor, interdum sed quam nec, imperdiet finibus erat. Integer ut ante massa. Etiam malesuada eros diam, ut elementum neque imperdiet malesuada. Cras sed mauris vel elit placerat convallis in at dolor. Vivamus nulla est, aliquam in velit vel, vestibulum sollicitudin urna. Nulla augue arcu, mattis non lorem id, vestibulum placerat nisi. " +

"Suspendisse gravida ut lacus pharetra sagittis. Fusce dolor urna, pretium at turpis in, facilisis hendrerit enim. Morbi sed purus sodales, lacinia lorem eu, ullamcorper sem. Phasellus dolor sapien, ultrices vitae felis sed, lacinia accumsan dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam pharetra ante quam, in luctus mi volutpat quis. Vestibulum condimentum augue sit amet ornare auctor. " +

"Proin porta laoreet lacus ut feugiat. Maecenas maximus, urna dignissim ultricies semper, nibh nunc feugiat mi, nec suscipit eros neque pharetra diam. Duis quis ligula ipsum. Proin molestie tortor nibh, cursus dignissim nibh blandit sit amet. Duis aliquam metus felis, non hendrerit ipsum tempus eget. Fusce mollis libero ac consequat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "


let counter = 0;
for (let i = 0; i <= longString.length; i++){
    if (longString[i] === " "){
    counter++;
    }
}

console.log(counter)

let etCounter = 0;

for (let i = 0; i<= longString.length;i++){
    charTest = longString[i] + longString [i+1];
    if (charTest === "et"){
        etCounter++
    }
}

console.log(etCounter)

/* bonus 2 */

const phraseToCheck = "put it up";

let phraseForward = "";
for (let i = 0; i < phraseToCheck.length ; i++){
    if (phraseToCheck[i] !== " ") {
        phraseForward += phraseToCheck[i];
    }
}

let phraseReverse = "";
for (let i = phraseForward.length-1; i >= 0 ; i--){
    phraseReverse += phraseForward[i];

}

if (phraseReverse === phraseForward){
    console.log("It is a palindrome");
} else {
    console.log("This is not a palindrome")
}

console.log(phraseForward)
console.log(phraseReverse)