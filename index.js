// Iteration 1: Names and Input
const hacker1 = "Kumar";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Malu";
console.log(`The navigator's name is ${hacker2}`);
console.log("");
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}
console.log("");

// Iteration 3: Loops
let capsHacker1Name = hacker1.toUpperCase();
//console.log(capsHacker1Name);
let newHacker1Name = ''
for (let i = 0; i<hacker1.length; i++) {
    newHacker1Name += capsHacker1Name[i];
    newHacker1Name += ' ';
}
//console.log(newHacker1Name);

let newHacker2Name = '';
for (let i = hacker2.length-1;i >= 0; i--) {
    newHacker2Name += hacker2[i];
}
console.log(newHacker1Name);
console.log(newHacker2Name);

//console.log(newHacker1Name.localeCompare(newHacker2Name));

//const nameOrder = newHacker1Name.localeCompare(newHacker2Name);
const nameOrder = hacker1.localeCompare(hacker2);
console.log(nameOrder)

if (nameOrder === -1) {
    console.log("The driver's name goes first.") 
} else if (nameOrder === 1) {
    console.log("The navigator goes first, definitely.")  
} else {
    console.log("What?! You both have the same name?");
}

//Bonus

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper, urna nec sodales aliquet, magna orci porta orci, nec hendrerit dolor est at dolor. Vestibulum luctus dolor vitae mauris scelerisque molestie. Vestibulum sodales tortor ac justo rutrum tempus sed nec orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris congue mollis mollis. Nam in dui vel ipsum tristique ultrices. Phasellus auctor venenatis augue et suscipit. Sed at erat felis. In quis purus odio. Curabitur pretium lorem mi, at faucibus turpis eleifend ut. Ut vehicula nisl at maximus gravida. Donec ac massa bibendum, euismod enim eget, condimentum arcu. Aenean et risus at lorem accumsan sodales nec vitae lectus. Maecenas vitae laoreet mi. Aenean sem mi, dignissim non lobortis quis, dictum a urna.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus in quam purus. Suspendisse pretium sit amet neque et faucibus. Proin vitae porta mi. Donec in tempor urna. Aliquam sollicitudin neque quis dignissim sagittis. Donec dolor urna, commodo quis dui ut, convallis sollicitudin sem. Sed quis bibendum magna.

Nullam sollicitudin tincidunt purus, at porttitor velit pretium sed. Nunc ac tellus ut orci sodales mattis quis pulvinar urna. Vivamus cursus sapien a placerat tristique. Vestibulum eget sapien vitae magna cursus sodales et quis purus. Etiam vitae euismod libero. Etiam euismod nisl ante, in pretium nisi ullamcorper sed. Donec euismod feugiat eleifend. Etiam eget sem tincidunt, porttitor dolor vitae, volutpat quam. Integer dignissim felis maximus metus mattis, sagittis dignissim massa convallis. Fusce placerat, eros sed posuere placerat, lacus nisi laoreet erat, eu blandit nisi lectus et dolor. Suspendisse rutrum convallis elementum. Integer ac mauris laoreet, ullamcorper urna eget, interdum ex. Morbi tristique sapien eget orci imperdiet ornare. Vivamus vel sodales ante. Etiam ac nunc ac leo molestie dapibus sed imperdiet libero. Donec dapibus vehicula lorem, sed efficitur odio cursus sed.`
let wordCount = 1;
let countEt = 0;

for (let i = 0; i < longText.length; i++){
    if (longText[i] === " ")
    wordCount++;

    let isEt = longText[i] + longText [i+1];
    if (isEt === "et"){
        countEt ++;
    }
}

console.log(wordCount);
console.log(countEt); 


//Bonus 2



const phraseToCheck = "Taco cat";

let onlyCaps = "";
let reversed = "";

for (let i = 0; i< phraseToCheck.length; i++){
    
    if (phraseToCheck[i] !== " "){
        onlyCaps+= phraseToCheck[i].toUpperCase();
        
    }
}
console.log (onlyCaps);

for (let i = onlyCaps.length -1; i >= 0; i--){
    reversed += onlyCaps[i];
}
console.log (reversed);

if (onlyCaps === reversed){
    console.log (`${phraseToCheck} is a Palidrome!!`);

}
else {
    console.log (`Not a Palindrome :(`);
}
