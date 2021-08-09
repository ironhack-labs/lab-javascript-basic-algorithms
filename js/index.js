// Iteration 1: Names and Input

//1.1-1.4
const hacker1 = 'hoonsung';
console.log(`"The driver's name is ${hacker1}"`);

const hacker2 = 'hbc';
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals


//2.1

if (hacker1.length > hacker2.length) {
    console.log(`"The driver has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`"The navigator has ${hacker2.length} characters.`);
} else {
    console.log(`" ${hacker1.length} characters!!`);
}

// Iteration 3: Loops

//3.1
const hacker1Up = hacker1.toUpperCase();
const driverArr = hacker1Up.split("")
const driverName = driverArr.join(" ")
console.log(driverName);

//3.2
const hacker2First = hacker2.slice(0, 1);
const hacker2FirstUp = hacker2First.toUpperCase();
let hacker2Name = `${hacker2FirstUp}` + hacker2.slice(1);
const navigatorArr = hacker2Name.split("");
let navigatorArrRev = navigatorArr.reverse();
const navigatorName = navigatorArrRev.join("");
console.log(navigatorName);

//3.3
if (hacker1[0].toLowerCase() < hacker2[0].toLowerCase()) {
    console.log("The driver's name goes first.")
} else if (hacker1[0].toLowerCase() > hacker2[0].toLowerCase()) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}


//Bonus1

const lorem3times = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit, nisl sed tempus pellentesque, mi elit auctor nunc, vel posuere dolor odio eu leo. Phasellus a accumsan tellus. Nam mi erat, sodales id semper sit amet, tincidunt a sem. Quisque dolor quam, consectetur quis augue ut, molestie rhoncus nunc. Quisque finibus turpis dui, id dictum quam tempus vitae. Curabitur sem magna, tincidunt eget facilisis at, sodales in nibh. Vestibulum iaculis aliquet lectus, vitae ullamcorper justo suscipit ut. Fusce non ex malesuada, ullamcorper odio in, dapibus nisi. Vivamus malesuada libero ac suscipit fringilla. Etiam blandit, erat eget malesuada gravida, tortor magna maximus mauris, ut ornare ligula nibh in ante. Ut scelerisque urna dolor, a ullamcorper augue tincidunt non. Nulla eros velit, pretium at elit in, accumsan mattis sapien. Aliquam dictum, ante eget tincidunt interdum, sem quam sodales lacus, in molestie tortor risus vel ligula.

Etiam suscipit lacinia tortor, sit amet rutrum lacus vestibulum id. Pellentesque posuere sem id mi laoreet vehicula. Nullam egestas nibh tortor, ut pulvinar urna sollicitudin a. Curabitur nisi dui, lobortis id massa non, gravida luctus nisl. Mauris venenatis dolor vel eros porttitor imperdiet. Cras scelerisque nisi at tincidunt fringilla. Integer elementum egestas odio, pulvinar egestas felis efficitur non. Sed ut arcu viverra, dapibus ex eget, ultricies leo. Phasellus lobortis massa sit amet nulla volutpat, et feugiat nulla tincidunt. Cras tempus leo at tortor dictum ultrices. Suspendisse luctus vulputate molestie. Nam vitae augue fermentum ligula hendrerit hendrerit. Curabitur nec sollicitudin magna. Quisque interdum malesuada dolor nec rutrum.

Nam commodo quam et ante dictum, eget luctus magna mollis. Aliquam non nisl ligula. Vivamus massa felis, placerat non sollicitudin sit amet, consequat a ligula. Curabitur dapibus, erat eu consectetur euismod, dolor dui placerat justo, id euismod purus orci vitae est. Nunc ut sapien eu augue rhoncus gravida ut sit amet lorem. Nam at diam eget ligula pulvinar varius. Pellentesque fringilla nibh vitae enim molestie gravida. Morbi vulputate nunc vitae faucibus euismod. In ornare mauris enim. Donec ac sapien porta, dapibus risus id, aliquam lacus. Proin sit amet enim quis metus vulputate ornare vel non dui.`

function loremIpsumCounter(str) {

    let splitLorem = str.split(" ")

    return splitLorem.length;

}

console.log(loremIpsumCounter(lorem3times));

function EtCounter(str) {

    let splitLorem = str.split(" ")
    let EtNumber = 0;

    for (let i = 0; i < splitLorem.length; i++) {

        if (splitLorem[i] === 'et') {

            EtNumber++
        }
    }

    return EtNumber;
}

console.log(EtCounter(lorem3times));

//Bonus2
function isAPalindrome(str) {
    const strToLower = str.toLowerCase()
    const letters = strToLower.split("")
    const revLetters = letters.slice().reverse();
    const joinedLetters = letters.join("");
    const joinedReverseLetters = revLetters.join("");
    if (joinedLetters === joinedReverseLetters) {
        return true;
    } else {
        return false;
    }
};
console.log(isAPalindrome('Helloworld'))
console.log(isAPalindrome('AmorRoma'))
console.log(isAPalindrome("racecar"))
console.log(isAPalindrome("stackcats"))