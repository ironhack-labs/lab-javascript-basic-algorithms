// Iteration 1: Names and Input

let hacker1 = "Guillaume";
let hacker2 = "Louis";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters.")   
}
else if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has "+ hacker2.length + " characters.")
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}


// Iteration 3: Loops


let hacker1Spaced = "";
for (let i = 0; i < hacker1.length ; i++) {
    hacker1Spaced += hacker1[i] +  " ";
}

console.log(hacker1Spaced.toUpperCase());


let hacker2Reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

// Bonus 1

let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis sed ante aliquet scelerisque. Phasellus dignissim turpis varius ligula ullamcorper, a pulvinar leo viverra. Cras congue vel nisl eu tincidunt. Nulla ultrices lorem sapien, sed sollicitudin felis rutrum id. Maecenas at ligula interdum, aliquet enim non, facilisis velit. Nulla vitae blandit quam. Suspendisse in porttitor velit. In hac habitasse platea dictumst. Vestibulum egestas sem neque, ut aliquet massa convallis id. Pellentesque metus dolor, viverra ac risus in, ornare cursus ligula. Sed aliquam convallis neque, in consectetur nibh ultricies sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et erat consectetur, finibus nisl et, egestas ligula. Fusce posuere lacus erat, ac egestas arcu lobortis eleifend. Proin eleifend in felis tempor tincidunt.

Mauris sed viverra urna, ac ullamcorper tellus. Curabitur a lacus sapien. Cras at mattis nulla, at pharetra libero. In faucibus vel neque eu molestie. Phasellus non cursus lectus. Quisque sollicitudin dictum enim, at rutrum quam facilisis et. Nulla sit amet elit nec lectus vulputate malesuada eu ac ante. Donec turpis eros, laoreet non hendrerit quis, varius vel libero. Donec et dictum tortor. Duis vulputate massa eget dignissim ullamcorper. In risus lorem, ornare at euismod ac, auctor eu diam. Cras elementum mi a dictum lobortis. In molestie volutpat viverra. Aenean fermentum egestas risus vel ultrices. Cras viverra tellus ut ultrices faucibus. Ut gravida arcu mi.

Pellentesque congue ipsum at semper finibus. Proin dui sapien, congue vel maximus et, sollicitudin in arcu. Vestibulum vitae accumsan odio, a efficitur urna. Aliquam varius nisi non leo semper ornare. Sed egestas pretium leo in varius. Quisque dapibus lobortis purus id volutpat. Pellentesque mattis porta tellus. Nullam ligula ipsum, hendrerit nec dui ornare, vehicula dictum turpis. Maecenas tempor, lacus et dictum fringilla, ligula felis malesuada magna, sit amet ultricies libero augue ac massa. Quisque vitae posuere sapien.`;


console.log("There are " + paragraph.split(" ").length + " words in these paragraphs.");
console.log("There are " + paragraph.split(" et ").length + " et words in these paragraphs.");

// Bonus 2

function isPalindrome(phrase) {
        
    let phraseInverted = ""
    for (let i = phrase.length - 1; i >= 0; i--) {
        phraseInverted += phrase[i];
    }

    if(phraseInverted.toLowerCase() == phrase.toLowerCase()){
        console.log(`${phrase} is a palindrome !`);
    } else {
        console.log(`${phrase} isn't a palindrome !`);
    }
}

let phraseToCheck = "Kayak";
isPalindrome(phraseToCheck);
