// Iteration 1: Names and Input
let hacker1 = "Vasco"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Miguel"
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let driver = ""
for (i = 0; i<hacker1.length; i++){
    driver += hacker1[i].toUpperCase()+" "
}
console.log(driver);
let navigator = ""
    for (i = hacker2.length - 1; i >= 0; i--){
        navigator += hacker2[i]
    }
console.log(navigator)
if (hacker2.localeCompare(hacker1) === 1 ){//driver name goes first
    console.log("The driver's name goes first.")
}
else if(hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first, definitely.")
}
else{
    console.log("What?! You both have the same name?")
}
// BONUSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dolor id lacus mattis elementum. In dapibus lacus sed est scelerisque porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse volutpat sagittis eleifend. Pellentesque tempus, tellus ut iaculis bibendum, augue elit tempus nulla, non ultrices odio nulla vel erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eget mauris suscipit, elementum ligula in, tincidunt neque. Suspendisse dolor lorem, dignissim sit amet tortor vitae, aliquam congue tellus.
Etiam diam felis, pretium et venenatis eget, accumsan eget tortor. Suspendisse quis mauris nulla. Nullam viverra ligula ac dolor porttitor fringilla. Nullam a maximus lectus. Nam pellentesque faucibus sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non maximus elit. Curabitur ut ligula aliquam est suscipit venenatis. Praesent eleifend blandit nulla eget scelerisque. Phasellus sit amet est sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis imperdiet tortor elit, nec placerat mi fringilla ut. Pellentesque ultrices posuere diam in maximus.
Morbi ornare ac odio vitae vestibulum. In sagittis convallis dui ut pretium. Sed suscipit ornare dui vitae pharetra. Aliquam lobortis tellus vitae lectus suscipit cursus. Nulla facilisi. Aenean luctus sed nisi sed egestas. Sed pulvinar turpis ut lacus euismod, non dapibus felis placerat. Morbi a nulla vitae ligula pulvinar consequat elementum ac magna.`;
 console.log(longText);
 let count = 1; // this 1 means first word from first paragraph
 for(let i = 0; i < longText.length; i++){
    if(longText[i] === " "){ // counts the number of spaces and each space has a word after.
        count++
    }
 }
 console.log(count)
 //step3
let count2 = 0;
 for (i = 0 ; i < longText.length - 1; i++){
    const compare = " et";
    if (longText[i]=== "e"){
        if(longText[i-1] === " " && longText[i+1] === "t"){
            count2++;
        }
    }
}
console.log(count2);
// BONUSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
let phrase1 = "";
let phrase2 = "";
for(let i = 0; i < phraseToCheck.length; i++){
    if(phraseToCheck[i] !== "," && phraseToCheck[i] !== " " && phraseToCheck[i] !== "!"){
        phrase1 += phraseToCheck[i].toLowerCase();
    }
}
console.log(phrase1)
for(let i = phraseToCheck.length - 1; i >= 0; i--){
    if(phraseToCheck[i] !== "," && phraseToCheck[i] !== " " && phraseToCheck[i] !== "!"){
        phrase2 += phraseToCheck[i].toLowerCase();
    }
}
console.log(phrase2)
if(phrase1 === phrase2){
    console.log("Palindrome");
} else {
    console.log("not Palindrome");
}














