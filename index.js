// ITERATION 1 //

//const hacker1 = "mauricio";
//console.log(`the driver's name is ${hacker1}`);
//const hacker2 = "zoe";
//console.log(`the navigator's name is ${hacker2} `);
  
    // ITERATION 2 // 
  
 /*if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters`);
  }*/
   
    // ITERATION 3 //

// 3.1 //
/*const hacker1 = "mauricio";
let hacker1UpperCassed = "";
  for (let i = 0; i < hacker1.length; i++) {
    const char = hacker1[i].toUpperCase();
    hacker1UpperCassed += char;
}
console.log(...hacker1UpperCassed);*/


// 3.2 //
//const hacker1  = "mauricio";
/*let reversedString = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
      reversedString += hacker1[i].toUpperCase(); 
      } 
console.log(...reversedString);*/




// 3.3 //

/*if (hacker1 < hacker2) {
    console.log("The driver's name goes first");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely");
  } else {
    console.log("What! You both have the same name?");
  }*/
  
   // BONUS TIME! //

// BONUS 1 //
/*const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lectus vel ligula faucibus porta ut sit amet ligula. Nunc consectetur purus dolor, cursus consectetur est laoreet a. Duis iaculis enim rutrum purus interdum, vitae porta nisl malesuada. Phasellus pellentesque velit at tellus pharetra, vel placerat ligula venenatis. Mauris sed ligula auctor, ultricies dolor sed, laoreet sapien. Quisque nisi urna, condimentum eget dui et, luctus accumsan augue. Donec eu massa et elit sollicitudin fringilla. Fusce pretium orci id bibendum cursus. Suspendisse fringilla nulla vestibulum sem vulputate finibus. Etiam vitae nisi ac lectus ultrices eleifend id nec elit. Duis euismod orci quis erat rhoncus, sed finibus metus efficitur.Fusce quam massa, mattis at metus ac, facilisis elementum sapien. Proin eu libero et nunc rhoncus tempus. Integer feugiat vulputate augue vel venenatis. Mauris quis tellus urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sit amet mauris sit amet turpis cursus congue vel et libero. Pellentesque diam ipsum, varius sed ipsum ac, bibendum vestibulum velit. Nam vitae dolor convallis, mollis sapien ut, lacinia massa. Integer sapien libero, dignissim eu dolor vel, condimentum finibus ligula. Sed interdum volutpat ante vitae mollis.Donec egestas interdum tristique. Morbi nec tellus ac odio facilisis ultrices in in sapien. Phasellus sed tellus ac urna accumsan euismod. Pellentesque tincidunt risus quis sem semper lobortis. Vivamus ac felis quis diam porta lacinia. Pellentesque sem tellus, fringilla nec congue sed, dapibus et massa. Aliquam vehicula leo ac purus lobortis dictum in at dolor. Sed blandit sagittis bibendum. Phasellus efficitur velit sed magna hendrerit, at rhoncus elit feugiat. Phasellus auctor tristique blandit. Duis placerat augue eget porta rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet lorem sed sollicitudin condimentum. Ut ut arcu non eros viverra aliquam. Praesent justo lectus, hendrerit eget."
const wordCount = longText.split(' ').length;*/

//console.log(wordCount);

/*let count = 0;
for (let i = 0; i < longText.split(' ').length; i++) {
  const twoChars = longText[i] + longText[i + 1];
  
  if (twoChars === "et") {
    count++;
  }
}
console.log(count);*/

//BONUS 2 //

/*function palindrome(str) {
  const re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  const len = str.length;
  for (let i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
 }
 console.log(palindrome("race car")); */
 