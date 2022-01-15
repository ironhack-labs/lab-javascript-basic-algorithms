
let driver = "Hacker1";
let navigator = "Hacker2";

// 1

if (driver.length > navigator.length){
  console.log('drivers name is longer')
} else if (driver.length < navigator.length){
  console.log('navigators name is longer')
} else {
  console.log('they are equal')
}

// 2

//SPLIT
console.log(driver.split('').join(' '));


// 3

//SPLIT AND UPPERCASE
console.log(driver.toUpperCase().split('').join(' '))

// REVERSE

console.log(driver.split('').reverse().join(''))

// LEXI ORDER

let allNames = [driver, navigator];
console.log(allNames.sort())

// BONUS 1

let loremIpsum =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus ultrices quam sed malesuada. Proin gravida luctus ante varius convallis. Aenean vehicula lectus a ultricies posuere. Nam ultricies metus a felis tempus facilisis. Aenean tristique mollis velit in gravida. Nullam a iaculis est. Morbi mauris tortor, pharetra eu sapien ut, malesuada viverra orci. Donec pretium dignissim ligula, eu sodales felis dignissim sit amet. Fusce fermentum est non convallis finibus.

Donec eget risus ac risus cursus suscipit. In elit odio, vehicula at ex nec, lacinia congue tellus. Donec eu orci hendrerit, pulvinar ipsum vitae, bibendum erat. Aenean sapien nunc, elementum a gravida eu, ornare quis libero. Maecenas id erat viverra, maximus purus sit amet, euismod libero. In sodales finibus ex. Suspendisse ligula purus, vehicula vel pharetra sit amet, hendrerit nec nibh. Ut dapibus nibh posuere mauris tincidunt sodales.

Nunc iaculis commodo turpis et maximus. Duis vitae erat iaculis, sodales felis sed, tempor dui. Mauris rutrum mattis eros, in ultricies metus malesuada sit amet. Mauris malesuada auctor finibus. Sed vitae orci pulvinar ante sagittis pretium sit amet ut ex. Curabitur vestibulum, odio sit amet iaculis vehicula, diam mi ullamcorper ipsum, ac iaculis ipsum odio nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non odio mollis, condimentum velit ut, scelerisque turpis. Etiam vulputate turpis sed nibh faucibus, id fringilla tortor dapibus. Ut eget egestas ipsum, at ultricies arcu. Suspendisse consequat justo et risus pharetra, at faucibus diam gravida.
`;

//COUNT WORDS
console.log(loremIpsum.split(" ").length);

//COUNT ET

let ch = "et";
let count = 0;
loremIpsum.split(' ').forEach(x => x == ch ? count++ : null)
console.log(count)

// PALINDROME

let phraseToCheck = 'Rick';

let reversedPhrase = phraseToCheck.split('').reverse().join('')

let lowerPhrase = phraseToCheck.toLowerCase();
let lowerCased = reversedPhrase.toLowerCase();

if (lowerPhrase == lowerCased){
  console.log("true")
} else{
  console.log("false")
}