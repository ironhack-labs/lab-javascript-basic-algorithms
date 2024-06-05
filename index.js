// Iteration 1: Names and Input

let hacker1 = "Santiago";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Hanna";

console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
    console.log("GAME OVER!")
}

// Iteration 3: Loops

let newHacker1 = "";

for (let i = 0; i < hacker1.length; i++){

newHacker1 += hacker1[i].toUpperCase() + " ";

}

console.log(newHacker1);

let reversedHacker1 = "";

for (let i = hacker1.length -1; i >= 0; i--){
    reversedHacker1 += hacker1[i];

}

console.log(reversedHacker1);

if(hacker1.localeCompare(hacker2) === 1 ){

    console.log("The drivers name goes first")

}else if(hacker1.localeCompare(hacker2) === -1 ) {

    console.log("Yo, the navigator goes first, definetly.")

} else if ( hacker1.localeCompare(hacker2) === 0 ){

    console.log("What?! You both have the same name?")

} else {

    console.log("Invalid Inputs")
}

// Bonus Time!

// Bonus 1: 

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque congue laoreet. Donec ligula diam, suscipit ac convallis et, auctor a neque. Praesent dapibus urna at eros tincidunt vestibulum. In euismod purus ante, sit amet auctor nunc blandit quis. Aliquam erat volutpat. Integer eget rutrum sapien. Nulla facilisi. Nullam ipsum est, porta sit amet commodo non, fringilla nec nunc. Curabitur lectus quam, eleifend id vulputate nec, molestie eget est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin neque odio, eget imperdiet lectus rhoncus ut. Maecenas libero tortor, aliquet quis odio quis, ornare pellentesque dui. Aenean eget tincidunt nibh. Nulla et blandit nunc. Curabitur urna nulla, sagittis eu orci vitae, lacinia placerat ipsum. Maecenas eleifend sem nec gravida volutpat.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ut fermentum ante. Sed imperdiet porttitor libero, in molestie dui fringilla vel. In vitae metus in eros hendrerit tristique at at lacus. Vestibulum eu orci eleifend eros efficitur sodales. Sed cursus tellus sit amet neque fermentum vehicula. Maecenas auctor maximus tellus et hendrerit.

Proin vitae leo ut lectus cursus bibendum. Aenean elementum hendrerit lectus in tempus. Nullam pellentesque, elit ac posuere commodo, diam dui sodales eros, et dignissim neque purus aliquam turpis. Curabitur dictum libero in eros euismod, in condimentum diam porttitor. Cras ut justo odio. Sed ac hendrerit velit. Quisque sodales risus a velit volutpat, tempus fringilla lorem aliquam. Phasellus quis tincidunt enim. Vestibulum iaculis justo id dui convallis, vel iaculis enim porta. Aenean finibus dui et lorem finibus euismod. Donec euismod, magna sit amet euismod consectetur, neque metus mattis enim, non hendrerit nisl mi ac tellus. Mauris consectetur lectus ac est varius, in aliquam eros dignissim. Phasellus maximus sem at purus scelerisque venenatis. Maecenas interdum faucibus elit, eget consectetur ex commodo non. In elementum dui ac tellus finibus condimentum. Curabitur in augue turpis.`


let text = `Helo        Here  Am      I.
This     issss  not  a    mistake.`;

let count = 0;

let inWord = false;

for (let i = 0; i < longText.length; i++){

    if (longText[i].match(/\s/)) {
        inWord = false;
    } else {
        // If the character is not a whitespace and we are not already in a word, increase the count
        if (!inWord) {
            count++;
            inWord = true;
        }
    }
};



console.log("Word count:", count);


let etCount1 = (longText.match(/\bet\b/g) || []).length;

console.log("Occurrences of 'et':", etCount1);


// Bonus 2: 

function isPalindrome(phrase) {

    phrase = phrase.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    for (let i = 0; i < Math.floor(phrase.length / 2); i++) {
        if (phrase[i] !== phrase[phrase.length - 1 - i]) {
            console.log("The phrase is not a palindrome");
        }
    }
    console.log("The phrase is a palindrome");
}

isPalindrome("Amor, Roma");