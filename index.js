// Iteration 1: Names and Input
//1.1
let hacker1 = "Simon-Garfunkle";
//1.2
console.log("The driver's name is " + hacker1);
//1.3
let hacker2 = "Laura-Ashley";
//1.4
console.log("The navigator's name is " + hacker2);

console.log("===================== end ITR1 ==========================");
// Iteration 2: Conditionals
//2.1
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(hacker1.length < hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

console.log("===================== end ITR2 ==========================");
// Iteration 3: Loops
//3.1
let hacker1Altered = "";
for(let i=0; i<hacker1.length; i++){
    hacker1Altered += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Altered);
//3.2
let hacker2Altered = "";
for(let j=hacker2.length-1; j>=0; j--){
    hacker2Altered += hacker2[j];
}
console.log(hacker2Altered);
//3.3
// To sort the strings we can use the inbuilt sort() function, but to compare it they need to be part of the same structure.
// The function sorts the string in lexicographical order by default (alphabetical also making comparison using the whole length of the string
// with length).
let comparison = [hacker1, hacker2].sort();
console.log(comparison);

console.log("===================== end ITR3 ==========================");
// Bonus questions:
// Bonus 1:
// Generated 3 paragraphs, 1912 bytes of Lorem Ipsum
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla mauris, posuere ut malesuada et, aliquet nec mauris. " +
    "Phasellus id odio porttitor, fringilla tellus maximus, molestie neque. Donec id urna vel diam ornare hendrerit. Nunc egestas felis eget consequat " +
    "dapibus. Nam congue dolor ac odio tempor, in malesuada mi efficitur. Mauris vitae vulputate ante. Integer iaculis bibendum dui et sagittis. " +
    "Phasellus at consequat turpis, at porta justo. Nunc sollicitudin vulputate dolor. Pellentesque vitae velit rhoncus, mollis sapien ut, rhoncus augue. " +
    "Cras lectus quam, egestas bibendum lacus a, suscipit egestas velit. Aliquam efficitur urna ac dui lobortis tincidunt. Donec quis congue nisi. " +
    "In elementum risus dolor, ac rutrum nulla commodo nec. Phasellus et efficitur diam, at varius elit. Proin vestibulum scelerisque bibendum. " +
    "Praesent lacinia in metus nec vulputate. Vestibulum ullamcorper finibus eros euismod gravida. Fusce in molestie velit. Ut facilisis ac lacus non eleifend." +
    "Nullam vehicula viverra orci ut vestibulum. Nulla a ultrices metus. Donec faucibus sollicitudin nulla at rhoncus. Ut tincidunt at turpis quis aliquam. " +
    "Morbi vehicula, neque at pharetra elementum, augue eros rhoncus ex, sit amet venenatis est sapien vitae elit. Nullam scelerisque, orci aliquam malesuada " +
    "ullamcorper, tellus urna ultricies sem, in suscipit ipsum diam consequat ipsum. Vestibulum non nisi risus. Ut sit amet pharetra neque, ac scelerisque nisi." +
    "Duis accumsan risus sed neque fringilla, ut feugiat mauris pellentesque. Phasellus lobortis consectetur magna, vel aliquam enim luctus porta. " +
    "Phasellus ac porta velit, at commodo nisi. Phasellus sed tempus sapien, quis iaculis sem. Vivamus accumsan ex nulla, eu aliquet ligula faucibus et. " +
    "Donec varius ipsum at orci bibendum molestie. Nulla facilisi. Integer sed luctus risus, ut placerat leo. Vestibulum at lectus scelerisque, gravida erat " +
    "et, aliquam sapien."

// Make your program count the number of words in the string.
function wordCounter(str){
    return str.split(" ").length;
}

console.log(wordCounter(longText));

// Make your program count the number of times the Latin word et appears.
function countEt(str) {
    let nstr = str.split(" ");
    //console.log(nstr);
    let counter = 0;
    for(let i=0; i<nstr.length-1; i++){
        if(nstr[i] === "et" || nstr[i] === "et," || nstr[i] === "et."){
            counter++;
        }
    }
    return counter;
}
console.log(countEt(longText));

console.log("===================== End Bonus 1 ==========================");
// Bonus 2:
// Palindrome checker

let arrOfPalindrome = ["A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon"];

let phraseToCheck = arrOfPalindrome[4];

function reformat(char){
    let nstr = "";
    if(char!==" " && char!=="!" && char!=="?" && char!=="'" && char!==","){
        nstr += char.toLowerCase();
    }
    return nstr;
}

function palindromeChecker(phraseToCheck){
    let strippedString = "";
    for(let j=0; j<phraseToCheck.length;j++){
        strippedString += reformat(phraseToCheck[j]);
    }

    let reversestr="";
    for(let i=phraseToCheck.length-1; i>=0; i--){
        reversestr += reformat(phraseToCheck[i]);
    }

    console.log(strippedString);
    console.log(reversestr);

    if(strippedString === reversestr){
        return true;
    } else {
        return false;
    }

}

console.log(palindromeChecker(phraseToCheck));
console.log(palindromeChecker("Begin challenging your own assumptions."));
