// Iteration 1: Names and Input

const hacker1 = "Nihad";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Ulvi";

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals


if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length === hacker2.length) { 
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}


// Iteration 3: Loops


let HACKER1 = "";
for(let i = 0; i < hacker1.length; i++){
    if(i === hacker1.length - 1){
        HACKER1 += hacker1.charAt(i).toUpperCase();
    }
    else {
         HACKER1 += hacker1.charAt(i).toUpperCase() + " ";
    }
}
console.log(HACKER1);


let reversedHacker2 = "";
for(let i = hacker2.length; i > 0; i--){
    reversedHacker2 += hacker2.charAt(i-1);
}
console.log(reversedHacker2);


let shorterOne;
let longerOne;
if(hacker1.length > hacker2.length){
    shorterOne = hacker2;
    longerOne = hacker1;
}
else {
    shorterOne = hacker1;
    longerOne = hacker2;
}

let winner;
for(let i = 0; i < shorterOne.length; i++){  //banan ban
    if(hacker1[i] > hacker2[i]){
        winner = hacker1;
        break;
    }
    else if(hacker1[i] < hacker2[i]){
        winner = hacker2;
        break;
    }
}
if(winner === hacker1) {
    console.log("The driver's name goes first.");
}
else if(winner === hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
}
else if(winner === undefined && longerOne.length !== shorterOne.length) {
    if(longerOne === hacker1){
        console.log("The driver's name goes first.");
    }
    else if(longerOne === hacker2){
        console.log("Yo, the navigator goes first, definitely.")
    }
}

else if(winner === undefined && shorterOne.length === longerOne.length){
    console.log("What?! You both have the same name?");
}


// BONUS Time!
//Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus magna sed lacus gravida, condimentum semper lorem rhoncus. Suspendisse fermentum consectetur ipsum, vel varius neque interdum congue. Pellentesque et massa nec purus viverra varius. In quam ex, dignissim et tellus eget, imperdiet ultrices justo. Integer sed turpis a dui malesuada dapibus vulputate id massa. Nulla tempor nec lorem ut efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dapibus posuere laoreet. Maecenas interdum tellus sit amet quam faucibus, et feugiat justo pharetra. Proin eu sapien vehicula, ultricies leo aliquet, posuere lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Aliquam tincidunt dui ac purus varius, quis cursus tortor pulvinar. Mauris eget mattis urna, ac finibus nisl. Sed rutrum sapien enim, a pharetra est lobortis sit amet. Mauris egestas in est ut porta. Duis congue dignissim tempor. Proin ultrices gravida augue ut maximus. Pellentesque gravida nulla a urna elementum varius. Vestibulum sodales urna sed purus lobortis mattis. Maecenas lacus felis, finibus a lobortis ut, ullamcorper id quam. Maecenas non purus a elit porttitor dictum eu sagittis erat. Sed finibus ut magna non commodo. Ut gravida, mi laoreet laoreet ultricies, lectus odio consequat lectus, ut dictum lorem nunc ut lacus. Aliquam ut consectetur arcu. Quisque egestas velit ipsum. Donec lacinia ante eget leo placerat vulputate. Morbi volutpat volutpat sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus lacus, porttitor a finibus eu, fermentum ac libero."

let wordCount = 0;
let etCount = 0;
for(let i = 0; i < longText.length - 1; i++){
    if(longText[i + 1] === " " || i === longText.length - 2){
        wordCount++;
    } 
}
console.log("The number of words: " + wordCount);




const lowerLongText = longText.toLowerCase();

if(lowerLongText[0] === "e" && lowerLongText[1] === "t" && lowerLongText[2] === " "){
        etCount++;
    }

for(let i = 1; i < lowerLongText.length - 2; i++){
    if(lowerLongText[i-1] === " " && lowerLongText[i] === "e" && lowerLongText[i+1] === "t" && (lowerLongText[i+2] === " " || lowerLongText[i+2] === "," || lowerLongText[i+2] === "." || lowerLongText[i+2] === "?" || lowerLongText[i+2] === "!" || lowerLongText[i+2] === undefined)){
        etCount++;
    }
}  
console.log("The number of et words: " + etCount);


//BONUS 2
//??