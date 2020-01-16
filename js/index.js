// Iteration 1: Names and Input
let hacker1 = `Cesar`;
console.log(`The driver's name is ${hacker1}`);

let hacker2 = `Jota`;
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has a longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.lenght} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let fancyHacker1 = hacker1.split("").join(" ").toLocaleUpperCase();

let fancyHacker2 = hacker2.split("").reverse().join("");

console.log(fancyHacker1);
console.log(fancyHacker2);

let hackers = [fancyHacker1, fancyHacker2];

let compareHackers = fancyHacker1.localeCompare(fancyHacker2);

if (compareHackers === -1) {
    console.log(`The driver's name goes first`);
} else if (compareHackers === 1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What? You both have the same name?`);
}

// Bonus 1
let lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et quam volutpat risus congue ullamcorper cursus vitae erat. Sed mollis dolor at tempor tempor. Integer at dui metus. Quisque auctor elit egestas euismod iaculis. Phasellus eget aliquet odio. Nunc rhoncus id mi a euismod. Sed pulvinar massa leo, ut aliquet justo faucibus nec. Integer posuere tincidunt aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc arcu eros, dapibus eu nisi blandit, ultricies eleifend nunc. Aliquam in felis eros. Donec eget magna volutpat, ultrices neque in, posuere massa. Maecenas interdum nisl nibh, a pellentesque libero ultricies non.
Nam feugiat tortor vel tellus tincidunt, a rutrum tellus sagittis. Curabitur pharetra neque ac lacinia ultrices. In in mauris et nisl tempus laoreet. Nulla ut lorem fermentum, dignissim massa et, interdum elit. Fusce malesuada non nulla eu vulputate. Cras ornare elit et lacus vehicula fermentum. Aenean posuere maximus porttitor. Proin eget nunc in lacus mollis maximus a pretium quam. Pellentesque ornare scelerisque justo nec pretium. Aliquam vel felis ut urna porta ornare a et dui. Curabitur est est, dignissim mattis mi nec, maximus euismod purus. Nulla finibus, massa eu finibus molestie, odio tellus tincidunt diam, ut fermentum quam turpis nec tellus. Aliquam consectetur nisi quis enim ornare commodo. Nulla vel enim ut arcu accumsan commodo. Nam ac nisi posuere ante facilisis dapibus quis at nunc. Fusce fermentum est lacinia neque vehicula, vel tempor libero sagittis.
Nunc hendrerit facilisis odio, ut facilisis nibh aliquam in. Suspendisse potenti. Nulla lobortis pellentesque orci in posuere. Integer a tellus sed felis euismod commodo. Aenean turpis magna, laoreet eu velit vel, maximus mattis tortor. Integer at leo id arcu imperdiet consectetur. Curabitur eget dapibus eros, et maximus nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut commodo turpis sed lectus lobortis, ac pulvinar justo malesuada. Maecenas quis porttitor sapien. Duis auctor quam ante, vitae maximus lorem fringilla sit amet. Quisque dictum, metus vitae aliquet maximus, nunc massa ultrices nisi, quis vulputate ante mi vitae orci. Fusce sit amet mattis ex, sit amet tincidunt justo et.`;

console.log(lipsum.split(" ").length);

let qtyWords = lipsum.split(" ");

let et = 0;
let find = `et`;

qtyWords.forEach(word => (word === `et`) ? et++ : et);
console.log(et);

// Palindrome

function palindrome(phraseToCheck) {

    let filterPhrase = phraseToCheck.split("").filter((character) => {
        if (character === `,` || character === `.` || character === `!` || character === `?` || character === ` `) {
            return false
        }
        return true
    });

    let filtredPhrase = filterPhrase.join("");

    let reversePhrase = filtredPhrase.split("").reverse().join("").toLocaleLowerCase();

    let lowerCasedPhrase = filterPhrase.join("").toLocaleLowerCase();

    if (reversePhrase === lowerCasedPhrase) {
        return `Cool, its a palindrome`;
    } else {
        return `Its a normal phrase, not a palindrome`;
    }
}

palindrome(`put it up`);