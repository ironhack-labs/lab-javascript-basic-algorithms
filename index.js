// Iteration 1: Names and Input
console.log("Iteration 1: ")

let hacker1 = "Hackername"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Drivername"
console.log(`The navigator's name is ${hacker2}`);
console.log();

// Iteration 2: Conditionals
console.log("Iteration 2: ");

if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has" + hacker1.length + "characters.")
}else if(hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has " +  hacker2.length + " characters.")
}else{
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!.")
}
console.log();

// Iteration 3: Loops
console.log("Iterarion 3: ");

// Final Name
let hackerCapitalLetter = "";
// Save each letter
let letter ="";
for(let i = 0; i < hacker1.length; i++){
    letter = hacker1[i].toUpperCase();
    // First letter don't need a space 
    if(i === 0){
        hackerCapitalLetter = hackerCapitalLetter + letter;
    // Other letters
    }else{
        hackerCapitalLetter = hackerCapitalLetter + " " + letter;
    }
}
console.log(hackerCapitalLetter);

// Final inverse name
inverseHacker = "";
// Save each letter
inverseLetter = "";
// Inverse For
for(let i = hacker1.length - 1; i >= 0; i--){
    inverseLetter = hacker1[i];
    inverseHacker = inverseHacker + inverseLetter;
}
console.log(inverseHacker);

// localeCompare return -1, the driver is first
if(hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.");
// localeCompare return 1, the navigator is first
}else if(hacker1.localeCompare(hacker2)=== 1){
    console.log("Yo, the navigator goes first, definitely.");
// have the same name
}else{
    console.log("What?! You both have the same name?");
}
console.log();



// Bonus Times!

// Bonus 1
console.log("BONUS 1: ");

longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum massa mi, non hendrerit mi molestie condimentum. Integer gravida, nisi et malesuada placerat, dolor nisl bibendum purus, eget imperdiet nunc metus nec nulla. Aliquam commodo accumsan nisi, et condimentum eros efficitur eu. Vivamus ut neque egestas, fermentum orci nec, fringilla mauris. Mauris consectetur sapien nec ipsum porttitor, ac rhoncus ipsum mattis. Sed ultricies ultrices lectus at pellentesque. Cras blandit eros purus, non pharetra eros dignissim non. Etiam molestie ipsum tincidunt ligula blandit, sed feugiat quam euismod. Aliquam congue pretium vehicula. Aenean lacus nulla, venenatis eu fringilla sit amet, tincidunt id turpis.

Vivamus id tempus mi, eu luctus lacus. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus laoreet tristique dolor. Pellentesque sollicitudin ante ac lacus auctor gravida. Vivamus ac eros dolor. Integer eu semper lorem, sit amet ornare metus. Fusce eu justo ac elit faucibus pulvinar. Nullam ac lectus tortor.

Morbi varius, est at sollicitudin pretium, sem est pharetra nisl, eu rutrum risus massa id urna. Donec sed bibendum nibh. Nulla ut pretium turpis, nec viverra felis. Vivamus sapien arcu, fringilla in tristique sit amet, egestas et dolor. Fusce interdum quam id neque tempor accumsan. Nunc eget tortor et augue faucibus ornare non id sapien. Nullam commodo dolor sed pellentesque varius. In placerat eleifend nibh quis laoreet. Pellentesque dui arcu, finibus quis aliquet vel, feugiat nec mauris. Quisque id bibendum turpis. Pellentesque pharetra lacus vel massa hendrerit, sed malesuada ante gravida. Duis molestie tincidunt neque, a bibendum magna accumsan sed. Donec egestas vulputate est ut pellentesque.`;

let countWords = 0;
let count = 0;

for(let i = 0; i < longText.length; i++){
    if(longText[i]!= " " && longText[i] != "," && longText[i] != "."){
        count =+ 1;
    }else if(count != 0){
        countWords+=1;
        count = 0
    }
}

console.log(`O número de palavras são ${countWords}.`);

let countEt = 0;

for(let i = 0; i < longText.length; i++){
    let word = longText[i]+longText[i+1];
    if(word === "et"){
        countEt += 1;
    }
}

console.log(`The word "et" is found ${countEt} times.`);
console.log();


// Bonus 2

let phraseToCheck = "Was it a car or a cat I saw?";
let finalPhrase1 = "";
let finalPhrase2 = "";

for(let i = 0; i < phraseToCheck.length; i++){
    if(phraseToCheck[i]!= " " && phraseToCheck[i] != "," && phraseToCheck[i] != "." && phraseToCheck[i] != "!" && phraseToCheck[i] != "'" && phraseToCheck[i] != "?"){
        finalPhrase1 = finalPhrase1 + phraseToCheck[i];
    }
}


for(let i = phraseToCheck.length - 1; i >= 0; i--){
    if(phraseToCheck[i]!= " " && phraseToCheck[i] != "," && phraseToCheck[i] != "." && phraseToCheck[i] != "!" && phraseToCheck[i] != "'" && phraseToCheck[i] != "?"){
        finalPhrase2 = finalPhrase2 + phraseToCheck[i];
    }
}

console.log("BONUS 2: ");
if(finalPhrase1.toLocaleLowerCase() === finalPhrase2.toLocaleLowerCase()){
    console.log("Is a Palindrome!");
}