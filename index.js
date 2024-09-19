// Iteration 1: Names and Input
const hacker1= "John";
console.log(`The driver's name is ${hacker1}`)
const hacker2= "Mark";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
const hackerLen1 = hacker1.length;
const hackerLen2 = hacker2.length;
if(hackerLen1 > hackerLen2){
    console.log(`The driver has the longest name, it has ${hackerLen1} characters.`)
}
else if(hackerLen1 < hackerLen2) {
    console.log(`It seems that the navigator has the longest name, it has ${hackerLen2} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hackerLen1} characters!`)
}

// Iteration 3: Loops
let capSpace = "";
for(let i = 0; i < hackerLen1; i++){
    capSpace += hacker1[i].toUpperCase() + ' ';
}
console.log(capSpace);

let reverse = "";
for(let i = hackerLen2-1; i >= 0 ; i--){
    reverse += hacker2[i];
}
console.log(reverse);

if(hacker1 > hacker2){
    console.log("The driver's name goes first.");
}
else if(hacker1 < hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
}
else{
    console.log("What?! You both have the same name?");
}

//BONUS 1:

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lacus viverra, interdum enim ut, varius turpis. Nulla maximus lectus tellus, in hendrerit nulla pulvinar porta. Maecenas lacinia efficitur quam. Nullam egestas, magna quis dictum dictum, arcu augue lobortis justo, sed laoreet augue mauris nec nulla. Integer fermentum enim ligula, sed venenatis nunc mollis et. Nulla sit amet maximus augue, in sollicitudin urna. Curabitur eu magna orci. Pellentesque tincidunt quam molestie, auctor urna at, gravida orci. Sed feugiat est eu ligula blandit ullamcorper. Ut sapien tortor, aliquet a sapien et, pharetra placerat metus. Aliquam aliquam purus eleifend varius viverra. Vivamus hendrerit tortor ipsum. Nulla in semper tellus, sit amet sagittis nisi. Fusce lectus nisi, egestas ac ultricies nec, efficitur sit amet nibh.

Proin aliquet id tellus ut elementum. Mauris et nisl quis sapien mattis commodo. Morbi tempor mauris ac justo pellentesque, ut viverra risus laoreet. Morbi urna lacus, aliquam et elementum in, cursus eget justo. Sed dapibus augue at ipsum gravida, a pulvinar mauris tempus. Vivamus sed nisl pretium, vehicula massa vel, placerat velit. Vestibulum porttitor tellus risus, sit amet ornare metus sodales vitae. Nullam pulvinar nisl est, hendrerit molestie sem consequat in. Vestibulum quis augue magna. Fusce consectetur venenatis cursus. Etiam ultrices, velit sit amet vehicula tincidunt, ipsum ipsum dapibus lectus, id faucibus leo lacus a ex. Aliquam commodo turpis vitae ex auctor, vitae tristique mauris vehicula.

Mauris pretium, arcu id viverra facilisis, erat ex venenatis neque, non facilisis massa enim elementum dui. Pellentesque faucibus, mauris nec sollicitudin egestas, lacus lectus pretium lectus, sit amet finibus ante libero nec risus. Cras pellentesque vulputate fringilla. Morbi vitae feugiat nibh. Duis vitae suscipit felis. Vivamus egestas fermentum bibendum. Vestibulum ac fermentum velit, id volutpat sapien. In tincidunt ipsum vitae libero mattis maximus. Duis vel blandit lorem. Nulla cursus, est non euismod consectetur, urna dolor egestas augue, pulvinar blandit odio magna id dolor. Integer faucibus rutrum ex, nec condimentum velit. Nunc lobortis id dui in ullamcorper. Pellentesque imperdiet metus eget orci euismod, nec condimentum nunc iaculis. Cras et metus non lorem cursus bibendum vel quis mi.`

console.log(longText.trim().split(/\s+/).length);

console.log(longText.match(/ et /g).length);

const phraseToCheck = "No 'x' in Nixon";

function checkPalindrome(str){
    let strRev = '';
    for(let i = str.length - 1; i >= 0 ; i--){
        strRev += str[i]
    }
    strArr = str.split(" ");
    strRevArr = strRev.split(" ");
    let strConcat= '';
    let strRevConcat= '';
    for(let j = 0; j < strArr.length; j++){
        strConcat += strArr[j]
    }
    for(let j = 0; j < strRevArr.length; j++){
        strRevConcat += strRevArr[j]
    }
    console.log(strConcat,strRevConcat);
    if(strConcat.toLowerCase().replace(/[,.!?']/g, "") === strRevConcat.toLowerCase().replace(/[,.!?']/g, "")){
        console.log("this is a palindrome!");
        return
    }
    console.log("Not a palindrome");
    return;
}

checkPalindrome(phraseToCheck);


// function isNameOddEven(str){
//     if(str.length % 2) return(`${str} is odd`);
//     return(`${str} is even`);
// }
// console.log(isNameOddEven('hehe'))
// // OR
// const list = [1, 2, 3, 4, 5];
// console.log(list.reduce((total, item) => total + item,0 )); // 15
