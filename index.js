// Iteration 1: Names and Input
let hacker1="Garry";
let navigatorName="Gii";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${navigatorName}`);

// Iteration 2: Conditionals
const length=hacker1.length;
const navigatorLength=navigatorName.length;
if(length>navigatorLength ){
    console.log(`The driver has longest name it has ${length}characters`)
}else if(length===navigatorLength){
    console.log(`Wow you both have equally long names`)
}
else{
    console.log("It seems that the navigator has the longest name")
}


// Iteration 3: Loops
let capitalHacker1Name = "";
for (let i = 0; i < hacker1.length; i++) {
    capitalHacker1Name += (hacker1[i].toUpperCase() + " "); 
}

console.log(capitalHacker1Name);

// 3.2
let reverseNavigatorName = "";
for (let i = navigatorName.length; i > 0; i--) {
    reverseNavigatorName += navigatorName[i-1];
}
console.log(reverseNavigatorName);

// 3.3

let counter = 0
if (hacker1.length > navigatorName.length) {
    counter = navigatorName.length;
} else {
    counter = hacker1.length;
}

let firstLetterHacker1 = "";
let firstLetterNavigator = "";


for (let i = 0; i < counter; i++) {

firstLetterHacker1 = hacker1[i];
firstLetterNavigator = navigatorName[i];

if (firstLetterHacker1 < firstLetterNavigator) {
    console.log(`The driver's name goes first.`);
    break;
} else if (firstLetterHacker1 > firstLetterNavigator) {
        console.log(`Yo, the navigator goes first, definitely.`);
        break;
    }
    else if (i === counter -1) {
        console.log(`What?! You both have the same name?`)
    }

}

if(hacker1.localeCompare(navigatorName)<0){
    console.log("driver goes first")
}else if(hacker1.localeCompare(navigatorName)>0){
    console.log("navigator goes first")
}else{
    console.log("you have same name")
}

//Bonus 1
let longText= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare hendrerit maximus. Nunc ultrices dapibus hendrerit. Nulla hendrerit maximus pulvinar. Duis a massa leo. Pellentesque pretium sed magna non feugiat. Sed sagittis sollicitudin metus, ut pharetra metus commodo sed. In nunc eros, suscipit sed rutrum at, hendrerit non lectus. Aliquam eu volutpat mi. Duis varius diam ut orci lacinia, non varius lacus blandit. Curabitur eget ipsum eget odio ullamcorper egestas. Praesent ultrices ornare enim non iaculis. Vivamus in magna purus. Donec et porttitor purus.
Vivamus eu faucibus leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam venenatis ornare nibh nec fermentum. Maecenas consectetur elit sed ligula luctus, eget fermentum elit dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius leo sed libero tincidunt fermentum. Etiam at justo non sem feugiat venenatis sed a neque. Nulla facilisis hendrerit felis sit amet aliquam. Sed convallis malesuada nibh. Nam tempor viverra gravida. Morbi ut sodales orci, sit amet sagittis lectus. Aenean sed faucibus lorem, et hendrerit ante. Aenean consequat, enim vitae efficitur pharetra, risus ligula consequat magna, ut commodo mi dolor eget mauris. In augue leo, finibus sed augue ut, porttitor sagittis felis.
Vivamus ligula justo, efficitur pulvinar interdum in, hendrerit id velit. Sed dictum ligula fermentum orci fringilla, vitae vulputate lacus feugiat. Pellentesque finibus, diam in egestas mollis, quam justo congue mauris, sit amet venenatis dui ex ac tellus. Phasellus imperdiet justo a tortor vulputate, in congue risus suscipit. Sed lobortis aliquam leo, et pharetra tellus semper eu. Nam ac ornare urna. Aliquam erat volutpat. Suspendisse eu malesuada enim, vitae aliquet leo. Nunc ligula nibh, pharetra nec enim id, commodo tristique enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus est non mi ornare commodo. Curabitur sollicitudin nulla eget dolor pulvinar, et volutpat erat vulputate`

let text = 0;
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        text++;
    }
}
console.log(text);

//ET TASK
let etCount = 0;
for (let i = 0; i < longText.length-3; i++) {
if (longText[i].toLowerCase() + longText[i+1].toLowerCase()  + longText[i+2].toLowerCase() + longText[i+3].toLowerCase() === " et ") {
    etCount++;
 }
}
console.log(etCount);

//Bonus 2


let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedPhrase = ""
let revertCleanedPhrase = ""

function isOnlyLetters(str) {
    return /^[A-Za-z]+$/.test(str);
}

for (let i = 0; i < phraseToCheck.length; i++) {
    //console.log(phraseToCheck[i]);
    if (isOnlyLetters(phraseToCheck[i]) === true) {
        cleanedPhrase += phraseToCheck[i].toLowerCase();
    }
}

for (let i = cleanedPhrase.length - 1; i >= 0; i--) {
    revertCleanedPhrase += cleanedPhrase[i];
}

console.log(revertCleanedPhrase + '   '+ cleanedPhrase)

if (cleanedPhrase === revertCleanedPhrase) {
    console.log(`This is a Palindrome`)}
    else {console.log(`This is not a Palindrome`);
    }





