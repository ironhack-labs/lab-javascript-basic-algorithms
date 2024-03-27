// Iteration 1: Names and Input
let hacker1 = "Anna"
let hacker2 = "Susanne"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

const nameLengthDriver = hacker1.length
const nameLengthNavigator = hacker2.length


if (nameLengthDriver > nameLengthNavigator) {
    console.log(`The driver has the longest name, it has ${nameLengthDriver} characters.`);
}
else if (nameLengthDriver < nameLengthNavigator) {
    console.log(`It seems that the navigator has the longest name, it has ${nameLengthNavigator} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${nameLengthNavigator} characters!`);
}


// Iteration 3: Loops


const singleChar = hacker1.toUpperCase();
let driverCapital = "";

for (let i=0; i < nameLengthDriver; i++){
    driverCapital += singleChar[i] + " ";
}

console.log(driverCapital)


let navigatorReverse = "";

for (let i = nameLengthNavigator-1; i >= 0; i--){
    navigatorReverse += hacker2[i]
}

console.log(navigatorReverse)


if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, ${hacker2} goes first, definitely.`);
} else if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`${hacker1} goes first.`);
} else {
    console.log("What?! You both have the same name?");
}


// BONUS

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dignissim orci, ut sodales eros. Nullam malesuada consequat tortor sit amet venenatis. Nunc risus nisl, iaculis fringilla tincidunt eu, consequat non tellus. Cras sagittis ipsum non facilisis ultrices. Praesent posuere iaculis tortor, vel pharetra lorem lobortis sed. Mauris ut velit non leo convallis interdum. Cras quis aliquam sapien, sed dictum ex. Aenean quis cursus nunc. Nam rhoncus neque quam, eu luctus felis venenatis et. Ut porta ex nec lacus volutpat sollicitudin. Etiam lacinia semper lorem id bibendum. Aenean auctor sodales mi a pulvinar. Mauris faucibus nisi maximus arcu hendrerit, sed semper dolor sodales. Donec sit amet nibh rhoncus, rhoncus enim et, ullamcorper turpis. Nam molestie suscipit scelerisque. In accumsan convallis dui eget dapibus. Sed sit amet lacinia massa. Sed eu felis ut ex molestie accumsan. Suspendisse ullamcorper nulla ac est finibus, at dictum massa iaculis. Cras gravida, mi a bibendum cursus, dui mi dapibus libero, at volutpat ligula nisl vitae eros. Phasellus eu magna eu magna commodo euismod a non est. Donec at rutrum sapien. Nulla convallis posuere lacus quis ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum convallis, nisl vitae efficitur pulvinar, neque urna posuere orci, id luctus velit purus nec dolor. In orci lorem, vestibulum ac vestibulum vehicula, consequat nec mauris. Etiam non massa ac quam suscipit venenatis vitae nec erat. Nunc porttitor luctus vehicula. Sed vel euismod neque. Duis sit amet mi diam. Nunc ante tortor, finibus eget vehicula eget, auctor id mi. Vestibulum dictum convallis quam, at auctor leo scelerisque ac."

let wordsCount = 1;

for (let i=1; i < longText.length; i++) {
    if (longText[i] === " ") {
        wordsCount++;
    }
}

console.log(wordsCount)

let etCount = 0;

for (let i=1; i < longText.length; i++) {

    const latinWord = longText[i] + longText[i+1] + longText[i+2] + longText[i+3];
    if (latinWord === " et " || latinWord === " et," || latinWord === " et.") {
        etCount++;
    }
}

console.log(etCount)

/*function isPalindrome (phrase) {
  const cleanStr = phrase.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"))*/


function isPalindrome2 (phrase) {
    let phraseReverse = "";
    let phraseRight = "";
  
    for (let i = phrase.length - 1; i >= 0; i--){
        phraseReverse += phrase[i];
    }
    let pharseLowercase = phraseReverse.toLowerCase();
    let newStr = pharseLowercase.replace(/[ ,]/g, "");

    for (let j = 0; j < phrase.length; j++){
        phraseRight += phrase[j];
    }
    let phrseLowercase1 = phraseRight.toLowerCase();
    let newStr2 = phrseLowercase1.replace(/[ ,]/g, "");
    
    if (newStr === newStr2) {
        return "It's a Palindrome";
    } else {
        return "It's not a Palindrome"
    }
    
  }
  
  console.log(isPalindrome2("stack cats"));


/*let phrase = "Hallo ich bin Anna"

let phraseReverse = "";
let phraseRight = "";
  

for (let j = 0; j < phrase.length; j++){
    phraseRight += phrase[j];
}
let phrseLowercase1 = phraseRight.toLowerCase();
let newStr2 = phrseLowercase1.replace(/[ ,]/g, "");

for (let i = phrase.length - 1; i >= 0; i--){
        phraseReverse += phrase[i];
    }
let pharseLowercase = phraseReverse.toLowerCase();
let newStr = pharseLowercase.replace(/[ ,]/g, "");


console.log(newStr2)
console.log(newStr) */

