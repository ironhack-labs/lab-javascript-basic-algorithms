// Iteration 1: Names and Input
//
const hacker1 = "Ivona";
console.log(`The drivers name is ${hacker1}`);

const hacker2 = "Alex";
console.log(`The navigators name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
    
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};


// Iteration 3: Loops
const hacker1Uppercase = hacker1.toUpperCase();
let seperatedChar = "";
let reverseSeperatedChar = "";

for (i=0; i<hacker1Uppercase.length; i++) {
    seperatedChar = seperatedChar + `${hacker1Uppercase[i]}, `;
}
console.log(seperatedChar);

for (i=hacker1.length-1; i>=0; i--) {
    reverseSeperatedChar = reverseSeperatedChar + `${hacker1[i]}, `;
}

console.log(reverseSeperatedChar)



const hacker1FirstChar = hacker1[0];
const hacker2FirstChar = hacker2[0];

if (hacker1FirstChar.localeCompare(hacker2FirstChar) === 1) {
    console.log("Yo, the navigator goes first definitely.");
}
else if (hacker1FirstChar.localeCompare(hacker2FirstChar) === -1) {
    console.log("The driver's name goes first.");
} 
else {
    console.log("What?! You both have the same name?");
}

// Bonus 1

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id purus neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam quis lectus id lorem convallis commodo quis ac elit. Morbi eu metus felis. Suspendisse risus leo, tempus a ligula vitae, finibus laoreet risus. Aliquam vitae vestibulum ligula. Mauris non leo sapien. Donec quis leo arcu. Etiam libero nisl, accumsan faucibus lacinia non, rhoncus quis dolor.
Quisque tempor vulputate tempor. Mauris scelerisque augue tortor, eu sagittis orci hendrerit et. Integer interdum efficitur felis auctor consequat. Morbi pulvinar mauris non ipsum luctus, a porttitor nibh porta. Aenean vulputate luctus nulla, sit amet tristique eros rutrum sed. Vestibulum consectetur dolor sem, in rhoncus mi rutrum sed. Aenean luctus ipsum et ante pretium, ut finibus diam blandit. Cras quis diam in eros sollicitudin tempus sed eu neque. Aliquam euismod tortor lectus, eget maximus lectus pellentesque non. Cras cursus, dui non facilisis iaculis, dui mi fermentum nibh, a mattis lorem ex in quam. Pellentesque eget viverra ante.
Aliquam non nisl ultricies, faucibus felis sed, egestas dui. Nam efficitur neque ut quam elementum congue. Praesent arcu diam, egestas non ipsum non, ultricies imperdiet justo. Sed at elementum ligula, et condimentum augue. Phasellus eget urna vel lectus lobortis convallis. Praesent vulputate commodo dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan orci in nisl porttitor, et congue leo efficitur. Curabitur sodales lacus sed placerat porttitor. Quisque nec quam pulvinar, auctor libero nec, porta tellus. Vivamus vitae pellentesque magna. Fusce blandit magna ac justo ornare, quis congue dui aliquet. Vivamus eu arcu urna.
`

const paragraph2 = "Lorem, ipsum, et dolor, sit, amet, consectetur,  et " 

let countParagraph = paragraph.length
let numberOfWordsPar1 = 0;
for (i=0; i<paragraph.length; i++) {
    if (paragraph[i]===" "){
        numberOfWordsPar1 = numberOfWordsPar1 + 1 ;
    }
}
console.log(numberOfWordsPar1);

let numberOfEt = 0;
for (i=0; i<paragraph.length; i++) {
    if (paragraph[i]+paragraph[i+1]+paragraph[i+2]+paragraph[i+3] === " et ") {
    numberOfEt = numberOfEt + 1;
}
else if (paragraph[i]+paragraph[i+1]+paragraph[i+2]+paragraph[i+3] === " et.") {
    numberOfEt = numberOfEt + 1;
}
}
console.log(numberOfEt);

/* Question for Karina

for (i=0; i<paragraph2.length; i++) {
    
    if (paragraph2.includes(" et ")) {
        numberOfEt = numberOfEt + 1;
        console.log("Hi");
    }
    else if (paragraph.includes(" et."[i])){
        numberOfEt = numberOfEt + 1;
   
}
*/


// Bonus 3//

let phraseToCheck = "Amor, Roma";
let phraseToCheckToLowercase = phraseToCheck.toLowerCase();
let reverseChar = "" ;
let phraseToCheckToLowercaseNoSpaces ="";
let reverseCharNoSpaces ="";


for (i = phraseToCheck.length - 1; i>=0; i--) {
    reverseChar += phraseToCheckToLowercase[i];
}

for (i=0; i<phraseToCheckToLowercase.length; i++) {
    if (phraseToCheckToLowercase[i] != " " && phraseToCheckToLowercase[i] != ",") {
        reverseCharNoSpaces += phraseToCheckToLowercase[i];
    }
}

for (i=0; i<phraseToCheck.length; i++) {
    if (phraseToCheckToLowercase[i] != " " && phraseToCheckToLowercase[i] != ",") {
        phraseToCheckToLowercaseNoSpaces += phraseToCheckToLowercase[i];
    }
}

if (phraseToCheckToLowercaseNoSpaces === reverseCharNoSpaces) {
    console.log("It is a palindrome !");
}


