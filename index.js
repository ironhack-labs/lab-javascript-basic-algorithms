// Iteration 1: Names and Input
let hacker1 = "Farnoush"
let hacker2 = "Amin"
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let hackerCapital = ""
for(let i = 0; i < hacker1.length; i++) {
    if (i !== hacker1.length -1){
        hackerCapital += hacker1[i].toUpperCase() + " "
;    } else {
          hackerCapital += hacker1[i].toUpperCase();
}

}
console.log(hackerCapital)


let hackerReverse = ""
for (let i = hacker1.length - 1; i >= 0  ; i--) {
    hackerReverse += hacker1[i];
}
console.log(hackerReverse)


let hackers = [hacker1, hacker2];
console.log(hackers);
hackers.sort();
console.log(hackers);
if(hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
} else if (hackers[0] === hacker1) {
    console.log(`The driver's name goes first.`);
} else if (hackers[0] === hacker2) {
    console.log(`Yo, the navigator goes first, definitely.`);
}


const longText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type 
  specimen book. It has survived not only five centuries, but also the leap into electronic 
  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
   of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
   software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact 
   that a reader will be distracted by the readable content of a page when looking at its layout. 
   The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
    as opposed to using 'Content here, content here', making it look like readable English. 
    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default 
    model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
     Various versions have evolved over the years, sometimes by accident,
 sometimes on purpose (injected humour and the like).`
 let count = 0
 for (let i = 0; i < longText.length -1; i++) {
    if (longText[i] === " ") {
        count++;
    }
 }
 console.log(count)

 let etCounter = 0
 let counter_et = 0; // count 'et' in text
for(let i = 0; i < longText.length; i++) {
    if(longText.slice(i, i+4) === " et ") {
        etCounter++;
        i += 3;
    }
}
console.log("Et: ", etCounter);



// const phraseToCheck = "put it up"
// for (let i = 0; i < phraseToCheck.length - 1; i++) {
//     if
// }