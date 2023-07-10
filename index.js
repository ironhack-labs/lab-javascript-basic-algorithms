// Iteration 1: Names and Input
let hacker1 = "Filipa";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Manuel";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator  has the longest name, it has ${hacker2.length} characters.`);
}
else{
    console.log(`Wow you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

let nameDriver = "";
for (let i = 0; i < hacker1.length; i++){
    
    nameDriver += hacker1[i].toUpperCase() + " ";
}
console.log(nameDriver)

let nameNavigator = "";
for (let i = hacker2.length-1; i >= 0; i--){
    nameNavigator += hacker2[i];
}
console.log(nameNavigator);

// Bonus 1


let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus ex ut erat euismod, at lobortis tortor cursus. Vivamus nibh erat, pulvinar efficitur tincidunt nec, ullamcorper et augue. Etiam rhoncus egestas nisl, at commodo ipsum consequat non. Integer gravida condimentum ante eu feugiat. Mauris sed leo efficitur, euismod magna nec, efficitur leo. Phasellus ac congue magna, id tempor tortor. Integer condimentum sapien nec interdum sodales. Donec venenatis vitae eros eget congue. Sed sed risus rutrum, sagittis ligula in, cursus nisl. Sed euismod, neque ut congue gravida, massa neque dapibus felis, nec elementum purus tortor porttitor massa. Integer hendrerit ultricies nisl in eleifend. Quisque eleifend nisi id quam faucibus auctor. Mauris ullamcorper malesuada enim, ac pharetra felis pulvinar a. Sed ut semper eros, eget ultrices erat. Duis accumsan et urna sit amet semper. Nulla placerat diam placerat mauris iaculis tincidunt sit amet ullamcorper turpis. Aliquam consectetur tellus magna, vitae rhoncus sapien pulvinar ac. Morbi non purus purus. Pellentesque quis diam in mauris blandit gravida. Quisque vitae fringilla nibh. Duis hendrerit fermentum bibendum. Curabitur tristique tortor sit amet rutrum aliquet. Cras vel tellus neque. Aliquam ac bibendum turpis. Duis condimentum laoreet dignissim. In aliquam quam ac nisi aliquet, id pulvinar massa hendrerit. Aliquam et tristique ante. Donec consequat libero elit, at rutrum urna finibus sed. Sed faucibus sapien eu ante aliquet pulvinar. Ut vitae porttitor diam. Sed ligula orci, ornare failisis velit vestibulum, fringilla varius neque. Nunc egestas arcu felis, quis finibus arcu sollicitudin eu. Praesent dolor sapien, vulputate sit amet porta sed, mollis in nisl. Sed et vehicula eros. Phasellus mollis mauris ac suscipit fringilla. Pellentesque faucibus mi vitae mattis rhoncus. Integer sit amet felis posuere, dictum tellus et, porta lorem. Sed in nisi vel erat eleifend dapibus vehicula at libero."

let countSpace = 0;
for (let i = 0; i < longText.length; i++){
    if (longText[i].includes(" ", 0)){
        countSpace++
    }
}
console.log(countSpace +1);

let countEt = 0;
for (let i = 0; i < longText.length; i++){
    if (longText[i-1] === " " && longText[i] === "e" && longText[i+1] === "t" && (longText[i+2] === " " || longText[i+2] === "." || longText[i+2] === "," )){
        countEt++
    }
}
console.log(countEt);

// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama";

function removeSpaces(spaces){
    let newString = spaces.replaceAll(/[^a-zA-Z]/g, "").toLowerCase();
    console.log(newString);


    let result = true;
    for (let i = 0; i < Math.floor(newString.length/2); i++){
        
        
        if(newString[i] !== newString[newString.length-1-i]){
            result = false;
            break;   
        }
        
    }
    return result;
}

console.log(removeSpaces(phraseToCheck));