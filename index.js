// Iteration 1: Names and Input
const hacker1 = "Pedro";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Fernanda";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
const driverLength = hacker1.length
const navigatorLength = hacker2.length

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, XX characters!`)
}

// Iteration 3: Loops
//3.1

let capitalSpacedName = ""
for(i=0;i < hacker1.length; i++){
    const char = hacker1[i].toUpperCase() + " "
    capitalSpacedName += char
}

console.log(capitalSpacedName)


let formattedName = ""
for (let i = 0; i < hacker1.length; i++) {
    formattedName += hacker1[i].toUpperCase();

    // Add a space after each character except the last one
    if (i < hacker1.length - 1) {
        formattedName += ' ';
    }
}
console.log(formattedName)

//3.2
let wordReversed = "";
 
for (let i = hacker2.length - 1; i >= 0; i--) {
  const char = hacker2[i];
  wordReversed += char;
}
 
console.log(wordReversed);

//3.3

if(hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.");
}
else if(hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first, definitely.");
}
else if(hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?")
}


//Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel sapien aliquam, sodales metus eu, scelerisque quam. Praesent aliquet ipsum vitae elit viverra venenatis. Donec sodales elementum volutpat. Aenean in dui consequat, tristique libero non, condimentum lorem. Proin lorem elit, mollis eget rhoncus ut, elementum sit amet odio. Praesent non euismod metus, vitae bibendum nisl. Vestibulum posuere venenatis nibh id tincidunt. Suspendisse eleifend libero velit, at tristique nisi consequat eget. Cras condimentum, dolor id pulvinar hendrerit, ligula libero feugiat nulla, at rhoncus dolor purus quis ligula. In hac habitasse platea dictumst. Nullam blandit, quam sed consectetur rhoncus, velit ipsum vehicula ligula, at tristique arcu arcu at enim. Sed quis arcu sed ligula iaculis interdum. Sed in ante rutrum, commodo lorem congue, lacinia nulla. Nulla id neque sed lectus commodo congue quis eget leo.

Pellentesque a odio ut nisi efficitur congue eu vel nisi. Sed elementum mattis nibh, sit amet fermentum tellus euismod quis. Morbi lobortis elit ac ligula cursus fringilla. Donec mollis placerat felis. Sed dictum, purus vitae egestas pharetra, tellus turpis feugiat tortor, sit amet blandit nisl metus in ligula. Fusce vitae iaculis diam. Etiam ornare, dui id mollis feugiat, tortor purus convallis orci, eu gravida tellus lacus nec dolor. Duis ullamcorper et tortor sed rhoncus. Vivamus nunc nisi, ullamcorper eget massa ut, gravida rhoncus erat. Praesent condimentum tellus odio, eu auctor risus tempus vel. Vestibulum tincidunt, felis vel pellentesque malesuada, orci elit egestas mauris, ac pretium enim nunc a eros.

Sed varius sed nisl eu ullamcorper. Ut mi ligula, vestibulum in tortor eu, lobortis ultrices diam. Donec et enim vitae orci iaculis vestibulum non at purus. Phasellus condimentum, elit id sollicitudin ultricies, nisi turpis varius mi, eget hendrerit orci nulla vitae neque. Vivamus et congue felis, nec aliquam leo. Nunc nibh eros, faucibus aliquam sagittis eget, vestibulum vitae est. Mauris consectetur ipsum urna, eu ullamcorper mi faucibus in. Maecenas bibendum imperdiet purus sit amet ultricies. Pellentesque tempus est eu massa malesuada, quis elementum nunc semper. Aenean ut quam velit. Nullam ornare felis ultricies lacinia consectetur.`

let totalWords = 0;
  for (let i = 0; i < longText.length; i++){
    if (longText[i] === " ")
    totalWords ++; // add 1 to total so far
  }
  totalWords += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words

  totalWords += 2; // add 2 for each paragraph because enter doesn't equal a space

console.log(totalWords);

let wordArray = longText.split(/[, .\n]/)
console.log(wordArray)

let etWord = 0;
for (let i=0; i<wordArray.length; i++){
    if (wordArray[i] === "et"){
        etWord ++
    }
}

console.log(etWord)

//Bonus 2

let phraseToCheck = "race car"
let cleanWord = ""
for(i=0; i<phraseToCheck.length; i++){
    const char = phraseToCheck[i]
    if(phraseToCheck[i] !== ',' && phraseToCheck[i] !== ' ' && phraseToCheck[i] !== '.' && phraseToCheck[i] !== '\n'){
        cleanWord += char
    }
}
console.log(cleanWord)


let reversedWord = "";
 
for (let i = cleanWord.length - 1; i >= 0; i--) {
  const char2 = cleanWord[i];
  reversedWord += char2;
}
 
console.log(reversedWord);

console.log(cleanWord === reversedWord)