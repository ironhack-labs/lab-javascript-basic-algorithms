// Iteration 1: Names and Input
function inputNames (hacker1, hacker2) {
    
    if (hacker1 === undefined || !hacker1.length) {
        alert("Please input driver´s name");
        return;
    }

    if (hacker2 === undefined || !hacker2.length) {
        alert("Please input navigator´s name");
        return;
    }

    const quotes1 = "The driver's name is" ;
    const quotes2 = "The navigator's name is";

    console.info(quotes1, hacker1);
    console.info(quotes2, hacker2);

    longestNames(hacker1, hacker2);
    charactersCapitals(hacker1);
    charactersCapitals(hacker2);
    charactersReverse(hacker1);
    charactersReverse(hacker2);
    lexicoGraphic (hacker1, hacker2);
}

// Iteration 2: Conditionals
function longestNames (hacker1, hacker2) {
           
    if (hacker1.length > hacker2.length) {
        console.info(`The driver has the longest name, it has ${hacker1.length} characters.`);
    }

    if (hacker1.length < hacker2.length) {
        console.info(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }

    if (hacker1.length === hacker2.length) {
        console.info(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }       
}

// Iteration 3: Loops
function charactersCapitals (hackerName) {
    let newLetter = '';

    for (let i = 0; i < hackerName.length; i++) {
        const hacker = hackerName[i];
        newLetter += hacker;
        newLetter += " ";
    }

    console.info(newLetter.toUpperCase());
}

function charactersReverse (hackerName) {
    let newLetter = '';

    for (let i = hackerName.length - 1; i >= 0; i--) {
        const hacker = hackerName[i];
        
        newLetter += hacker;
    }

    console.info(newLetter);
}

function lexicoGraphic (hacker1, hacker2) {

    const name1 = hacker1.toLowerCase();
    const name2 = hacker2.toLowerCase();

    for (let i = 0; i < Math.min(name1.length, name2.length); i++) {
        const driver = name1[i];
        const navegator = name2[i];
        
        if (driver < navegator) {
            console.info("The driver's name goes first.");
            return;
        } else if (driver > navegator) {
            console.info("Yo, the navigator goes first, definitely.");
            return;
        }
    }

    if (name1.length < name2.length) {
        console.info("The driver's name goes first.");
        return;
    } else if (name1.length > name2.length) {
        console.info("Yo, the navigator goes first, definitely.");
        return;
    } else {
        console.info("What?! You both have the same name?");
    }
}

const name1 = prompt("Enter the driver's name");
const name2 = prompt("Enter the navegator`s name");

inputNames(name1, name2);

function generateParagraphs () {
    const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi massa, blandit at porta eu, convallis eu sapien. Cras eget fermentum erat. Donec vulputate pretium tortor vel pretium. Nam dui diam, bibendum id mi at, feugiat placerat velit. Curabitur dapibus urna a magna laoreet egestas. Ut dapibus justo quis malesuada ornare. Pellentesque tincidunt vehicula consectetur. Cras facilisis, ante in pretium sagittis, diam velit suscipit eros, cursus rutrum nunc dolor et lorem. Cras sed tempus lorem. Curabitur et interdum lectus. Nam eu turpis ultrices, dignissim dui et, malesuada nisi. Phasellus ut fringilla nibh. Phasellus bibendum sapien at magna lacinia, eget lacinia eros feugiat. Sed fermentum diam diam, sit amet placerat dolor sagittis eu. Nam ultricies malesuada risus, a vestibulum lacus vestibulum sit amet. Fusce non nulla ut nisi gravida efficitur sit amet porttitor metus. Sed tempus enim vel viverra congue. Aliquam vestibulum, tortor ut cursus maximus, felis felis posuere leo, id facilisis mi urna non massa. Phasellus et suscipit tortor. Morbi tortor enim, venenatis in tincidunt et, lacinia quis odio. Praesent ornare pretium vestibulum. Donec blandit pharetra semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque dapibus vulputate fringilla. Phasellus elit felis, fringilla nec tellus non, laoreet dapibus turpis. Nullam consequat enim sed tristique mattis. Donec lorem quam, volutpat a arcu eget, mollis interdum risus. Nulla facilisi. Praesent a bibendum arcu, ut consectetur magna. Nunc tincidunt ante ac lacus accumsan accumsan. Suspendisse potenti. Vivamus est massa, auctor mollis facilisis in, posuere congue enim. In accumsan, purus sit amet condimentum pulvinar, turpis turpis ultrices turpis, in dictum massa nunc in sem. Duis non interdum mauris. Quisque efficitur ipsum vel odio porta, faucibus posuere quam tempor. In a iaculis dui. Fusce pharetra sapien nibh.";
    const paragraphs = longText.split(' ');
    const countWords = paragraphs.length;
    let countTimes = 0;

    for (let i = 0; i < countWords; i++) {
        const paragraph = paragraphs[i];

        if (paragraph.includes('et')) {
            countTimes++;
        }        
    }
    
    console.log("Número de palabras: ", countWords);
    console.log("Número de veces 'et': ", countTimes);
}

generateParagraphs();

function checkPalindrome (paragraphs) {
    // Extended version developed
    let isPalindrome = true;

    if (paragraphs === undefined) {
        return;
    }

    const newParagraphs = paragraphs.split(" ").join("").replace(/[^a-zA-Z]/g, '').toLowerCase();
        
    for (let i = 0; i < newParagraphs.length / 2; i++) {
        const charFirst = newParagraphs[i];
        const charLast = newParagraphs[newParagraphs.length - 1 - i];
        
        if (charFirst !== charLast) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome ? "This is Palindrome" : "It is not a palindrome";
}

const phraseToCheck = "No 'x' in Nixon";
console.log("Palindromo? ", phraseToCheck);
console.log(checkPalindrome(phraseToCheck));