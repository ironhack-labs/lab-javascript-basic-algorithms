// Iteration 1: Names and Input
let hacker1 = "Phillip";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Clara";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`);
  }

// Iteration 3: Loops
let nameWithSpaces1 = "";

for (let i=0; i < hacker1.length; i++){
  nameWithSpaces1 += hacker1[i] + " ";
}

console.log(nameWithSpaces1.slice(0,13).toUpperCase());

let nameWithSpaces2 = "";

for (let j=hacker2.length-1; j >= 0; j--) {
  nameWithSpaces2 += hacker2[j];
}

console.log(nameWithSpaces2);

if (hacker2[0] < hacker1[0]) {
    console.log("Yo, the navigator goes first definitely.");
  } else if (hacker2[0] > hacker1[0]) {
    console.log("The driver's name goes first.");
  } else {
    console.log("What?! You both have the same name?");
  }

// Bonus 1
let paraGraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet risus quis venenatis vulputate. Phasellus arcu enim, sagittis at mattis eu, aliquam vitae nisi. Donec vulputate sem velit, ut tempus neque maximus et. Ut vehicula augue erat. Integer placerat interdum sapien. Ut sed interdum dui, placerat tincidunt ipsum. Quisque feugiat odio sit amet scelerisque porttitor. Donec quis tellus ipsum. Duis a neque tortor. Sed quis nibh quam. Cras volutpat ante eu nibh hendrerit fringilla. Phasellus nulla massa, faucibus vel iaculis ac, lacinia sit amet orci. Suspendisse pulvinar consectetur metus, eget fringilla quam imperdiet rhoncus. Aenean dapibus scelerisque ipsum. Fusce tempus bibendum dignissim. In lacinia mauris nibh, ac blandit sapien imperdiet at. Morbi luctus sapien eu sapien tristique, non mattis nibh dictum. Vivamus quis pharetra arcu. Curabitur sit amet dolor nulla. Nunc ullamcorper quam ut augue ornare, ut laoreet diam elementum. Duis cursus mauris leo, non vulputate tortor tincidunt a. Phasellus diam arcu, mattis eu tempor id, consectetur et purus. Duis semper felis lectus, suscipit ullamcorper urna venenatis non. Phasellus luctus, arcu luctus interdum vulputate, mauris purus eleifend odio, sit amet dignissim nulla nisl eget erat. Etiam rutrum est erat, at semper neque finibus eget. Integer sed nunc ante. Duis non congue dui, a finibus erat. Nunc euismod tristique justo, id fringilla risus efficitur eu. Maecenas eget orci dui. Praesent et rhoncus mauris, eget iaculis nisi. Praesent molestie risus ac velit mattis placerat. Vivamus commodo ligula elementum ante mollis viverra. Suspendisse tristique, dolor sit amet vehicula gravida, nisi ante aliquam ante, ut vulputate magna dui et dui. Phasellus condimentum, ante vitae sagittis congue, elit nibh tempor lacus, egestas pulvinar lacus mauris sit amet elit.";

function WordCount(str) { 
  console.log(str.split(" ").length);
}

WordCount(paraGraphs);

let mystring = paraGraphs.split('.').join('');
let paraGraphsArr = mystring.split(" ");
let etCounter = 0;

for (let k=0; k < paraGraphsArr.length; k++){

  if(paraGraphsArr[k] == "et"){
    etCounter += 1;
  }
}

console.log(etCounter);

// Bonus 2
function phraseToCheck(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        console.log("Not a palindrome");
          return false;
      }
    }
    console.log("It is a palindrome!");
    return true;
   }
   
   phraseToCheck("taco cat");