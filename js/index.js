// Iteration 1: Names and Input
let hacker1 = 'Walison';
    console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Jandson';
    console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops
//3.1
let driver = '';
for (let i = 0; i < hacker1.length; i++) {
    driver += hacker1[i] + ' '
}
console.log(driver.toUpperCase());

//3.2
let navigator = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigator += hacker2[i]
}
console.log(navigator);

//3.3
if (hacker1.localeCompare(hacker2) === -1) {
    console.log('The driver\'s name goes first.');
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log('Yo, the navigator goes first definitely.');
} else {
    console.log('What?! You both have the same name?');
}

//Bônus 1:
let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus lectus, laoreet eu odio at, ullamcorper aliquam dui. Aenean eleifend viverra tortor at rutrum. Nam et nisl nec augue tincidunt tincidunt in eu nunc. Phasellus vel consequat velit. Maecenas pulvinar lacus vehicula, vestibulum felis in, tincidunt ante. Vivamus a eros a lacus efficitur euismod eget at elit. Maecenas non ipsum varius, consequat quam id, eleifend lorem. Duis et enim ut risus suscipit placerat. Nam fringilla aliquet ante, vel auctor ante mattis eget. In vitae rutrum enim. Suspendisse aliquam luctus tellus ut varius. Suspendisse pellentesque elit tellus, ut feugiat nunc semper pulvinar. Vivamus scelerisque facilisis aliquet. Praesent sed risus rutrum, convallis nunc eget, viverra ipsum. Maecenas vitae lorem sed diam congue fringilla sodales at magna. Etiam tempus ut nulla sit amet luctus. 
Donec finibus erat quis interdum fringilla. Nullam condimentum neque ut convallis ultrices. Aliquam fermentum mattis placerat. Proin fermentum urna ultrices dui posuere ullamcorper. Aliquam et auctor leo, quis scelerisque est. Praesent in ullamcorper odio. Aliquam tincidunt efficitur interdum. Proin pharetra consequat leo eu bibendum. Sed venenatis purus quis nisi vehicula, sit amet porta dui finibus. Pellentesque eu est neque. Quisque dapibus, sapien at dignissim sodales, ante eros dictum libero, in ornare neque magna ultrices ipsum. Nullam efficitur viverra laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc mi nunc, cursus sit amet dapibus ut, imperdiet in dolor. Maecenas sodales bibendum ipsum vitae interdum. Vivamus aliquet, est placerat sagittis tincidunt, arcu dolor dignissim turpis, non vulputate est mauris eget leo. 
In nec quam at turpis gravida lobortis. Sed consequat tortor quis lacus dictum, a facilisis neque finibus. Curabitur fringilla aliquam felis eget porta. Mauris interdum sapien posuere lacus fringilla, at dictum ipsum viverra. Fusce sit amet dui bibendum massa feugiat hendrerit eget quis justo. Curabitur eget augue dui. Duis massa ipsum, blandit sed ante ut, auctor fermentum odio. Morbi lobortis eros quis mauris semper tempor. Maecenas vitae magna nisi. Quisque tincidunt tellus vel purus tincidunt, nec rhoncus ligula pulvinar. Phasellus id diam ut est interdum vestibulum at vel nisl. Mauris felis ex, pellentesque non mi sit amet, varius suscipit orci. Integer ultricies, urna quis ultricies pulvinar, libero odio rutrum odio, a feugiat felis justo quis mi. Sed id turpis ac risus scelerisque rutrum.`

let countWords = 0;
for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === ' ' || i + 1 === paragraph.length) {
        countWords += 1
    }
}
console.log(`the number of words is ${countWords}.`);

let countEts = 0;
let newParagraph = paragraph.split(' ');
for (let i = 0; i < newParagraph.length; i++) {
    if (newParagraph[i] === 'et') {
        countEts += 1
    }
}
console.log(`the number of times the Latin word et appears is ${countEts}.`);

//Bônus 2:
function isPalindrome(word) {
    word = word.toLowerCase();
    word = word.replaceAll(' ', '');
    word = word.replaceAll(',', '');
    let invertWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        invertWord += word[i];
    }
    return word === invertWord;
}

let testWord = 'A man, a plan, a canal, Panama';
console.log(isPalindrome(testWord));