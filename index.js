// Iteration 1: Names and Input
let hacker1 = "Danial";
console.log("The driver's name is " +  hacker1);
let hacker2 = "Hristos";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
let hacker1Length = hacker1.length
let hacker2Length = hacker2.length
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length){
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters");
} else if (hacker1.length === hacker2.length){
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops
let driversName = "";
for (let i=0; i < hacker1.length; i++){
  driversName += hacker1[i].toUpperCase() + " ";
  }
console.log(driversName);

let navigatorName = "";
for (let g=hacker2.length - 1; g>=0; g--){
  navigatorName += hacker2[g]
}
console.log(navigatorName);

if (hacker1.localeCompare(hacker2) === -1){
  console.log("The driver's name goes first");
}else if (hacker2.localeCompare(hacker1) === -1){
  console.log("Yo, the navigator goes first definitely");
}else if (hacker1.localeCompare(hacker2) === 0){
  console.log("What?! You both have the same name?");
}

////////BONUS 1 
let paragraph = 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit faucibus eros, vitae commodo velit faucibus ac. In finibus laoreet arcu, eu molestie eros tempus sit amet. Quisque at mi libero. Suspendisse eros odio, eleifend quis lectus in, aliquam pulvinar arcu. Nunc ut dignissim ante. Etiam quis nisl sapien. Donec vitae consectetur felis, ac egestas lectus. Sed sollicitudin ex vel ante ultricies, a fringilla magna egestas. Mauris finibus tempor venenatis. Vivamus fermentum massa in tortor porttitor finibus. Vivamus lobortis nisi nec ex vulputate, sit amet semper tellus iaculis. Ut a est molestie, iaculis quam quis, consequat neque. Curabitur elementum metus et nulla venenatis gravida. In id interdum augue.Duis in ante mi. Nulla facilisi. Duis rutrum dolor et consectetur euismod. Vivamus condimentum ipsum in mauris mattis cursus. Ut in sem id mauris interdum tristique eget eget mauris. In a libero ex. Duis porttitor odio justo. Nam eleifend orci diam. Quisque enim arcu, dignissim nec ligula ut, vehicula ultricies odio. Morbi in lacus non massa dictum hendrerit in et nisl. Vivamus ut neque ante. Fusce sit amet magna non ex semper auctor. Aliquam quis imperdiet odio. Donec nec malesuada eros. Morbi lacinia vestibulum elit at iaculis. Praesent eget justo vitae felis posuere lobortis consequat sit amet diam. Vestibulum pellentesque est erat, eu gravida purus faucibus placerat. In nec orci nunc. Curabitur non lectus non justo accumsan malesuada. Curabitur accumsan metus eu nisi egestas, sed rutrum lectus iaculis. Pellentesque mattis metus quis malesuada congue."
let wordCount = 1;
  for (let i=0; i<paragraph.length; i++){
  if(paragraph[i] === " ") {
    wordCount += 1;
  }
}
console.log(wordCount)

let etCount = 0;
let newParagraph = paragraph.split (' ');
for (let i=0; i<newParagraph.length; i++ ){
  if(newParagraph[i] === "et"){
    etCount++;
  }
  
}
console.log(etCount)