// Iteration 1: Names and Input
//console.log("I'm ready!");

let hacker1= "Carolina"
console.log("The driver's name is" + hacker1 + ".");
let hacker2= "Maria"
console.log("The navigator's name is" + hacker2 + ".")

//
// Iteration 2: Conditionals
//2.1
 const driversName = "Carolina";
 const navigatorsName = "Josip";
 if ((driversName.length) > (navigatorsName.length)) {
    console.log("The driver has the longest name, it has " + driversName.length + " characters.");
 } else if (navigatorsName.length > driversName.length) {
    console.log("It seems that the navigator has the longest name, it has "+ navigatorsName.length +" characters." );
    } else  {
        console.log("Wow, you both have equally long names," + driversName.length + " characters!");
    }
 
// Iteration 3: Loops

// 3.1 
const driversName = "Carolina";
let newName=""
for (let i= 0; i < driversName.length;i++ ){
newName += driversName[i].toUpperCase() + " "
}

console.log(newName);


// 3.2
const driversName = "Carolina";
let newNameBack = "";
for (let i= driversName.length -1; i >= 0; i--){
 /* console.log(driversName[i]); */
    newNameBack += driversName[i];  
}
console.log(newNameBack); 


//3.3
const driversName = "Carolina";
 const navigatorsName = "Josip";
// los valores son -1(menor) 1(mayor) 0(son iguales)
  if (driversName.localeCompare(navigatorsName) === -1 { 
    console.log("The drivers name goes first")
  }else if (driversName.localeCompare(navigatorsName) === 1 {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
   

//  BONUS 1
//1.
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui molestie, vulputate metus eu, dignissim massa. Nullam ultrices arcu diam, vitae luctus est tempor a. Nullam euismod, sem sed dapibus maximus, massa metus feugiat tellus, vitae ultricies tellus ligula id odio. Aliquam scelerisque rhoncus velit non cursus. Donec viverra massa vitae ex convallis dapibus. Donec sodales massa in quam rutrum, et auctor mi tempor. Nunc in finibus lorem, sed congue lectus. Nunc quis aliquam arcu. Morbi malesuada, lorem pharetra dictum dictum, augue massa mattis augue, sed pretium orci neque eget lacus. Nullam vitae quam ex. Pellentesque a iaculis nibh, vitae dictum massa. Nulla interdum felis nisl, sit amet ullamcorper elit dapibus at. In consequat purus at felis euismod semper. Phasellus pretium, velit a elementum condimentum, metus est pulvinar eros, sed posuere ipsum neque at velit. Nunc sed vulputate purus. Sed nec augue pulvinar, suscipit tortor non, sagittis lorem. Morbi placerat malesuada ipsum ac accumsan. Donec commodo magna sit amet porttitor ultrices. Donec ac lectus mi. Maecenas quis maximus nibh, non mattis urna. Ut eget nunc sed quam euismod aliquet. Nam condimentum quam nec tincidunt accumsan. Integer accumsan, sem nec accumsan molestie, augue velit dictum urna, vel vehicula sapien dolor quis leo. Vivamus varius pellentesque ipsum ac pulvinar. Integer rutrum, justo a pellentesque ornare, nibh tellus varius nisl, vel mattis sem ipsum a felis. Cras feugiat tortor non pulvinar congue. Aenean scelerisque urna nunc, ut tincidunt dui imperdiet consequat. Pellentesque fermentum tincidunt congue. Maecenas vitae blandit arcu. Maecenas id massa odio. Nulla gravida, sem placerat gravida vulputate, metus lacus malesuada felis, at sagittis augue tortor a diam. Pellentesque orci leo, mattis accumsan sagittis vitae, ultricies pretium eros. In viverra vulputate arcu sed porta. Vivamus tincidunt bibendum lacus non semper. Nunc eu consectetur neque, quis tempus turpis. Morbi quis lobortis eros, sit amet placerat nulla. Donec est arcu, placerat vitae odio et, tempor varius elit. Phasellus aliquam erat in eros egestas, vel dapibus turpis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam porttitor ultricies elit, sit amet dapibus nulla tincidunt a. Vivamus venenatis lacus dui. Mauris placerat est enim, id sagittis diam finibus ut. Nunc congue diam sed ultricies vestibulum. Pellentesque efficitur tortor vitae arcu finibus pretium.";

//2
let wordCount = 1;
for (let i= 0; i < lorem.lenght -1; i++) {
  if (lorem[i] === " ") {
    wordCount++;
  }
}
console.log(wordCount);


let words = phrase.split(" ");

console.log(words);
console.log(words[0]);
console.log(words.length);

 //3
 //console.log(phrase.split(" et").length -1);
 let count = 0;
 
 for (let i = 0; i < phrase.length; i++) {
   const latinWord = phrase[i] + phrase[i + 1];
   
   if ( latinWord === " et" ) {
     count++;
   }
 }
 console.log(count);


 //BONUS 2
 function isPalidrome(str) {
  //remove whitespace, kommas and dots
  const re = /[^A-Za-z0-9]/getComputedStyle;
    str = str.toLowerCase().replace(re, " ");

    const len = str.length; {
        for (let i= 0; i < len / 2; i++) {
      return false;
    }
 }
 return true;
}

console.log(isPalidrome)