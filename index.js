// Iteration 1: Names and Input

const hacker1 = "Rui";
const hacker2 = "Kemal";
console.log("Iteration 1->");
console.log(`the driver's name is ${hacker1}`);

console.log(`navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
console.log("Iteration 2->");

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
console.log("Iteration 3->");

let spaceName = "";
let reverseName = "";

for(let index=0; index<hacker1.length; index++){
    spaceName += hacker1[index].toUpperCase() + " ";
}

console.log(spaceName.slice(0,-1));

for(let index = hacker2.length - 1; index >= 0; index--){
    reverseName += hacker2[index];
}
console.log(reverseName);


if (hacker1 < hacker2){
    console.log($`{hacker1}goes first.`);
}
else if (hacker1 > hacker2){
    console.log(`Yo, the navigator goes first, definitely.`);
}
 else if (hacker1 === hacker2){
    console.log(`What?! You both have the same name?`);
 }


//bonus 1.1
//solution 1
console.log("Bonus 1 Challange 1 Solution->1");

 const longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
let wordCount = 1;
for(let i = 0; i<longText.length; i++){
    if(longText[i] === " ")
    {
        wordCount ++;
    }
}
console.log(wordCount);

//solution 1.2     
console.log("Bonus 1 Challange 1 Solution->2");
console.log(longText.split(" ").length);

//solution 1.3
console.log("Bonus 1 Challange 1 Solution->3");
let spaceCount = (longText.match(/ /g)).length;
console.log(spaceCount + 1);

//solution 2.1
console.log("Bonus 1 Challange 2 Solution->1");
1
let etCount = 0;
for(let i = 0; i<longText.length - 1; i++){
    if(longText[i-1]===" " && longText[i] === "e" && longText[i+1]==="t" && longText[i+2] === " ")
    {
        etCount ++;
    }
    
    else if(longText[i-1]===undefined && longText[i] === "e" && longText[i+1]==="t" && longText[i+2] === " "){
        etCount ++;
    }

    else if(longText[i-1]===" " && longText[i] === "e" && longText[i+1]==="t" && longText[i+2] === undefined){
        etCount++;
    }
}

console.log(etCount);
//solution 2.2          
console.log("Bonus 1 Challange 2 Solution->2");

console.log(longText.split(" "));

wordsArray = longText.split(" ");
for(let i = 0; i < wordsArray.length; i++){
    if(wordsArray[i] === "et"){
        etCount += 1;
    }
}
console.log(`Solution 2 result: ${etCount}`)
//solution 2.3
console.log("Bonus 1 Challange 2 Solution->3");

etCount = (longText.match(/\bet\b/gi) || []).length;
console.log(etCount);


//solution 2.4
console.log("Bonus 1 Challange 2 Solution->4");

let countOfWord = 0;
let sliceStartIndex = 0;

for(let i = 0; i<longText.length; i++){
    let sliceEndIndex = longText.indexOf(" ",sliceStartIndex);

    if(sliceEndIndex===-1){
        sliceEndIndex=undefined;
    }


    let slicedWord = longText.slice(sliceStartIndex,sliceEndIndex);

    if(slicedWord==="et"){
        countOfWord+=1;
    }
    if(sliceEndIndex===undefined){
        break;
    }

    sliceStartIndex = sliceEndIndex + 1;
}
console.log(countOfWord);