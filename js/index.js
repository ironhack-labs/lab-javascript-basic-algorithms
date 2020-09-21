// Iteration 1:
const hacker1 = 'Samantha';
console.log(`"The driver's name is ${hacker1}"`);
const hacker2 = 'Dennis';
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration2:
const hacker1Leng = hacker1.length;
const hacker2Leng = hacker2.length;
console.log(hacker1Leng);
console.log(hacker2Leng);
if(hacker1Leng > hacker2Leng) {
  console.log(`The driver has the longest name, it has ${hacker1Leng} characters.`);
} else if(hacker1Leng < hacker2Leng) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Leng} characters.`);
} else if(hacker1Leng == hacker2Leng) {
  console.log(`Wow, you both have equally long names, ${hacker1Leng} characters!`)
}

// Iteration 3:

// 3.1:
let hacker1UpperCase = [];
for(i = 0; i < hacker1Leng; i++) {
  hacker1UpperCase.push(hacker1[i].toUpperCase());
}
console.log(`${hacker1UpperCase.toString().replace(/\,/g, ' ')}`);

// 3.2:
let hacker2Reverse = [];
for(let i = hacker2.length; i >= 0; i--) {
  hacker2Reverse.push(hacker2[i]);
}
console.log(hacker2Reverse.toString().replace(/\,/g, ''));

// 3.3:
const compareStrings = hacker1.localeCompare(hacker2);
switch(compareStrings) {
  case -1:
    console.log(`The driver's name goes first.`);
    break;
  case 1:
    console.log(`Yo, the navigator goes first definitely.`);
    break;
  case 0:
    console.log(`What?! You both have the same name?`);
    break;
  default:
    console.log(`Oh no! 😱 Something goes wrong! Please fix it 🤲 🙏 🤗`);
    break;
}

// Yay, it's Bonus Time:
let threeParagraphs = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum quam, semper et justo at, vehicula lacinia mi. Praesent congue leo dignissim urna aliquam eleifend. Sed ullamcorper rutrum nulla ac tempus. Proin posuere eros ac felis luctus aliquam. Morbi lacinia elit vitae rutrum aliquet. Sed ullamcorper massa gravida tincidunt tristique. Quisque sit amet rutrum mauris. Suspendisse luctus viverra nunc non euismod. Aenean congue fringilla mi vitae lacinia. Cras molestie sed dui a consectetur. Ut rutrum et dui vel sollicitudin. Fusce sit amet lacus est. Duis in neque vitae erat porttitor tempor et ac nisl. Nulla suscipit, nunc in facilisis bibendum, dolor risus posuere ex, quis eleifend nisi lacus ultrices mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Maecenas non urna odio. Maecenas eu blandit urna. Vestibulum non turpis eget velit accumsan convallis at suscipit nisl. Maecenas dui augue, fermentum ut urna at, facilisis convallis leo. Duis vitae mi felis. Aliquam lorem lorem, imperdiet a dui a, cursus lacinia velit. Quisque semper leo et turpis accumsan, eu faucibus lacus pulvinar. Donec eget quam non risus commodo consectetur at non ligula. Aliquam ut urna vel enim pharetra vulputate sed vitae metus. Morbi feugiat enim ante, eu tempor ligula imperdiet non. Nullam placerat nibh eros, eget commodo turpis dignissim vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nulla facilisi. Nam eleifend, velit nec vestibulum posuere, elit elit lobortis tellus, non rhoncus arcu ipsum non ex. Fusce gravida scelerisque tortor vitae scelerisque. Donec ut suscipit sapien. Proin nulla mi, finibus a orci non, luctus sollicitudin ex. Curabitur id dui sed nisi porta aliquet. Quisque ut cursus nisi, sit amet porttitor nunc. Nunc ultrices feugiat porta. In semper congue elit, eget imperdiet libero lobortis et. Nulla lorem neque, finibus ac nibh ut, hendrerit rutrum ipsum. Quisque sodales pharetra nibh malesuada ultricies. Nulla efficitur sapien ut consectetur dapibus. Etiam nec libero a turpis congue bibendum. Morbi aliquam arcu magna, sed sagittis leo sagittis in.';
let countWords = 0;
for(i = 0; i < threeParagraphs.length; i++) {
  if(threeParagraphs[i] == ' ') {
    countWords++;
  }
}
console.log(countWords);
let countEt = 0;
for(i = 0; i < threeParagraphs.length; i++) {
  if(threeParagraphs[i] == ' et ') {
    countEt++;
  }
}
if(countEt == 0) {
  console.log(`I'm Sorry but the Word et is not in the paragraph`);
} else if(countEt == 1) {
  console.log(`The Word et is once in the paragraph`);
} else if(countEt == 2) {
  console.log(`The Word et is twice in the paragraph`);
} else if(countEt < 2) {
    console.log(`The Word et is ${countEt} times in the paragraph`);
}