// Iteration 1: Names and Input

let hacker1 = 'Stephan';

console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Denise';

let hacker3 = 'Zena';

console.log(`The navigator's names are ${hacker2} and ${hacker3}.`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
  } else if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    );
  } else {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker1.length} characters.`
    );
  }

// Iteration 3: Loops

let resultString = '';

for (let i = 0; i < hacker1.length; i++) {
  resultString = resultString.concat(hacker1[i], ' ');
}

console.log(resultString.toUpperCase());

let reverseString = '';

for (let j = hacker2.length - 1; j >= 0; j--) {
  reverseString = reverseString.concat(hacker2[j], ' ');
}

console.log(reverseString);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1:

let lorumIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra, turpis id luctus tempus, orci lacus mollis sapien, eget imperdiet dui metus sodales nibh. Donec dolor tortor, vehicula et augue vitae, efficitur condimentum nisl. Vestibulum id pellentesque ligula. Nunc sed pharetra purus. Nam gravida dolor eu ipsum dapibus placerat. Etiam tellus leo, ultricies non consequat eu, ullamcorper a orci. Pellentesque cursus luctus diam eget porttitor. Vivamus consectetur vehicula mauris quis fringilla. Ut lobortis orci a tincidunt feugiat. Vestibulum interdum tempus eros, vel ultrices elit rhoncus id. Phasellus faucibus mauris nec nisi vestibulum laoreet. Curabitur ipsum erat, maximus vitae luctus et, hendrerit ut nunc. Nullam vitae ante orci. Quisque malesuada purus leo, a rutrum justo pellentesque sed. Sed eget consectetur magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas imperdiet vel lorem a consectetur. Maecenas at risus ultrices, accumsan ipsum sit amet, cursus mauris. Praesent gravida libero justo, id dignissim metus gravida et. Nunc nec elit leo. Mauris non vulputate turpis. Donec ultrices neque eu lectus bibendum elementum. Nulla facilisi. Morbi quis ligula vel eros tristique vulputate non vitae nunc. Sed eget orci arcu. Pellentesque id nisi quam. Pellentesque vitae tellus eu leo porttitor varius. Sed semper venenatis sem vel cursus. Suspendisse eu sapien sollicitudin, elementum orci nec, pretium felis. Sed pellentesque, eros in consectetur rutrum, massa velit placerat metus, et fermentum metus eros non dolor. Proin venenatis enim et libero imperdiet blandit. Vestibulum laoreet ex pellentesque quam pellentesque, et eleifend elit commodo. Aliquam at efficitur tortor, pulvinar consectetur justo. Aliquam tempor massa eget lectus tempor maximus. Sed in quam ac neque tempor varius. Quisque sem dui, condimentum in dui malesuada, cursus vulputate massa.";

// Counting words:

wordCount = lorumIpsum.split(" ").length;
console.log(wordCount);

// Counting 'et':

function countEt (lorumIpsum) {
  let count = 0;
  for (let i = 0; i < lorumIpsum.length; i++)
    if((lorumIpsum[i] == "e") && (lorumIpsum[i+1] == "t")) {
      count += 1;
    }
  console.log(count);
}

countEt(lorumIpsum)

// Bonus 2:

function checkPalindrome(phraseToCheck){
    const phraseLength = phraseToCheck.length;
      
      for (let i = 0; i < phraseLength / 2; i++) {
        if (phraseToCheck[i] !== phraseToCheck[phraseLength - 1 - i]) {
          console.log('It is not a palindrome')
        } else {
            console.log('It is a palindrome')
        }
      }
  }  
  
  checkPalindrome("value")