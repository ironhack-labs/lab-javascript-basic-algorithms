// Names and Input
const hacker1 = 'Steve';
const hacker2 = prompt('What is your name ? ');
let palindrome = prompt('put a string to check ');
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
if(hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
  } else if(hacker1.length < hacker2.length){
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`wow, you both got equally long names, ${hacker2.length} characters!!`)
  };
// Loops
//Question 6
const spreadHacker1 = [...hacker1.toUpperCase()].join(" ");
console.log(`"${spreadHacker1}"`);

//Question 7
const reverseHacker2 = [...hacker2].reverse().join("")
console.log(`"${reverseHacker2}"`);

//Question 8
const checkOrder = hacker1.localeCompare(hacker2,undefined, {sensitivity: 'base'});
if(checkOrder == 1) {
  console.log('Yo, the navigator goes first definitely');
} else if(checkOrder == 0){
  console.log('What?! You both got the same name?');
} else{
  console.log(`The driver's name goes first`);
}

//Question 9
palindrome = palindrome.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
const reversePalindrome = [...palindrome].reverse().join("")
if(palindrome == reversePalindrome){
  console.log(`This string ${palindrome} is a palindrome`)
}else {console.log(`This string ${palindrome} is not a palindrome`);}


// Lorem ipsum generator
let stringLorem = `
Lorem ipsum dolor et amet, consectetur adipiscing elit. Mauris quis viverra leo. Nunc odio augue, laoreet sed sagittis nec, laoreet a est. Suspendisse potenti. Sed eleifend iaculis purus, sed pulvinar ligula euismod ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur id eleifend ipsum. Nunc diam mauris, efficitur a libero id, ultrices vehicula nulla. Duis velit nisi, vestibulum a ante ut, accumsan ullamcorper est. Fusce congue vulputate dui ut facilisis. Nullam ultricies, elit id accumsan pharetra, purus mi fringilla augue, at fringilla est augue non mi. Sed mauris urna, congue nec ligula ac, rhoncus condimentum eros. Suspendisse vitae ligula vulputate, pellentesque ante in, bibendum nunc. Fusce justo nulla, suscipit non neque nec, ultricies tristique enim.
Curabitur aliquet vel lorem vitae aliquam. Aliquam maximus libero augue, nec aliquam nunc venenatis eu. Nullam at neque orci. Fusce purus ante, vestibulum a euismod nec, eleifend non justo. Nulla a porttitor mauris, a faucibus magna. Praesent egestas augue sit amet pulvinar dapibus. Aenean mauris nulla, vehicula vitae augue vel, maximus varius ipsum. In sit amet felis velit. Nunc fermentum sagittis enim vulputate finibus. Vestibulum in imperdiet sapien, nec ultrices urna.
Pellentesque eu auctor diam. Suspendisse semper Et sed nunc semper dignissim. Proin Et varius ante. Vivamus condimentum quis enim id dictum. Duis pellentesque sollicitudin quam, malesuada tincidunt tellus feugiat nec. Suspendisse id ipsum eget nulla convallis ultricies eu sit amet justo. Sed vitae turpis sodales, facilisis ex quis, fermentum urna. Vivamus consectetur eu enim id dictum. Mauris sed tellus at lectus dapibus tristique ultrices quis neque. Vestibulum sodales blandit mollis. Integer dictum at eros non placerat. Suspendisse sit amet lacus venenatis, ultricies ipsum nec, feugiat nisl. Nam fermentum turpis eu imperdiet lacinia.
`
let count = 0;
stringLorem = stringLorem.replace(/\./g,'')
stringLorem = stringLorem.replace(/\,/g,'')
const arrayLorem = stringLorem.split(' ');
console.log(`This LoremIpsum has ${arrayLorem.length} words.`);

arrayLorem.forEach(el => {
  const word = el.toLowerCase();
  if(word == "et"){
    count++;
  }
})
console.log(`the word "et" appears ${count} times`);

