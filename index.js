// Iteration 1: Names and Input
const hacker1 = "Jinisha";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Felipe";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;
if(hacker1Length > hacker2Length){
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
} else if(hacker2Length > hacker1Length ){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}

// Iteration 3: Loops
let result = "";
for(let i=0; i<hacker1Length; i++){
    result += hacker1[i].toUpperCase();
    if (i<hacker1Length-1){
        result += " ";
    }
    //console.log(hacker1[i].toUpperCase() + " ");
}

console.log(result);


let result2 = "";
for(let i=hacker2Length-1; i>=0; i--){
    result2 += hacker2[i];
}

console.log(result2);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
}
else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

//Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo ex, laoreet a diam non, volutpat fringilla massa. Vestibulum ultricies, ante ut vulputate congue, arcu erat ultrices leo, ac commodo quam mauris a urna. Vestibulum venenatis leo felis, in congue lacus semper nec. Fusce in dignissim nisi. Vestibulum tortor magna, lobortis ac sodales ut, faucibus quis massa. Maecenas imperdiet ligula sit amet enim eleifend feugiat. Praesent imperdiet aliquet lacinia. Etiam eleifend libero rutrum, sagittis augue sed, dictum sem.

Etiam consequat, eros sed tempor ultricies, mi turpis porttitor ipsum, ac ultrices nunc dolor sit amet turpis. Ut at ultrices turpis. Nunc at lectus lobortis, ultrices lectus a, efficitur urna. Integer in nisi eu arcu malesuada rutrum in tincidunt justo. Ut rutrum nunc eu pharetra pellentesque. Donec facilisis molestie arcu, a dictum dolor volutpat sed. Ut aliquet ligula eget ex vulputate congue. Pellentesque molestie vehicula velit, in vestibulum lacus posuere non. Ut diam leo, molestie sit amet dolor quis, luctus volutpat massa. Donec laoreet purus id aliquam condimentum. Ut tempor nisl varius congue facilisis. Mauris fringilla arcu non rhoncus sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum justo nisl, semper mollis est vitae, malesuada dictum orci. Mauris sed pretium metus.

Praesent posuere dui nibh, sit amet malesuada purus consectetur nec. Nullam sodales sodales ex pharetra efficitur. Aliquam erat volutpat. Phasellus eu justo cursus, sodales mauris quis, consequat ante. Donec pharetra, dui at tempor ullamcorper, magna turpis sagittis dolor, at egestas tellus elit vitae lacus. Suspendisse potenti. Aliquam sit amet ornare massa, a cursus turpis. Nunc eget magna ut arcu scelerisque sagittis et in est. Nam non augue massa. Nulla imperdiet vulputate sem in consectetur. Curabitur varius velit ac urna ornare sagittis. Donec et lorem id felis blandit iaculis. Nullam in efficitur tellus. Morbi eleifend dui sed nibh tempus aliquet. Phasellus risus leo, finibus sed mi ac, euismod volutpat magna. Proin id lectus id erat hendrerit malesuada elementum quis leo.`;

const updatedText = longText.replaceAll('\n\n'," ");
const textArray = updatedText.split(" ");
console.log(textArray.length);

let count = textArray.filter((word) => (word === `et`));

console.log(count.length);

//Conus 2
const phraseToCheck = `Was it a car or a cat I saw?`;
const lowerCaseString = phraseToCheck.toLowerCase();
const plainText = lowerCaseString.replaceAll(/[^a-zA-Z0-9]+/g, "");
console.log(plainText);
const stringLength = plainText.length;
let palindrome = true;
for(let i = 0; i< Math.floor(stringLength/2); i++){
    if(plainText[i] != plainText[stringLength - 1 - i]){
        palindrome = false;
        break;
    }
}

if(palindrome){
    console.log("String is palindrome");
} else {
    console.log("String is not palindrome")
}