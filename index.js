// Iteration 1: Names and Input

let hacker1 = "Antonio"; 

console.log("The driver's name is " + hacker1)

let hacker2 = "Herminia"

console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`) }
        else if (hacker1.length < hacker2.length) {
            console.log(`It seems that the navigator has the longuest name, it has ${hacker2.length} characters`) }
                else {
                    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
                }


// Iteration 3: Loops

for (i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
}

for ( i = hacker1.length - 1; i > -1; i--) {
    console.log(hacker1[i]);
}


let compareH1H2 = 0;

let hacker1Compare = hacker1.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
let hacker2Compare = hacker2.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();


for (i = 0; i <= hacker1Compare.length && i <= hacker2Compare.length; i++) {
    if (hacker1Compare[i] < hacker2Compare[i]) {
        compareH1H2 += 1; break;
    } else if (hacker2Compare[i] < hacker1Compare[i]) {
        compareH1H2 -= 1; break;
    } else if (hacker1Compare[i] == hacker2Compare[i]) {
        continue
    }
    }

    if (compareH1H2 == 1) {
        console.log("The driver's name goes first.")
    } else if (compareH1H2 == -1) {
    console.log("Yo, the navigator goes first, definitely.")   
    } else {
       console.log("What?! You both have the same name?")     
    }





let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet pretium pellentesque. Curabitur nec nisi lacinia nunc molestie porta ac id enim. Maecenas id sem feugiat, ornare nulla ac, tincidunt turpis. Nullam nibh quam, eleifend quis ultrices non, vehicula ac nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus orci arcu, pretium vel nunc et, rutrum suscipit libero. Donec ac dui blandit ante semper ultricies. Phasellus suscipit tortor nec neque dignissim, nec pretium ipsum tristique. Integer faucibus sapien massa, nec tristique velit pulvinar quis. Nam vehicula gravida metus in condimentum. Maecenas rutrum quis quam feugiat. Mauris nec mi vel sem consequat dignissim interdum quis lorem. Etiam egestas iaculis massa ac bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eu libero sit amet enim facilisis blandit non quis lorem. Morbi vulputate molestie neque ut mattis. Curabitur euismod, ligula vitae consectetur porta, metus lacus dapibus mauris, tristique sodales ex risus eu tellus. Quisque eu est massa. Proin fermentum cursus tortor, eu condimentum mi. Sed placerat, velit id sodales egestas, tellus purus vulputate velit, et ornare arcu metus non lorem. Praesent sapien nisl, dignissim sit amet blandit venenatis, maximus vel nisi. Maecenas euismod sit amet libero id mollis.In interdum pulvinar tellus quis tempus. Sed tempus bibendum lectus quis pulvinar. Maecenas nisi magna, pellentesque nec aliquet at, hendrerit a tellus. Praesent eu libero tellus. Nulla tincidunt dui dictum tortor volutpat ornare. In eget semper risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam eu ornare mauris.";

let wordsText = longText.split(' ');

console.log(`The text has ${wordsText.length} words.`);


// Bonus 1

let etWord = 0

for ( i = 0; i < wordsText.length; i++) {
    if (wordsText[i] === "et") {
        etWord++;
    }
}
console.log(`The "et" word appears ${etWord} times in the text.`);

// Bonus 2

let phraseToCheck = "step on no pets"
let phraseToCheckOnlyAlfa = phraseToCheck.toLowerCase().replace(/\s/g, "")


let palindrome = true;
let halfPhraseToCheck = Math.trunc(phraseToCheckOnlyAlfa.length / 2);

for (i = 0; i < halfPhraseToCheck; i++) {
    if (phraseToCheckOnlyAlfa[i] == phraseToCheckOnlyAlfa[phraseToCheckOnlyAlfa.length -1 - i]) {
        continue
    } else {
        palindrome=false; break;
    }
}

if (palindrome === true) {
    console.log(`${phraseToCheck} is a palindrome phrase.`)
} else {
    console.log(`${phraseToCheck} is not a palindrome phrase.`)
}