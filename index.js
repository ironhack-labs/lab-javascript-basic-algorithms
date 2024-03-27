// Iteration 1: Names and Input
let hacker1 ='Shakthi';
let hacker2 ='Prasad';

let driverLength = hacker1.length;
let navigatorLength = hacker2.length;

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

if(driverLength > navigatorLength){
 console.log(`The driver has the longest name, it has ${driverLength} characters.`);
}
else if(driverLength < navigatorLength){
 console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`)
}
else if(driverLength === navigatorLength){
 console.log(`Wow, you both have equally long names, ${driverLength} characters!`) 
}


// Iteration 3: Loops
let upScaleDName = hacker1.toUpperCase();
//const spacedName = upScaleDName.split('').join(' '); 
//console.log(spacedName);
//console.log(upScaleDName);

let upscaleLength = upScaleDName.length;
let lengthAfterSpace = upscaleLength*2-1;
let spaceName2 =``;
let startPoint = 0;
for(let i=0; i<= lengthAfterSpace; i++){

    if(i%2 === 1){
        spaceName2 += upScaleDName[startPoint];
        startPoint++
    }
    else if (i%2 === 0){
        if( i !== 0){
        spaceName2 += ' ';
        }
    }  
}
console.log(spaceName2);

let reverseNavName = '';
for( let i=hacker2.length-1; i>=0; i-- ){
    reverseNavName += hacker2[i];
}
console.log(reverseNavName);
// console.log(hacker1.localeCompare(hacker2));

// console.log(`The driver's name is ${hacker1}`)
// console.log(`The navigator's name is ${hacker2}`)

if(hacker1.localeCompare(hacker2) === -1){
 console.log(`The driver's name goes first.`);
}

else if(hacker1.localeCompare(hacker2)=== 1){
 console.log(`Yo, the navigator goes first, definitely.`)
}

else if(hacker1.localeCompare(hacker2)=== 0){
 console.log(`What?! You both have the same name?`)
}

let longText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor lorem, feugiat sit amet efficitur nec, interdum fringilla nunc. Sed bibendum odio ante, id tincidunt purus aliquet id. Mauris lacinia mauris nec lacus tempor elementum. Nam tincidunt dui metus, et tincidunt nibh aliquet ut. Proin erat augue, finibus eget mi vel, interdum dignissim magna. Cras condimentum libero eu nulla tempus, vitae viverra metus congue. Integer lobortis feugiat justo, at euismod lectus. Sed rutrum sem risus, sed scelerisque orci fermentum sed. Ut quis dignissim lacus, eget condimentum mi. Proin erat elit, vulputate at ex a, tempus fringilla sem. Morbi quis mi mollis, efficitur mauris hendrerit, vulputate ligula. Duis non vulputate libero, sed lobortis massa. Fusce sollicitudin nisl eget mi rutrum finibus.

Quisque sodales, arcu porttitor interdum aliquet, nulla eros maximus libero, tempus egestas tellus risus quis diam. Phasellus gravida at nunc at lobortis. Praesent placerat pulvinar mattis. Suspendisse mattis tincidunt ligula quis viverra. Etiam mattis, velit sit amet placerat interdum, ex mi auctor sem, nec viverra quam sapien id lorem. Proin dapibus turpis at molestie consequat. Integer sodales vulputate massa sit amet faucibus. Proin auctor, neque sit amet sollicitudin auctor, leo diam sollicitudin dui, nec venenatis neque nunc eu libero. Integer rutrum nulla turpis, sed rutrum turpis tincidunt id. Morbi ultricies diam enim, ut porttitor nunc fermentum non. Suspendisse potenti.

Vivamus eget enim dignissim, euismod magna sed, tempus sem. In consectetur eleifend fermentum. Vivamus faucibus nulla nisi, id tempus massa tempus at. Vivamus efficitur, orci non pretium ultricies, risus massa maximus orci, id efficitur urna ante id erat. Fusce blandit, lacus a lobortis accumsan, dolor lorem ultricies odio, nec tincidunt lectus velit sed ante. Vestibulum dignissim finibus turpis quis pharetra. Integer quis vulputate orci. Ut erat eros, interdum at magna id, bibendum ultricies lacus. Donec cursus non velit a varius. Integer a est at libero porta tempor ut in orci."
let count = 0;`

let wordCount = 0;
let checkStats = true;

for (let i=0; i< longText.length -1; i++ ){
     if (longText[i] !== ' ' && checkStats) {
        wordCount++
        checkStats = false;
     }
     else if (longText[i] === ' '){
        checkStats = true;
     }
}

console.log(wordCount);



console.log(etCount);