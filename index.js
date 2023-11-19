// Iteration 1: Names and Input
const hacker1 = "John";
const hacker2 = "Jason";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} 
else if (hacker1.length < hacker2.length) { console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);                              } 
else { console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}                               

// Iteration 3: Loops
const capitalizedCharacters = [];
  for (let i = 0; i < hacker1.length; i++){ 
    capitalizedCharacters.push(hacker1[i].toUpperCase());
    } 
console.log(capitalizedCharacters.join(" "))

function ReverseString(str) {
  return str.split('').reverse().join('');
}
console.log(ReverseString(hacker2))

const comparisonResult = hacker1.localeCompare(hacker2);

if (comparisonResult < 0){
  console.log("The driver's name goes first.");
} else if (comparisonResult > 0){
  console.log("Yo, the navigator goes first, definitely.");
}
else {
  console.log("What?! You both have the same name?");
}

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper placerat leo egestas ullamcorper. Quisque vulputate id velit non dignissim. Sed consectetur, orci non molestie porttitor, urna arcu eleifend mauris, vel vestibulum arcu arcu eu massa. Morbi in libero in felis blandit tincidunt. Curabitur a luctus eros. In hac habitasse platea dictumst. Maecenas sollicitudin bibendum ipsum eget scelerisque. Quisque tincidunt purus ut leo imperdiet, et ultricies erat consequat. Nulla ultricies dolor vel arcu tincidunt dapibus. Suspendisse consectetur elementum arcu ut imperdiet. Sed mollis facilisis nibh id ultricies. Nunc eu magna in nibh euismod malesuada eu nec nisi. Pellentesque venenatis convallis augue, ac varius diam malesuada id. Integer cursus hendrerit magna, vel laoreet tortor. Donec quis augue egestas, semper erat eu, aliquam urna. Fusce quis auctor lorem, et lobortis erat.

Cras vitae libero dolor. Cras eget bibendum purus. Praesent feugiat ligula elit, at blandit leo venenatis in. Pellentesque nec massa fermentum, porttitor ante vitae, aliquam lectus. Donec nec mi elit. Aliquam feugiat rhoncus justo, quis tempor ante pretium vel. Aliquam finibus ultricies ultricies. In consequat elit semper arcu viverra elementum. Proin quis sagittis eros.

Fusce enim odio, elementum vitae eleifend eget, dictum eu ante. Sed porta, lorem eu molestie commodo, ligula ante congue dolor, sed blandit ligula purus eu urna. Integer sodales est sit amet quam posuere semper. Phasellus vulputate sapien vel metus accumsan, in aliquam nisl euismod. Cras porttitor elit at ipsum fringilla congue. Donec et dignissim leo. Maecenas hendrerit dui semper elit tincidunt, in tincidunt mi dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam et eleifend mauris, in fringilla quam. Mauris eget sem sapien. Nullam vel ullamcorper tellus, eget ullamcorper metus. Duis pharetra justo et metus eleifend porta. Praesent a augue eu nisi ornare feugiat sed ut lacus. Fusce accumsan sapien sed metus interdum, id tempus tellus facilisis. Praesent efficitur, tellus ut eleifend aliquet, leo metus elementum lectus, nec feugiat eros odio quis lacus.`

console.log(longText)

function WordCount(str) { 
  return str.split(" ").length;
}
console.log(WordCount(longText) + " words");

const wordToCount = "et"

const wordCount = longText.split(wordToCount).length - 1;
console.log (`The word "${wordToCount}" appears ${wordCount} times.`);


function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
const str1 = "A man, a plan, a canal, Panama!";
const str2 = "Amor, Roma";
const str3 = "race car";
const str4 = "stack cats";
const str5 = "step on no pets";
const str6 = "taco cat";
const str7 = "put it up";
const str8 = "Was it a car or a cat I saw?"; const str9 = "No 'x' in Nixon";
console.log(isPalindrome(str1)); 
console.log(isPalindrome(str2)); 
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));
console.log(isPalindrome(str5));
console.log(isPalindrome(str6));
console.log(isPalindrome(str7));
console.log(isPalindrome(str8));
console.log(isPalindrome(str9));
