// Iteration 1: Names and Input
let hacker1 = "Andreu"; //driver
let hacker2 = "Andreu"; //navigator


console.log(`The drivers is ${hacker1}`)
console.log(`The navigators is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("Hacker 1 is longer than hacker2 with " + hacker1.length + " chars.");
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " chars.");
} else {
    console.log("Wov! you both have equally long names with " + hacker1.length + " chars.");
}

// Iteration 3: Loops;

let hacker1Letters = "";

for (i = 0; i < hacker1.length; i++) {
    hacker1Letters = hacker1Letters + hacker1.charAt(i).toUpperCase() + " "
}
console.log(hacker1Letters);

let j = hacker2.length - 1;
let hacker2Letters = "";

while (j > -1) {
    hacker2Letters = hacker2Letters + hacker2[j];
    j--;
}

console.log(hacker2Letters);

if (hacker1 < hacker2) {
    console.log("Driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Navigator goes first definitely.");
} else {
    console.log("What? You both have the same name!");
}

// let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada aliquam mi. Integer eget rutrum lorem, id rhoncus risus. Nunc elementum neque ut purus molestie aliquet. Aenean molestie ex suscipit, suscipit nisi ac, consequat ante. Aliquam eleifend turpis interdum diam pretium vestibulum. Vivamus luctus, neque non aliquet rhoncus, arcu felis venenatis leo, eget posuere ex mauris a risus. Mauris sagittis purus sit amet aliquet consectetur. Aenean sit amet nulla turpis. Aliquam erat volutpat. Vestibulum scelerisque sit amet ligula vel consequat. Quisque gravida laoreet magna, quis convallis quam hendrerit sed. Donec fermentum velit massa, a viverra purus vestibulum nec. Aliquam sit amet tempor odio. Fusce auctor nulla eget elit auctor, nec volutpat metus congue. Sed venenatis, ante eu gravida tristique, ante orci suscipit tortor, non feugiat leo eros eu ante.

// Donec eu turpis ut urna semper vestibulum id nec lorem. Morbi quis nunc pretium, pellentesque ipsum eu, fermentum elit. Sed viverra ex tellus, vel tristique orci facilisis at. Sed venenatis velit non sapien rhoncus auctor. Pellentesque a euismod libero. Cras molestie eleifend lacus. Sed fermentum malesuada aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sed varius arcu, eget porta nisi. Proin egestas convallis ornare. In sit amet turpis eget orci varius vulputate. Curabitur bibendum erat a tellus posuere, at tempor tellus condimentum. Suspendisse vitae nulla risus. Vivamus aliquam dolor et massa tincidunt tempus. Integer varius urna quis eros accumsan, quis ultrices lacus pulvinar. Donec viverra tortor sit amet est viverra aliquam.

// Sed sed ante non eros rhoncus scelerisque. Sed pellentesque hendrerit varius. In a bibendum lorem, quis pharetra enim. Curabitur sagittis at urna eget facilisis. Mauris condimentum mauris in dolor posuere, ut efficitur sem pellentesque. Nam elementum leo libero, sed pharetra urna gravida in. Praesent tortor neque, placerat in congue eget, sagittis nec mi. Quisque viverra ex ut quam rutrum, non accumsan ligula ullamcorper. Donec aliquet metus eros, a mollis ipsum finibus at. Cras feugiat odio eu diam feugiat, a consequat sem blandit. Vivamus efficitur dolor ex. Suspendisse sit amet ultrices nibh, quis eleifend quam. Ut vel ante malesuada, luctus felis at, facilisis lectus. Aliquam at lobortis erat. Aenean tristique sodales lacus, dignissim dictum nulla laoreet vel. Vivamus maximus egestas interdum. `

let loremIpsum = "holaet  hola hola hola hola hola como. estas! et et. hola."

let loremIpsumWords = 0

let loremIpsumCache = ""
let loremIpsumArray = []
let foundLetter = false

// BONUS 1
for (i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === " ") {
        foundLetter = false

    }
    else {
        if (!foundLetter) {
            foundLetter = true
            ++loremIpsumWords
        }

    }


}

console.log("La palabra tiene " + loremIpsumWords + " letras.");

// BONUS 1.2
let contador = 0
function functionContadorPalabras(word) {
    for (i = 0; i < loremIpsum.length; i++) {
        if (loremIpsum[i] === " " || loremIpsum[i] === ".") {
            foundLetter = false



            loremIpsumArray.push({ loremIpsumCache })
            if (loremIpsumCache.toUpperCase() === word) {
                contador++
            }
            loremIpsumCache = ""
        }
        else {
            if (!foundLetter) {
                foundLetter = true
                ++loremIpsumWords
            }

            loremIpsumCache = loremIpsumCache + loremIpsum[i]
        }


    }
    console.log("La palabra se repite " + contador + " veces.");

}


functionContadorPalabras('hola'.toUpperCase())

//Bonus 2 - Palindrome.

let phraseToCheck = "Andreu";
let isPalindrome = false;

let z = 0;
let phraseToCheckWithLetter = "";

while (z<phraseToCheck.length) {
    if (phraseToCheck[z].toUpperCase() >= "A" && phraseToCheck[z].toUpperCase() <= "Z") {
        phraseToCheckWithLetter = phraseToCheckWithLetter + phraseToCheck[z].toUpperCase();
    }
    z++;
}
let y = phraseToCheckWithLetter.length-1;
//console.log(phraseToCheckWithLetter);

for (x = 0; x < y; x++) {
 
    if (phraseToCheckWithLetter[x] === phraseToCheckWithLetter[y]) {
        isPalindrome = true;
    } else {
        //console.log("X: " + x + phraseToCheckWithLetter[x]);
        //console.log("Y: " + y + phraseToCheckWithLetter[y]);
        isPalindrome = false;
        break;
    }
    y--;
    //console.log(isPalindrome);
}

if (isPalindrome) {
    console.log("La palabra " + phraseToCheck + " es palíndrome.");
} else {
    console.log("La palabra " + phraseToCheck + " NO es palíndrome.");
}

