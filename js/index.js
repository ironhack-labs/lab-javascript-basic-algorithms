// Iteration 1

let hacker1 = "Lara";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Lisa";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 2
for (value of hacker1) {
    console.log(value.toUpperCase());
}

for (let i=hacker2.length-1; i>=0; i--) {

    console.log(hacker2[i]);
}

let lexicOrder=hacker1.localeCompare(hacker2);

if (lexicOrder===-1) {
    console.log(`The driver's name goes first.`)
}
else if (lexicOrder===1) {
    console.log(`The navigator's name goes first.`)
}
else {
    console.log(`What?! You both have the same name?`);
}


// Bonus

const loremString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a fringilla augue, eget lobortis erat. Nulla at lorem ultricies, blandit massa et, suscipit orci. Maecenas diam arcu, auctor ac leo ac, sodales fermentum quam. Nulla elementum sem ut augue ultricies ultricies. Sed rutrum massa euismod facilisis aliquam. Mauris consequat rutrum efficitur. Integer auctor auctor quam. Phasellus vel ipsum at lectus placerat fringilla non nec nisi. Curabitur maximus mi ornare vehicula gravida. Nam non ligula vulputate, tincidunt massa in, accumsan risus. Suspendisse id mauris diam.

Duis arcu turpis, efficitur nec nunc eget, blandit pellentesque nisi. Fusce et libero nec nisi aliquam feugiat. Sed vitae nibh blandit, commodo turpis in, tempus nulla. Etiam blandit massa vitae maximus suscipit. Etiam nec accumsan massa, eget congue sapien. Proin aliquam est vel tortor placerat rhoncus eu in metus. Duis at metus id nibh ultrices sollicitudin. Aliquam fermentum lectus sed elementum tincidunt. Aenean tincidunt sed enim ut scelerisque. Duis posuere, nunc sed laoreet laoreet, lacus est luctus ex, vitae posuere nunc felis ut nibh. Aliquam ligula tortor, interdum et vestibulum ac, dictum at erat. Maecenas et egestas lectus, sed maximus lorem. Aliquam non pellentesque velit. Etiam quis augue nec dolor aliquam tempor eget vitae justo. Phasellus non iaculis elit, id lobortis sapien. Vivamus nec justo interdum, dictum dui sit amet, fringilla sapien.

Morbi tortor magna, laoreet tempus fringilla vitae, molestie sit amet mi. Nullam fermentum tellus et mi pellentesque gravida. Suspendisse elit enim, finibus sed dignissim in, commodo in ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent nec lacinia nisl. Vivamus pellentesque at ex nec imperdiet. Nunc sit amet suscipit sapien. Nullam pretium tristique augue non imperdiet. Aliquam fermentum, nisi a imperdiet interdum, lacus risus vestibulum dui, ac venenatis tellus dui eu mi. Pellentesque at purus imperdiet, faucibus sem et, egestas nisl. Nam dictum interdum risus at imperdiet. Donec dapibus lacus at porttitor luctus.`

/* let numWords=0;

for (char of loremString) {
    if (char == ` `|| char == `\n` ) {
        numWords++;
    }
}

console.log(numWords) */


/* const arr = loremString.split(/[" ""\n"]+/);
console.log(arr.length); */

const arr = loremString.split(/[" ""\n"]+/);
console.log(`There are ${arr.length} words.`);


let numEt= 0;



for(let i=0; i<arr.length; i++) {
    if(arr[i]=== "et") {
        numEt++;
    }
}

console.log(`There are ${numEt} times the word 'et'.`);


// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseToCheckFiltered = "";


for (char of phraseToCheck) {
    if (char !== " " && char !== "," && char !== "-" && char !== "." && char !== "!" && char !== "?" && char !== "\"" && char !== "'"  ) {
    phraseToCheckFiltered += char.toLowerCase();
    }
}

// console.log(phraseToCheckFiltered);

for (let i=0; i<phraseToCheckFiltered.length; i++) {

    //console.log(`${phraseToCheckFiltered[i]} and ${phraseToCheckFiltered[phraseToCheckFiltered.length-1-i]}`)

    if(phraseToCheckFiltered[i]==phraseToCheckFiltered[phraseToCheckFiltered.length-1-i]) {
        palin=true;
    }
    else {
        palin=false;
        break;
    }
}

if (palin==true) {
    console.log("Palindrome!");
}
else {
    console.log("No palindrome!");
}