// Iteration 1: Names and Input
let hacker1 = "Peter";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Mary";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let hacker1Capitalized = "";

let removeLastSpace = 0;
for(let i = 0; i < hacker1.length; i += 1){
    hacker1Capitalized += `${hacker1[i].toUpperCase()} `;
}

console.log(hacker1Capitalized.trimRight());

let hacker2Inverse = "";

for(let i = hacker2.length-1; i >= 0; i -= 1){
    hacker2Inverse += hacker2[i];
}
console.log(hacker2Inverse);


//Lexicographic Order
if(hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely");
} else{
    console.log("What?! You both have the same name?");
}

//Bonus 1
let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed dui vel. quam pretium tincidunt. Vestibulum mi metus, pulvinar vel mi fringilla, lobortis malesuada ante. Phasellus nisi sapien, consequat vel nulla quis, mattis sodales lectus. Fusce efficitur vel metus a suscipit. Aenean ut mi lorem. Vivamus ac lorem id orci ultricies fringilla quis ac odio. Sed turpis tortor, venenatis sed diam non, efficitur pretium eros. Sed ultricies nisi eu risus vehicula tempus. In a vulputate metus. Vivamus aliquam sem sed diam tristique molestie. Nullam a ultricies velit. Nam vitae porta mauris.\
Maecenas porttitor suscipit hendrerit. Curabitur vel lobortis lacus. Nulla lobortis mauris in risus fermentum, sit amet viverra odio egestas. Quisque sapien dui, faucibus a pharetra ac, tempor ut lorem. Nam aliquam sapien id porta pulvinar. Nullam blandit vulputate velit, quis facilisis ipsum porta in. Duis hendrerit urna vel luctus tempor. In tincidunt, urna id auctor bibendum, risus est venenatis nibh, in tincidunt massa elit nec felis. Suspendisse suscipit magna id lectus tincidunt, sit amet pellentesque odio rhoncus. Suspendisse vel aliquet erat, vehicula placerat velit. Proin cursus augue in neque varius, in euismod ipsum ornare. Nam sit amet eros at nisl scelerisque faucibus nec vel massa. Proin eros massa, dignissim vel elementum non, varius eget massa. Cras varius blandit mauris, non varius mauris iaculis eu.\
Praesent tincidunt eros a volutpat rhoncus. Aliquam facilisis bibendum dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam mattis justo augue, et laoreet magna imperdiet ac. Sed quam nisl, pretium nec consequat ut, eleifend nec dolor. Morbi vel pulvinar purus. Nam lacinia id metus vulputate convallis.";

let strSpaces = 0;

for(let i = 0; i <= str.length; i += 1){
    if(str[i] === " "){
        strSpaces += 1;
    } else {
        continue;
    }
}

let wordsInStr = strSpaces + 1;
console.log(wordsInStr);


//Bonus 1 - pt.2: Word Et Counting

function search_word(text, word){
    let numberOfEtWord = 0;
    let countTwoLetters = 0;
    for (let i = 0; i < text.length; i += 1){
        if(text[i] === word[0]){ //If the 1st letter of word is equal to a letter of the text:
            for(let j = i; j < i + word.length; j += 1){ //Run another loop when the first letter of the word is find in the string
                if(text[j] === word[j-i]){ //If the second letter of the word is equal to the next letter of the first founded letter:
                    countTwoLetters += 1;
                } else{
                    continue;
                }
                if (countTwoLetters === word.length){ //If counter = 3 add 1 to the variable numberOfEtWord
                    numberOfEtWord += 1;
                } else{
                    continue;
                }
            }
            countTwoLetters = 0; //Reset the number of letter after find it and beggin next loop
        }
    }
    console.log(`${word} was found ${numberOfEtWord} times.`);
}

console.log(search_word(str, ' et'));

