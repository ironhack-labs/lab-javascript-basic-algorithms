// Iteration 1: Names and Input ### Iteration 1: Names and Input

let hacker1 = "Pablo"
let hacker2 = "Silvia"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
if (hacker1.length < hacker2.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`)
}
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both hace equally long names, ${hacker2.length} characters`)
}


// Iteration 3: Loops

let result = ""

for (let i=0; i<hacker1.length; i++) {
    result += `${hacker1[i].toUpperCase()} `;
}
console.log(result)


let reverse = ""

for (let i=hacker2.length-1; i>=0; i--) {
    reverse += `${hacker2[i]}`;
}
console.log(reverse)


for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++)
    if (hacker1[i] < hacker2[i]){
        console.log(`The driver's name goes first.`)
        break;
    } else if (hacker2[i] < hacker1[i]){
        console.log(`Yo, the navigator goes first, definitely.`)
        break;
    }
    else {
        console.log(`What?! You both have the same name?`)
        break;
}

// Bonus 1

let newString =  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sem eget elit porta auctor vel quis neque. Morbi ac blandit urna, eu sodales nunc. Nulla at semper tortor. Suspendisse sed mi ante. Suspendisse potenti. Fusce quis tempus lacus, ut tempor sem. Morbi vel felis tincidunt, facilisis urna vestibulum, fermentum orci. Fusce vel nulla consectetur, vestibulum diam et, pellentesque turpis. Donec tempus ante sapien, in vulputate libero cursus et. Suspendisse dictum dolor ac dui vestibulum, id semper libero finibus. Sed suscipit nisi tortor, quis scelerisque ante ultricies non. Integer fermentum tortor in nisi porttitor accumsan. Nulla facilisi. Cras et convallis lorem, at dapibus ipsum. Aenean rhoncus lobortis ante, non fermentum mauris congue a. Praesent nec interdum mi. Proin leo odio, lacinia eget fermentum nec, vestibulum quis ipsum. Praesent eget faucibus ipsum, ac pulvinar ligula.
Sed lacus arcu, consectetur sagittis lacus non, venenatis faucibus risus. Vestibulum sollicitudin enim id lorem gravida, placerat aliquet quam interdum. Nullam pulvinar tellus vitae dignissim finibus. Integer pellentesque, eros vel tincidunt tempus, dolor sapien tempor metus, in molestie mauris velit at sapien. Fusce pretium, nisl vel mattis porttitor, nibh velit efficitur nulla, vel imperdiet nisl libero non sem. Aliquam sit amet finibus velit. Mauris interdum turpis et nulla molestie accumsan. Etiam consectetur in massa in dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at tortor non orci posuere vehicula. Suspendisse sodales lectus ex, vitae ullamcorper nibh ultrices non.`

let newArray = [];

newArray = newString.split(" ");

console.log(newArray.length)

let count = 0;

for (let i=0; i<newArray.length; i++){
    if (newArray[i] === "et") {
        count +=1;
    }
}
console.log(count)

// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";

let adjustedPhrase = phraseToCheck.replace(/[.,¡! ]/g, "").toLowerCase();
let isPalindrome = true;

for (let i=0; i<adjustedPhrase.length/2; i++){
    if (adjustedPhrase[i] !== adjustedPhrase[adjustedPhrase.length-1-i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(`The phrase is a palindrome`)
} else {
;     console.log(`The phrase is not a palindrome`)}