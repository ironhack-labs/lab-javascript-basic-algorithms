// Iteration 1: Names and Input

// 1.1

let hacker1 = "manuel"

// 1.2

console.log(`The driver's name is ${hacker1}.`)

// 1.3

let hacker2 = "daniel"

// 1.4

console.log("The navigator's name is " + hacker2 + ".")

// Iteration 2: Conditionals

let hacker1Length = hacker1.length

let hacker2Length = hacker2.length

const lengthCheck = (hacker1.length === hacker2.length)

console.log(lengthCheck) // -> result = true

console.log(`Wow, you both have equally long names, ${hacker2Length} characters!`)

// Iteration 3: Loops

// 3.1

let char2 = ""

for (let i = 0; i < hacker1.length; i++) {
    let char = hacker1[i].toUpperCase();

    char2 = char2 + char + " ";

}

console.log(char2);


// 3.2

let char4 = ""

for (let j = hacker2.length - 1; j >= 0; j--) {

    char3 = hacker2[j];

    char4 = char4 + char3;
}

console.log(char4);


// 3.3

if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first.`);
}

else if (hacker1.localeCompare(hacker2) === 1) {
    console.log('Yo, the navigator goes first, definitely.');
}
else {
    console.log(`What?! You both have the same name?`)
}

// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula urna, ullamcorper non fermentum vitae, posuere sed tellus. Aliquam dui eros, finibus ac justo consequat, rhoncus ultricies leo. Sed et blandit ligula. Cras at dui sollicitudin, convallis mi ac, pulvinar nulla. Sed lobortis tortor et justo iaculis tristique euismod auctor mi. Etiam malesuada nibh tortor, ac malesuada leo faucibus eget. Pellentesque id bibendum ligula, nec placerat velit. Vestibulum id massa sit amet velit posuere ultricies. Nam sagittis, ex ut cursus congue, mi magna euismod lacus, a vehicula erat tellus tempus augue. Nam porta augue quis ornare faucibus. Integer ac varius libero. Donec faucibus nunc vitae nibh consectetur, non dictum turpis pharetra. Fusce id ligula vel leo fermentum tincidunt a ut dui. Aliquam at mollis turpis, iaculis vehicula lectus. Curabitur in magna eget sapien consequat laoreet. Vivamus ac hendrerit lorem. Vestibulum gravida dictum quam non bibendum. Suspendisse condimentum ex a vehicula dictum. Suspendisse posuere consequat orci vitae pharetra. Nullam dignissim sit amet mi at cursus. Ut eget magna tellus. Ut sollicitudin nunc at erat luctus rhoncus. Fusce dapibus ex sit amet diam finibus, nec molestie ante dictum. Nam tincidunt eleifend nunc, nec molestie sapien pellentesque ac. Nam aliquet ut felis vitae tincidunt. Sed semper scelerisque ligula, a lacinia turpis pellentesque in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed luctus ex tortor, et ultricies nisl facilisis varius. Morbi vulputate feugiat efficitur. Pellentesque vehicula magna nunc, at ullamcorper lorem ultrices vitae. Phasellus facilisis sodales sapien non sollicitudin. Maecenas mollis, erat at varius feugiat, turpis est porttitor neque, vel malesuada orci nisl in diam."

let wordCount = "" + 1;


for (i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {

        wordCount++;
    }
}

console.log(wordCount)

let etCount = "";


for (i = 0; i < longText.length; i++) {
    if (longText[i] + longText[i + 1] === "et") {

        etCount++;
    }
}

console.log(etCount)

// Bonus 2

// A primeira solução foi uma tentativa sobre a qual ficámos com dúvidas.

let phraseToCheck = "Amor, Roma"

let phraseToCheck2 = phraseToCheck.toUpperCase();

let phraseToCheck2Simple = ""

for (i = phraseToCheck2.length-1 ; i >= 0 ; i--) {

    let contagem = phraseToCheck2[i];
    
    if (phraseToCheck2[i] === ",") continue;

    else if (phraseToCheck2[i] === " ") continue;

    else if (phraseToCheck2[i] === ".") continue;

    else if (phraseToCheck2[i] === "!") continue;

    else if (phraseToCheck2[i] === ";") continue;

    else if (phraseToCheck2[i] === '"') continue;

    else if (phraseToCheck2[i] === "?") continue;

    else if (phraseToCheck2[i] === "'") continue;

    else { 
        phraseToCheck2Simple += contagem;
    }

}

console.log(phraseToCheck2Simple)





/*
let phraseToCheck = "A man, a plan, a canal, Panama!";

let phraseToCheck2 = phraseToCheck.toUpperCase();

let cleanWord = ""

for (i = 0; i < phraseToCheck2.length; i++) {
    
    const char = phraseToCheck2[i]
    
    if (phraseToCheck2[i] !== ',' && phraseToCheck2[i] !== ' ' && phraseToCheck2[i] !== '.' && phraseToCheck2[i] !== '\n') {
        
        cleanWord += char
    }
}



let reversedWord = "";

for (let i = cleanWord.length - 1; i >= 0; i--) {
    
    const char2 = cleanWord[i];
    
    reversedWord += char2;
}



console.log(cleanWord === reversedWord)

*/














