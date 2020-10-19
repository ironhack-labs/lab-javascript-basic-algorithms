//Iteration 1: Names and Input
let hacker1 = "Francisco";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Vincenzo";
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} charachters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


let capitalName = "";
for (let i = 0; i < hacker1.length - 1; i++){
  capitalName += hacker1[i].toUpperCase() + " ";
  }
capitalName += hacker1[hacker1.length-1].toUpperCase();
console.log(capitalName);

let reverseName = "";
for (let k = hacker2.length -1; k >= 0; k--){
  reverseName += hacker2[k];
}
console.log(reverseName);


//Iteration 3: Loops
switch(hacker1.localeCompare(hacker2)){
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;
  case 0:
    console.log("What?! You both have the same name?")
    break;
}

//Bonus 1
let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, purus ac luctus pellentesque, neque tellus lobortis purus, id vehicula arcu ipsum vel lorem. Aliquam et convallis neque. Aliquam ultrices scelerisque ipsum ut imperdiet. Suspendisse euismod iaculis mi ac molestie. Praesent quis sem tortor. Maecenas maximus eleifend eros sit amet fringilla. Donec malesuada viverra leo sit amet dictum. Vestibulum id feugiat tortor, quis pharetra neque. Vivamus ornare sem et nisi fringilla consequat. Sed sed sollicitudin arcu, auctor mollis quam. Nullam commodo sagittis vulputate. Aenean elementum nec purus in tristique. Suspendisse suscipit nisi nisi, at lobortis nunc varius sit amet. Duis erat justo, bibendum non odio sit amet, vehicula pulvinar metus. Maecenas ornare mi nec laoreet interdum. Pellentesque pellentesque placerat condimentum. Vivamus nec nulla nisi. Sed malesuada pulvinar sapien, quis blandit nulla mollis vitae. Suspendisse quis tempus urna, et vehicula libero. Praesent vehicula molestie elit, eu dapibus odio dignissim dignissim. Duis tristique dapibus orci. Donec pretium consequat ante quis elementum. Donec hendrerit metus dignissim, vestibulum leo ac, facilisis elit. Quisque ac feugiat ligula. Vestibulum euismod mi vitae neque pulvinar, varius porttitor ligula suscipit. Mauris sit amet lectus viverra, ultrices felis consequat, bibendum sem. Donec et ex turpis. Aliquam euismod posuere blandit. Suspendisse potenti. Ut gravida dictum quam, vitae imperdiet mi auctor non."

let listOfWords = paragraphs.split(" ");
console.log(listOfWords.length);
let etCounter = 0;
for (m = 0;  m < listOfWords.length; m ++){
  if (listOfWords[m] === "et"){
    etCounter++;
    m++;
  } else {
    m++
  }
}
 
