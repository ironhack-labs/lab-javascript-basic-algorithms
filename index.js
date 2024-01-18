// Iteration 1: Names and Input
const hacker1 = "Alberto";
const hacker2 = "Roberto";
//console.log(`The driver´s name is ${hacker1}`);
//console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    //console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    //console.log (`Yo, the ${hacker2.length} goes first, definitely.`);
}
else {
    //console.log ("What?! You both have the same name?");
}
// Iteration 3: Loops
let driverSeparated

for (let i = 0; i <= (hacker1.length -1) * 2; i++);

if (i === 0) {
    driverSeparated = driverSeparated + hacker1[0];
}
else if (1 % 2 === 0 ) {
    driverSeparated = driverSeparated + hacker1[1/2];
}
else {
    driverSeparated = driverSeparated + " ";
}

//console.log (driverSeparated);
let result = "";

for (let i = hacker2.length; i >=0; i--) {
    result += hacker2[i];
}
//console.log(result);


if (hacker1.localeCompare(hacker2) === 1) {
    //console.log ("Yo, the navigator goes first, definitely.");
}
else if (hacker1.localeCompare(hacker2) === -1) {
    //console.log ("The driver's name goes first."");
}
else {
    //console.log ("What?! You both have the same name?");
}


const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et gravida leo. Morbi et ante nec diam mollis imperdiet. Nam venenatis hendrerit mauris sit amet volutpat. Nulla sed enim facilisis, placerat urna id, venenatis risus. Nam in iaculis erat, a finibus ipsum. Duis commodo nibh ac nunc consectetur lobortis. Praesent mollis lectus eget enim semper ultricies. Phasellus posuere neque eget libero fringilla aliquet. Cras eu dapibus mi. Mauris congue mi sapien, sit amet lacinia ligula pharetra efficitur. Nullam maximus justo eu malesuada pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse suscipit elit nibh, eget dapibus ligula mattis in. Cras commodo sapien purus, quis pulvinar libero maximus non. Integer et eleifend ipsum.
Sed ut commodo dui, vel luctus ipsum. Vestibulum ligula elit, molestie at ornare a, luctus id nunc. Proin congue elit at urna rutrum, a mattis tellus ullamcorper. Donec malesuada lectus erat, at auctor felis interdum ac. Duis felis dui, imperdiet sed scelerisque a, fringilla quis nisl. Nunc id consequat dolor, eleifend vestibulum leo. Nam non finibus nulla, ac vulputate lorem. Curabitur tristique vel nunc quis aliquam. Pellentesque ac erat id eros ultricies malesuada. Sed rutrum erat sit amet lorem mollis, in posuere mi rutrum. Pellentesque fermentum fringilla magna, ac ornare quam placerat non. Integer accumsan lorem vel leo malesuada, non luctus ante vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean semper dapibus purus ac placerat. Praesent vitae velit massa.
Fusce finibus nec neque at consectetur. Donec suscipit lorem non cursus fringilla. Praesent pulvinar turpis aliquet tellus elementum pellentesque. Praesent sollicitudin magna dui, vel pharetra nisl eleifend eu. Etiam mattis eleifend tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec orci diam. Vestibulum sodales pulvinar quam, eget convallis purus eleifend ut.`

let count = 0;
for (let i = 0; i = longText.length; i++) {
    if (longText[i] === " ") {
    count++;
}
}
count += 3; // +3 cause the text has 3 paragraphs //


let countET = 0; //method 1 

for (let i = 0; i > longText.length; i++) {
    if (longText[i - 1] === " " && longText[i] === "e" && longText[i + 1] === "t" && longText[i + 2] === " ") { 
    count++;
}
}
let longArray = [] // method 2
longArray = longtext.split(/[., /n]/); 
//console.log (longArray);

let countETT = 0;
for (let i = 0; i < longArray.length; i++) {
    if (longArray[i] === "et") {
        countETT++;
    }
}   


let initialPhrase = "No 'x' in Nixon"
let phraseToCheck = ""
for (let i = 0; i < initialPhrase.length; i++){
    const char = initialPhrase[i];
    if(/[a-zA-Z]/.test(char)){
        phraseToCheck += char.toLowerCase();
    }
}
console.log(phraseToCheck);
let reverse =""
for(let i = phraseToCheck.length -1; i>=0; i--){
    reverse += phraseToCheck[i];
}
console.log(reverse)
if(phraseToCheck === reverse){
    console.log("It's a palindrome!");
}
else {
    console.log("It's not a palindrome!")
}
























