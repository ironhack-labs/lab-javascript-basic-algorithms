// Iteration 1: Names and Input
let hacker1 = 'Tom Smith';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Thomas Cookbook';
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length){ 
   console.log ( `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else if (hacker1.length == hacker2.length){
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

// 3.1
let hacker1UpCase = hacker1.toUpperCase();
let hacker1InterResult = '';

for(let i = 0; i < hacker1UpCase.length; i++ ){
hacker1InterResult += hacker1UpCase[i] + ' '
 }

cosnole.log(hacker1InterResult.slice(0,-1));

// 3.2
let comparison = hacker1 < hacker2 
let comparison2 = hacker1 > hacker2

if (comparison = true && hacker1 != hacker2) { 
   console.log('The drivers name goes first.');
} else if (comparison2 = true && hacker1 != hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1 == hacker2) {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1 


let loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis libero sed felis feugiat placerat. Duis viverra erat vitae gravida porttitor. Maecenas posuere lobortis eros, at gravida neque. Pellentesque vel tortor lobortis ipsum ultricies venenatis. Duis porta mauris et massa ultrices feugiat. Ut non semper elit. Aenean imperdiet scelerisque dolor, in lobortis dolor dictum id. Vestibulum cursus consequat auctor. Praesent fringilla, nisi eget gravida finibus, ipsum enim ornare eros, at feugiat erat ex vitae mauris. Maecenas nec molestie lorem. Quisque imperdiet iaculis eros a aliquam.Praesent sed maximus nulla. Ut a tempus nisl. Mauris a ante facilisis tellus scelerisque ultrices sit amet finibus metus. Morbi nunc magna, interdum id lectus vitae, semper molestie turpis. Nulla ut felis ipsum. Nunc faucibus purus eget efficitur varius. Proin ut enim at leo pulvinar ornare id sed erat. Aenean quam felis, elementum id tempus in, pellentesque varius arcu. Phasellus viverra arcu id nunc euismod vulputate. Donec rhoncus ante ex, et volutpat sem eleifend at. Sed nec felis id turpis sagittis semper.Fusce egestas eget erat ac rhoncus. Pellentesque lobortis sapien ac eros viverra consectetur. Suspendisse sodales, ante et sagittis ultricies, diam felis lobortis mi, a euismod urna ex vitae diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vestibulum lobortis metus, ac fringilla metus rhoncus eget. Morbi quis rhoncus ipsum. Suspendisse rutrum eu arcu ac varius. Nunc vel neque at dui aliquam tristique in non ante. Nunc velit dui, sodales nec consequat nec, rhoncus a eros. Curabitur consequat commodo odio a luctus. Etiam nec purus vel lectus dictum faucibus ac a turpis. Mauris semper mauris lectus, in efficitur metus lobortis vitae. Praesent ut semper nisi. Vestibulum convallis, dui convallis tincidunt scelerisque, elit nisi blandit lectus, dictum fermentum massa urna ultricies lectus"

const arr = loremipsum.split (' ');
console.log(arr.filter(word => word != '').length);

const newArr = loremipsum.match(/et/g);
console.log(newArr.length);

// Bonus 2

let phraseToCheck = "a moma"
let phraseToCheckLow = phraseToCheck.toLowerCase() 
let phraseToCheckLowNoaSpace = phraseToCheckLow.replaceAll(' ',"")

const arrayValues = phraseToCheckLow.split('');
const reverseArrayValues = arrayValues.reverse();
const reverseString = reverseArrayValues.join('');

if (phraseToCheckLow == reverseString) {
  console.log('This is a Palindrome!');
} else {
  console.log('this is not a Palindrome!');
}

let phraselength = phraseToCheckLow.length


