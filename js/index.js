// Iteration 1: Names and Input
let hacker1 = 'John'; 
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = 'Alexander';
console.log(`"The driver's name is ${hacker2}"`);

// Iteration 2: Conditionals
//option 1: hacker 1’s name longer than hacker 2
//option 2: hacker 2’s name longer than hacker 1
//option 3: both name’s are equal length

if (hacker1.length > hacker2.length) {
  console.log(`"The driver has the longest name, it has ${hacker1.length} characters."`);
} else if (hacker1.length < hacker2.length) {
  console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters."`);
} else {
  console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!"`);
}

// Iteration 3: Loops
// 3.1
let i = 0;
let printedName = '';

for (let i = 0; i < hacker1.length; i ++) {
  printedName += (`${hacker1[i]} `);
}
  console.log(printedName.toUpperCase());

// 3.2  
let x = 0;
let printedNavName= '';

for (let x = hacker2.length-1; x >= 0; x --) {
  printedNavName += (`${hacker2[x]}`);
}
  console.log(printedNavName);
  
  
//3.3
if (hacker1.localeCompare(hacker2) > 0) {
    console.log('The driver\'s name goes first.');
} else if (hacker1.localeCompare(hacker2) < 0) {
    console.log('Yo, the navigator goes first definitely.');
} else {
    console.log('What?! You both have the same name?');
}

//Bonus 1
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Aliquam sem et tortor consequat id porta. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Mauris cursus mattis molestie a iaculis at erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Odio ut enim blandit volutpat maecenas volutpat. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Nam aliquam sem et tortor consequat. Eu augue ut lectus arcu bibendum. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Consequat ac felis donec et odio pellentesque diam volutpat commodo.

Curabitur gravida arcu ac tortor. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Facilisis volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Ac turpis egestas integer eget aliquet. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Ac turpis egestas integer eget. Egestas sed sed risus pretium quam vulputate. Id leo in vitae turpis massa sed. Est ante in nibh mauris cursus mattis molestie. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Tellus mauris a diam maecenas sed enim ut sem. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Dolor sit amet consectetur adipiscing elit. Quis commodo odio aenean sed adipiscing diam donec. Est ante in nibh mauris cursus mattis molestie a iaculis.

Velit aliquet sagittis id consectetur purus ut. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Tellus id interdum velit laoreet id donec ultrices tincidunt. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Nisl vel pretium lectus quam id leo in. Eget lorem dolor sed viverra ipsum nunc. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Aliquet bibendum enim facilisis gravida neque convallis. Id venenatis a condimentum vitae sapien pellentesque. Habitant morbi tristique senectus et. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas sed tempus urna et. Integer quis auctor elit sed vulputate mi sit amet mauris. Arcu odio ut sem nulla pharetra diam sit amet nisl. Eget felis eget nunc lobortis mattis aliquam faucibus. Non consectetur a erat nam. Urna molestie at elementum eu facilisis sed odio morbi quis. Velit sed ullamcorper morbi tincidunt ornare massa eget. Id aliquet lectus proin nibh nisl.`;


console.log(loremIpsum.split(' ').filter(element => element == 'et').length)

let palindrome = 'A man, a plan, a canal, Panama!';

palindrome = palindrome.split('!').join('')

palindrome = palindrome.split(',').join('');

// .split(' ').join()

//let cleanedPalindrome = '';

//for(let counter = 0; counter < palindrome.length; counter++) {
//  cleanedPalindrome += palindrome[counter];
//}

//console.log(cleanedPalindrome)  

console.log(palindrome.split('!').join('').toLowerCase())


let reversedPalindrome = '';

for(let counter = palindrome.length - 1; counter >= 0; counter--) {
  reversedPalindrome += palindrome[counter]
}

console.log(palindrome)
console.log(reversedPalindrome)

//console.log(palindrome,reversedPalindrome, palindrome == reversedPalindrome)