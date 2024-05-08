// Iteration 1: Names and Input

let hacker1 = "Jonny"; //Jonny
let hacker2 = "Daniela"; //Dani


console.log(`The driver's name is ${hacker1}.`);

console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {(hacker1.length === hacker2.length) 
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}


// Iteration 3: Loops
//Jonny
let spaceCapName = ""
let trimmedName =""

for (let i = 0; i < hacker1.length; i++) {
    spaceCapName += hacker1[i].toUpperCase() + " ";
    trimmedName = spaceCapName.trim();
     
}
console.log(trimmedName);
//Dani
let reverseHacker2 = "";
for (let k =hacker2.length-1; k>=0; k--){
    reverseHacker2 +=hacker2[k];
   
}
console.log(reverseHacker2);


if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
} else if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else {
    console.log("Yo, the navigator goes first, definitely.");
}




//Bonus 1 - Long text count


let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque metus ante, non ornare magna tempor et. Nunc egestas orci facilisis, tincidunt ligula dictum, vehicula enim. Cras varius luctus leo sed rutrum. In lobortis risus eget augue condimentum scelerisque. Integer elementum aliquam suscipit. Cras sit amet purus vel erat venenatis tempor sit amet sed lectus. In at felis eu urna scelerisque lacinia ut in arcu. Praesent cursus dignissim felis, a sagittis tortor aliquet at. Proin vehicula pulvinar ante, sed sollicitudin dui rhoncus in. 

Aenean lobortis placerat rutrum. Ut sit amet molestie purus. Integer a est et non quam ultricies dictum. Nam pharetra consectetur mattis. Vestibulum efficitur, nulla vel interdum ultricies, massa odio dictum arcu, vitae eleifend est justo vitae est. Donec justo ante, ultrices sit amet vestibulum id, luctus posuere velit. Nullam ultricies magna sit amet vulputate gravida. Donec volutpat aliquam nibh. Aliquam luctus porta malesuada.

Nulla vel leo vehicula, commodo lacus at, iaculis lectus. Ut lobortis ipsum at nibh sodales, sit amet interdum nulla venenatis. Ut quis sodales felis. Sed feugiat purus ipsum, nec faucibus odio sodales sed. Sed malesuada quis libero ut euismod. Morbi pulvinar libero dui, quis accumsan metus lobortis at. Curabitur sed hendrerit nibh, vitae tincidunt eros. Cras dignissim placerat viverra. Nullam tempus tempus ligula. Praesent interdum, justo vel efficitur aliquam, erat sapien pretium risus, eu imperdiet ipsum urna in arcu.`;

let splitText = longText.split(" ");
console.log(splitText.length+1);


// Count et

let countEt= "";

for (let m = 0; m<=longText.length; m++){
    const howMany = longText[m] + longText[m+1] + longText[m+2];

    if(howMany === " et"){
        countEt++
    }
} console.log(countEt)


// Bonus 2 - Palindrome

let phraseToCheck = "Amor, Roma";
let phraseWithoutPunc = "";

for (let l = 0; l < phraseToCheck.length; l++) {
    let char = phraseToCheck[l].toLowerCase();
    if (char >= 'a' && char <= 'z') {
        phraseWithoutPunc += char;
    }
}

console.log(phraseWithoutPunc);

let backPali = "";
for (let t = phraseWithoutPunc.length-1; t >= 0 ; t--){
    backPali += phraseWithoutPunc[t];
}
console.log(backPali)

if (backPali === phraseWithoutPunc){
    console.log("It's a Palindrome!!!")
}else{
    console.log("It's not :(")
}

