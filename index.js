// Iteration 1: Names and Input
const hacker1 = "Phillip"
const hacker2 = "Gloria"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The hacker1 has the longest name, it has ${hacker1.length} characters`)}   
    else if(hacker1.length < hacker2.length){
        console.log(`The Navigator has the longest name, it has ${hacker2.length} characters`)
    }
    else if(hacker1.length === hacker2.length){
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops

let newDriverName = "";

for (let i = 0; i < hacker1.length; i++) {
    if (i < hacker1.length) {
        newDriverName += hacker1[i].toUpperCase() + " ";
       }    
    }
    
console.log("newDriverName", newDriverName);

let stringCheckerseNavigator =""
for (let i = hacker2.length - 1; i >= 0; i--) {
    stringCheckerseNavigator += hacker2[i]
}

console.log("stringCheckerseNavigatorName is", stringCheckerseNavigator);

let driverName    = "Phillip"
let navigatorName = "Gloria"

let compare = driverName.localeCompare(navigatorName)

if(compare == 1) { 
    console.log("The driver's name goes first. ")
}
    else if (compare == -1) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}



// Bonus 1

const LongText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis nunc ante, ut consequat erat placerat non. Vivamus in tortor in sapien elementum ornare. Donec interdum volutpat ante, vel porttitor ante placerat non. Sed varius id ex sed euismod. Suspendisse tincidunt ante ac mauris imperdiet, nec porttitor neque pellentesque. Nulla facilisi. Vestibulum tristique mattis elementum. Vestibulum consequat euismod nisl, ac elementum elit convallis id. Etiam ut nisi ac elit volutpat consequat. Nam in fermentum arcu. Sed tempus, est eu tempus vestibulum, velit erat ullamcorper dolor, eu accumsan eros sem quis dolor. Praesent tristique arcu lectus, vehicula vulputate mauris commodo nec.
Suspendisse viverra, mi at vehicula molestie, dolor leo laoreet tellus, sed consequat eros erat vel erat. Praesent hendrerit risus in justo porttitor facilisis. Vestibulum ultricies, felis at rutrum pretium, nisl enim laoreet erat, pharetra lacinia eros quam quis justo. Duis euismod pellentesque eros, in finibus urna blandit eget. Mauris tempus tellus quis ante finibus, in dapibus neque rutrum. Vivamus semper, ex euismod suscipit pretium, metus arcu posuere sapien, at lacinia erat risus at nisl. Cras non velit pharetra libero auctor placerat eget ut leo.
Proin sit amet neque at odio consectetur tincidunt. Ut maximus elit sit amet nulla bibendum, et posuere sem mattis. Suspendisse venenatis ligula mauris, a cursus risus pretium non. Curabitur quis feugiat lorem. Nam non maximus orci. Nam nec felis tellus. Vivamus quis pretium libero. Ut consequat leo non auctor elementum. Fusce mollis, velit eu rhoncus facilisis, leo ligula ullamcorper magna, ac aliquam ex mi nec turpis. Sed dapibus ut augue a maximus`


function numberOfWords(string) { 
    let count = 0; 
    let check = false;
    string = string.toLowerCase() 
  
    for (let i = 0; i < string.length; i++) { 
        if (string[i] !== ' ' && !check) { 
            count++; 
            check = true; 
        } else if (string[i] === ' ') { 
            check = false; 
        } 
    } 
  
    return count; 
} 
  
console.log("Word count:", numberOfWords(LongText));

function et() {
    console.log(
        (LongText.match(/et/g)).length);
 
}
et()

// Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama!"
let testString =  phraseToCheck.replace(/[^A-Z0-9]/ig,'');
testString = testString.toLowerCase()
console.log(testString)

function checkPalindrome(string) {
    let stringCheck = "";
    string = string.replace(/[^A-Z0-9]/ig,'').toLowerCase();
    for (let i = string.length - 1; i >= 0; i--) {
        stringCheck += string[i];
    }
    if (stringCheck == string) {
        return true
    } else {
        return false;
    }
}

 
let str1 = "A man, a plan, a canal, Panama!";
let str2 = "Amor, Roma";
let str3 = "race car";
let str4 = "stack cats"
let str5 = "step on no pets"
let str6 = "taco cat"
let str7 = "put it up"
let str8 = "Was it a car or a cat I saw? and No 'x' in Nixon"


console.log(checkPalindrome(str1));
console.log(checkPalindrome(str2));
console.log(checkPalindrome(str3));
console.log(checkPalindrome(str4));
console.log(checkPalindrome(str5));
console.log(checkPalindrome(str6));
console.log(checkPalindrome(str7));
console.log(checkPalindrome(str8));

