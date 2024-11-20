// Iteration 1: Names and Input
const hacker1 = 'Mine';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Mine';
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
const driver = hacker1.length;
const navigator = hacker2.length;
let resultLog = ``;
let longestName = 0;
if(driver > navigator){
    resultLog = `The driver has the longest name, it has ${driver} characters.`;
    longestName = driver;
} else if(driver < navigator){
    resultLog = `It seems that the navigator has the longest name, it has ${navigator} characters.;`
    longestName = navigator;
} else{
    resultLog = `Wow, you both have equally long names, ${driver} characters!`;
    longestName = driver; // both are equal, doesn't matter which one used
}
// Iteration 3: Loops
const modifiedDriver = hacker1.split('');
let output1 = ''
for(let i = 0; i < driver; i++){
    output1 += modifiedDriver[i].toUpperCase();
    if( i != driver-1){
        output1 += ' ';
    }
}
console.log(output1);
const modifiedNavigator = hacker2.split('');
let output2 = '';
for(let i = navigator-1; i >= 0; i--){
    output2 += modifiedNavigator[i];
}
console.log(output2);
let i;
for(i = 0; i < longestName; i++){
    if(hacker1.charCodeAt(i) < hacker2.charCodeAt(i)){
        console.log(`The driver's name goes first.`);
        break;
    } else if(hacker1.charCodeAt(i) > hacker2.charCodeAt(i)){
        console.log(`Yo, the navigator goes first, definitely.`);
        break;
    } else{
        continue;
    }
}
if(i === longestName){
    // it means equal names
    console.log(`What?! You both have the same name?`);

}
// bonus 1
longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam sem metus, quis fringilla leo faucibus eget. Suspendisse bibendum dolor ut ante accumsan, finibus commodo est tristique. Cras condimentum suscipit nisi, eu dictum nisi rhoncus sagittis. Pellentesque efficitur interdum imperdiet. Fusce a bibendum urna. Pellentesque mollis, urna a suscipit aliquet, massa dui elementum tortor, quis varius ante nibh quis quam. Suspendisse vestibulum nisl non posuere cursus. In convallis ex sed vulputate sagittis. Proin volutpat iaculis nulla quis egestas. Quisque luctus diam metus, pretium hendrerit leo egestas et. Sed commodo enim eget mi vestibulum imperdiet.

Etiam suscipit augue quis massa dictum dignissim eget tempus mi. Quisque odio massa, lobortis suscipit enim quis, volutpat placerat metus. Donec pellentesque velit velit, in dignissim nunc varius eget. Curabitur vitae mi vulputate, iaculis magna vel, suscipit diam. Pellentesque sapien felis, mollis eget nibh vel, hendrerit dignissim risus. Nulla imperdiet commodo elit, ac pharetra ligula fermentum sed. Nulla vitae ante libero. Aenean et suscipit risus, faucibus mattis risus. Aenean ac molestie neque, id dignissim purus. Fusce ullamcorper, nisi at tincidunt malesuada, est felis feugiat ligula, sit amet mollis tellus eros et velit. Vestibulum lacinia tempor eleifend. Mauris est velit, congue at tellus a, euismod scelerisque massa. Proin arcu purus, tincidunt a iaculis in, varius ut sapien.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In porta mauris et magna semper, nec dapibus arcu ullamcorper. Nullam a tempor sapien. Ut nibh massa, scelerisque vitae leo ac, hendrerit faucibus metus. In faucibus porta nulla quis luctus. Nulla in egestas velit. Nullam ullamcorper enim gravida elit venenatis molestie.`;
let countWords = 0;
let countEt = 0;

for(let i = 0; i < longText.length - 2; i++){
    if(longText[i] !== ' ' && longText[i + 1] === ' '){ // a letter followed by a space, end of a word
        countWords++;
    }
    if(longText[i] === 'e' && longText[i + 1] === 't'){
        if( i !== 0 && i!== longText.length - 2){ // not the first index or the last index-1
            if( longText[i-1] === ' ' && longText[i + 2] === ' '){
                countEt++;
            };
        } 
    }
}
console.log(countWords);
console.log(countEt);

// bonus 2
/*"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".*/ 
phraseToCheck = "No 'x' in min";
rightInd = phraseToCheck.length - 1;
leftInd = 0;
isPalindrome = true;
phraseToCheck = phraseToCheck.toLowerCase(); // convert all to lowercase

while(leftInd < phraseToCheck.length && rightInd > 0){
    if(  !(phraseToCheck.charCodeAt(leftInd) >= 97 && phraseToCheck.charCodeAt(leftInd) <= 122)){
        leftInd++;// not a small case letter
    }
    if( !(phraseToCheck.charCodeAt(rightInd) >= 97 && phraseToCheck.charCodeAt(rightInd) <= 122)){
        rightInd--; // not a small case letter, move the index

    } 
    if((phraseToCheck[leftInd] !== phraseToCheck[rightInd])){
        // both letters but not equal
        if((phraseToCheck.charCodeAt(leftInd) >= 97 && phraseToCheck.charCodeAt(leftInd) <= 122) && (phraseToCheck.charCodeAt(rightInd) >= 97 && phraseToCheck.charCodeAt(rightInd) <= 122)){
            console.log('Not a palindrome');
            isPalindrome = false;
            break;
        }

    } else{
    // they are the same, move the right index as well
        rightInd--;
        leftInd++;
    }
   

}

if(isPalindrome){
    console.log('It is a palindrome');
}


