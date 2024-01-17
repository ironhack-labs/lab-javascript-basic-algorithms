// Iteration 1: Names and Input

//Driver 
//navigator

let hacker1 = "Tushar Sunder"
let hacker2 = "Miguel Henriques"

console.log(`The driver's name is: ${hacker1}`);
console.log(`The navigator's name is: ${hacker2}`);

// Iteration 2: Conditionals

let x = hacker1.length;
let y = hacker2.length;

if(x > y){
    console.log(`driver has the longest name, it has ${x} characters`)
}
else if (x === y){
    console.log(`wow you both have equally long names, ${x} characters.`)
}
else if (x < y){
    console.log(`it seems that navigator has the longest name , it has ${y} characters.`)
}


// Iteration 3: Loops 

//3.1

let driverUpper = "";

for (let i = 0; i < hacker1.length; i++){
    
    driverUpper += hacker1[i].toUpperCase() + " " ;

}

console.log(driverUpper.trim());

//3.2

let navReverse = ""

for (let j = hacker2.length -1 ; j >= 0 ; j--){
    
    navReverse += hacker2[j];

}

console.log(navReverse)

//3.3


if (hacker1.localeCompare(hacker2) === 1){
    console.log("The navigator name goes first, definitely.")
}
else if (hacker2.localeCompare(hacker1) === 1){
    console.log("Yo, the driver's goes first.")
}
else if(hacker1.localeCompare(hacker2) === 0){
    console.log("What?! You both have the same name?")
}


// Bonus

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet purus eget eros hendrerit tincidunt ut in odio. Proin mattis lacus eget feugiat vulputate. Nulla eu ornare mauris. Duis convallis interdum odio et fermentum. Nunc non purus quam. Morbi sit amet diam id velit vulputate laoreet. Vestibulum egestas libero finibus tellus eleifend rutrum. Phasellus mollis a diam venenatis vestibulum.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean massa augue, egestas in dapibus et, faucibus congue erat. In aliquam tristique varius. Sed placerat massa nisl, sed ullamcorper odio bibendum eget. Nulla rutrum est ex, non pharetra ligula eleifend ut. Sed eu aliquet eros, ut iaculis nisl. Sed justo velit, semper non purus eget, auctor feugiat lorem.

Morbi vel efficitur est. Aliquam elementum laoreet lacus in malesuada. Nam iaculis massa nec nunc semper, in faucibus magna placerat. Donec eget scelerisque leo. Donec dui augue, volutpat ut sapien non, congue pulvinar magna. Praesent fermentum egestas quam eu pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras porta, lectus non pretium auctor, nisl nulla commodo est, ut commodo sapien enim eget massa. Maecenas facilisis nibh et velit laoreet congue. Vivamus et lobortis ex, eget suscipit quam. Cras bibendum auctor erat, ac blandit felis. Sed facilisis, ipsum quis pulvinar rhoncus, risus nunc posuere nunc, vel viverra ipsum massa eu eros. Integer commodo lacus tempor scelerisque facilisis. Vestibulum commodo magna quis nulla cursus, et pretium dolor pulvinar.`

let wordCount = 3;

for (let k = 0; k < longText.length; k++){
    if(longText[k] === " "){
        wordCount++
    }
}

console.log(wordCount)

let etCount = 0;
for(let u = 0; u < longText.length; u++){
    if(longText[u] + longText[u + 1] + longText[u + 2] === " et"){

        etCount++

    }
}

console.log(etCount)


// Bonus 2

let phraseToCheck = "Was it a car or a cat I saw?"
let cleanString = phraseToCheck.toLowerCase().replace(/[^A-Za-z0-9]/g, '').toLowerCase()

let isPalindrome = true;
for (let i = 0; i < cleanString.length / 2; i++) {
  if (cleanString[i] !== cleanString[cleanString.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome)